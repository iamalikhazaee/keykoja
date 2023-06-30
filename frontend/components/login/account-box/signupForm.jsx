import {
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  BoldLink,
  SubmitButton,
  SelectBox,
  Option,
  Label,
  TextArea,
} from "./common";
import { Marginer } from "@/components/marginer";
import { useContext, useState } from "react";
import { AccountContext } from "./accountContext";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { current_user } from "../../../atoms";
import Cookies from "js-cookie";
import axios from "axios";
import Image from "next/image";
import Green from "@/public/green.png";
import Blue from "@/public/blue.png";
import Violet from "@/public/violet.png";

export function SignupForm() {
  const { switchToSignin } = useContext(AccountContext);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [link, setLink] = useState("");
  const router = useRouter();
  const [step, setStep] = useState(1);
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
        // setCurrentUser(res.data)
        console.log(res.data);
        localStorage.setItem("userDetails", JSON.stringify(res.data));
        localStorage.setItem("token", JSON.stringify(res.data.token.access));
        Cookies.set("auth", true);
        Cookies.set("token", JSON.stringify(res.data.token.access));
        router.push("/dashboard");
      });
  };

  return (
    <BoxContainer>
      {step === 1 && (
        <>
          <FormContainer>
            <Label>ایمیل</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="ایمیل"
            />
            <Marginer direction="vertical" margin={10} />
            <Label>نام</Label>
            <Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="نام"
            />
            <Marginer direction="vertical" margin={10} />
            <Label>نام خانوادگی</Label>
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="نام خانوادگی"
            />
            <Marginer direction="vertical" margin={10} />
            <Label>رمز عبور</Label>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="رمز عبور"
            />
            <Marginer direction="vertical" margin={10} />
            {/* <Input type="password" placeholder="تائید رمز عبور" /> */}
            <Label>لینک</Label>
            <Input
              value={link}
              onChange={(e) => setLink(e.target.value)}
              type="text"
              placeholder="لینک"
            />
          </FormContainer>
          <Marginer direction="vertical" margin={20} />
          <SubmitButton type="submit" onClick={() => setStep(2)}>
            ادامه
          </SubmitButton>
        </>
      )}
      {step === 2 && (
        <>
          <FormContainer>
            <Label>حوزه فعالیت</Label>
            <SelectBox>
              <Option>s</Option>
              <Option>s</Option>
              <Option>s</Option>
            </SelectBox>
            <Marginer direction="vertical" margin={10} />
            <Label>سمت شغلی</Label>
            <SelectBox>
              <Option>s</Option>
              <Option>s</Option>
              <Option>s</Option>
            </SelectBox>
            <Marginer direction="vertical" margin={10} />
            <Label>تصویر آواتار</Label>
            <Input
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              type="file"
              placeholder="تصویر پروفایل"
            />
            <Marginer direction="vertical" margin={10} />
            <Label>درباره من / پیام خوش آمد گویی</Label>
            <TextArea></TextArea>
            <Marginer direction="vertical" margin={10} />
            <Label>تم رنگ</Label>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Image src={Green} width={300} height={50} />
              <Marginer direction="vertical" margin={10} />
              <Image src={Blue} width={300} height={50} />
              <Marginer direction="vertical" margin={10} />
              <Image src={Violet} width={300} height={50} />
            </div>
          </FormContainer>
          <Marginer direction="vertical" margin={20} />

          <SubmitButton type="submit" onClick={() => setStep(2)}>
            ثبت نام
          </SubmitButton>
          <Marginer direction="vertical" margin={20} />
          <SubmitButton type="submit" onClick={() => setStep(1)}>
            بازگشت
          </SubmitButton>
        </>
      )}
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

//ax
//hoze faaliat
//semat
//welcome message
//theme
