import { Option } from "./common";
import { useContext, useState } from "react";
import { AccountContext } from "./accountContext";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import axios from "axios";
import Image from "next/image";
import Green from "@/public/green.png";
import Blue from "@/public/blue.png";
import Violet from "@/public/violet.png";
import { Input } from "@/components/common/authInput";
import { TextArea } from "@/components/common/Textarea";
import { Label } from "@/components/common/Label";
import { Button } from "@/components/common/authBtn";
import SelectBox from "@/components/common/SelectBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export function SignupForm() {
  const { switchToSignin } = useContext(AccountContext);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [link, setLink] = useState("");
  const [field, setField] = useState("");
  const [position, setPosition] = useState("");
  const router = useRouter();
  const [step, setStep] = useState(1);

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
        console.log(res.data);
        localStorage.setItem("userDetails", JSON.stringify(res.data));
        localStorage.setItem("token", JSON.stringify(res.data.token.access));
        Cookies.set("auth", true);
        Cookies.set("token", JSON.stringify(res.data.token.access));
        router.push("/dashboard");
      });
  };

  return (
    <div className="w-full flex flex-col items-center mt-3">
      {step === 1 && (
        <>
          <div className="w-full flex flex-col">
            <Label>ایمیل</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="ایمیل"
            />
            <Label>نام</Label>
            <Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="نام"
            />
            <Label>نام خانوادگی</Label>
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="نام خانوادگی"
            />

            <Label>رمز عبور</Label>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="رمز عبور"
            />
            <Label>لینک</Label>
            <Input
              value={link}
              onChange={(e) => setLink(e.target.value)}
              type="text"
              placeholder="لینک"
            />
          </div>

          <Button
            type="submit"
            onClick={() => setStep(2)}
            bg={"#354F52"}
            text={"#fff"}
          >
            ادامه
          </Button>
        </>
      )}
      {step === 2 && (
        <>
          <div className="w-full flex flex-col">
            <div className="w-full flex justify-between">
              <div className="w-1/2 ml-2">
                <Label>حوزه فعالیت</Label>
                <SelectBox
                  options={["اداری", "آموزشی", "درمانی"]}
                  value={field}
                  setValue={setField}
                />
              </div>

              <div className="w-1/2">
                <Label>سمت شغلی</Label>
                <SelectBox
                  options={["اداری", "آموزشی", "درمانی"]}
                  value={position}
                  setValue={setPosition}
                />
              </div>
            </div>

            <Label>تصویر آواتار</Label>
            <Input
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              type="file"
              placeholder="تصویر پروفایل"
            />
            <Label>درباره من / پیام خوش آمد گویی</Label>
            <TextArea rows={3}></TextArea>
            <Label>تم رنگ</Label>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="w-full flex">
                <div className="w-1/3 p-1 ml-2 flex items-center cursor-pointer transition-all duration-500 hover:shadow-xl border border-slate-200 mb-3 rounded-lg ">
                  <div className="w-1/3 h-12 bg-[#05668D]"></div>
                  <div className="w-1/3 h-12 bg-[#028090]"></div>
                  <div className="w-1/3 h-12 bg-[#00A896]"></div>
                </div>
                <div className="w-1/3 p-1 ml-2 flex items-center cursor-pointer transition-all duration-500 hover:shadow-xl border border-slate-200 mb-3 rounded-lg">
                  <div className="w-1/3 h-12 bg-[#A3B18A]"></div>
                  <div className="w-1/3 h-12 bg-[#588157]"></div>
                  <div className="w-1/3 h-12 bg-[#3A5A40]"></div>
                </div>
                <div className="w-1/3 p-1 flex items-center cursor-pointer transition-all duration-500 hover:shadow-xl border border-slate-200 mb-3 rounded-lg">
                  <div className="w-1/3 h-12 bg-[#EFD9CE]"></div>
                  <div className="w-1/3 h-12 bg-[#DEC0F1]"></div>
                  <div className="w-1/3 h-12 bg-[#B79CED]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full mb-4">
            <Button
              type="submit"
              onClick={handleRegister}
              bg={"#354F52"}
              text={"#fff"}
            >
              ثبت نام
            </Button>
            <Button
              type="submit"
              onClick={() => setStep(1)}
              bg={"#f6f7f8"}
              text={"#707475"}
            >
              بازگشت
            </Button>
          </div>
        </>
      )}
      <span
        className="text-[10px] text-gray-400 font-medium decoration-transparent"
        href="#"
      >
        حساب کاربری دارید؟
        <span
          className="text-[10px] text-[#2f5061] font-medium decoration-transparent mx-1 cursor-pointer"
          href="#"
          onClick={switchToSignin}
        >
          وارد شوید
        </span>
      </span>
    </div>
  );
}

//ax
//hoze faaliat
//semat
//welcome message
//theme
