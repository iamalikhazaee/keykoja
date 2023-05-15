import { useContext } from "react";
import {
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  BoldLink,
  SubmitButton,
} from "./common";
import { Marginer } from "@/components/marginer";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {

    const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="ایمیل" />
        <Input type="password" placeholder="رمز عبور" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">رمز عبور خود را فراموش کرده اید؟</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">ورود</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="">
      حساب کاربری ندارید؟ <BoldLink href="" onClick={switchToSignup}>ثبت‌نام کنید</BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
