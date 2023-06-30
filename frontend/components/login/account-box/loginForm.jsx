import { useContext, useState } from "react";
import {
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  BoldLink,
  SubmitButton,
  Label,
} from "./common";
import { Marginer } from "@/components/marginer";
import { AccountContext } from "./accountContext";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { current_user } from "@/atoms";

export function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  // const [currentUser, setCurrentUser] = useRecoilState(current_user)

  const { switchToSignup } = useContext(AccountContext);

  const handleLogin = () => {
    axios
      .post("http://127.0.0.1:8000/core/login/", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data.user);
        // setCurrentUser(res.data);
        localStorage.setItem("userDetails", JSON.stringify(res.data.user));
        localStorage.setItem("token", JSON.stringify(res.data.access));
        Cookies.set("auth", true);
        Cookies.set("token", JSON.stringify(res.data.access));
        router.push("/dashboard");
      });
  };

  return (
    <BoxContainer>
      <FormContainer>
        <Label>ایمیل</Label>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="ایمیل"
        />
        <Marginer direction="vertical" margin={10} />
        <Label>رمز عبور</Label>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="رمز عبور"
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      {/* <MutedLink href="#">رمز عبور خود را فراموش کرده اید؟</MutedLink> */}
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton onClick={handleLogin} type="submit">
        ورود
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="">
        حساب کاربری ندارید؟{" "}
        <BoldLink href="" onClick={switchToSignup}>
          ثبت‌نام کنید
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
