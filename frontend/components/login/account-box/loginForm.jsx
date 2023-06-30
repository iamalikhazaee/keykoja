import { useContext, useState } from "react";
import {
  BoxContainer,
  FormContainer,
  // Input,
  MutedLink,
  BoldLink
} from "./common";
import { AccountContext } from "./accountContext";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { Input } from "@/components/common/authInput";
import { Label } from "@/components/common/Label";
import { Button } from "@/components/common/authBtn";

export function LoginForm () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { switchToSignup } = useContext(AccountContext);

  const handleLogin = () => {
    axios
      .post("http://127.0.0.1:8000/core/login/", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        // localStorage.setItem("userDetails", JSON.stringify(res.data.user));
        // localStorage.setItem("token", JSON.stringify(res.data.access));
        // Cookies.set("auth", true);
        // Cookies.set("token", JSON.stringify(res.data.access));
        // router.push("/dashboard");
      });
  };

  return (
    <div className="w-full flex flex-col items-center mt-3">
      <div className="w-full flex flex-col">
        <Label>ایمیل</Label>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="ایمیل"
        />
        <Label>رمز عبور</Label>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="رمز عبور"
        />
      </div>
      <Button onClick={handleLogin} type="submit">
        ورود
      </Button>
      <span className="text-[10px] text-gray-400 font-medium decoration-transparent" href="">
        حساب کاربری ندارید؟{" "}
        <span className="text-[10px] text-[#2f5061] font-medium decoration-transparent mx-1 cursor-pointer" href="" onClick={switchToSignup}>
          ثبت‌نام کنید
        </span>
      </span>
    </div>
  );
}
