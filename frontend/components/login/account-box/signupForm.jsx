import {
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  BoldLink,
  SubmitButton,
} from "./common";
import { Marginer } from "@/components/marginer";
import { useContext } from "react";
import { AccountContext } from "./accountContext";

export function SignupForm() {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="نام و نام خانوادگی" />
        <Input type="email" placeholder="ایمیل" />
        <Input type="password" placeholder="رمز عبور" />
        <Input type="password" placeholder="تائید رمز عبور" />
      </FormContainer>
      <Marginer direction="vertical" margin={20} />
      <SubmitButton type="submit">ثبت نام</SubmitButton>
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
