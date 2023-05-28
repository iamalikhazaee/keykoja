import {
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  BoldLink,
  SubmitButton,
} from "./common";
import { Marginer } from "@/components/marginer";
import { useContext, useState } from "react";
import { AccountContext } from "./accountContext";
import { useRouter } from "next/router";
// import { useRecoilState } from "recoil";
// import { current_user } from '../../../atoms'
import axios from "axios";

export function SignupForm() {
  const { switchToSignin } = useContext(AccountContext);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [link, setLink] = useState("");
  const router = useRouter();
  // const [currentUser, setCurrentUser] = useRecoilState(current_user)

  const handleRegister = () => {
    axios
      .post("http://127.0.0.1:8000/core/register/", {
        email: email,
        password: password,
        first_name: firstName,
        last_name: lastName,
        domain: link,
      })
      .then((res) => {
        console.log(res);
        // setCurrentUser(res.data)
        localStorage.setItem('userDetails', JSON.stringify(res.data))
        localStorage.setItem('token', JSON.stringify(res.data.token.access))
        router.push({
          pathname: "/dashboard",
        });
      });
  };

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="ایمیل"
        />
        <Input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="نام"
        />
        <Input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="نام خانوادگی"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="رمز عبور"
        />
        {/* <Input type="password" placeholder="تائید رمز عبور" /> */}
        <Input
          value={link}
          onChange={(e) => setLink(e.target.value)}
          type="text"
          placeholder="لینک"
        />
      </FormContainer>
      <Marginer direction="vertical" margin={20} />
      <SubmitButton type="submit" onClick={handleRegister}>
        ثبت نام
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        حساب کاربری دارید؟
        <BoldLink href="#" onClick={switchToSignin}>
          وارد شوید
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
