import { Option } from "./common";
import { useContext, useState } from "react";
import { AccountContext } from "./accountContext";
import { useRouter } from "next/router";
import Input from "@/components/common/authInput";
import TextArea from "@/components/common/Textarea";
import Label from "@/components/common/Label";
import { Button } from "@/components/common/authBtn";
import SelectBox from "@/components/common/SelectBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Cookies from "js-cookie";

export function SignupForm() {
  const { switchToSignin } = useContext(AccountContext);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [link, setLink] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [theme, setTheme] = useState("");
  const [about, setAbout] = useState("");
  const [position, setPosition] = useState("");
  const [field, setField] = useState("");
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [showAvatar, setShowAvatar] = useState(false);

  function handleUpload(e) {
    setAvatar(e.target.files[0]);
    setShowAvatar(true)
  }

  const handleRegister = () => {
    let data = new FormData();
    data.append('email', email)
    data.append('password', password)
    data.append('first_name', firstName)
    data.append('last_name', lastName)
    data.append('domain', link)
    data.append('avatar', avatar)
    data.append('theme', theme)
    data.append('about', about)
    data.append('position', position)
    data.append('activation_field', field)
    axios
      .post("https://keykoja.iran.liara.run/core/register/", data)
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
            <Label value="ایمیل" />
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="ایمیل"
            />
            <Label value="نام" />
            <Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="نام"
            />
            <Label value="نام خانوادگی" />
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="نام خانوادگی"
            />

            <Label value="رمز عبور" />
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="رمز عبور"
            />
            <Label value="لینک" />
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
                <Label value="حوزه فعالیت" />
                <SelectBox
                  options={["اداری", "آموزشی", "درمانی"]}
                  value={field}
                  setValue={setField}
                  placeholder="حوزه فعالیت را انتخاب کنید"
                />
              </div>

              <div className="w-1/2">
                <Label value="سمت شغلی" />
                <Input
                  type="text"
                  placeholder="سمت"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                />
              </div>
            </div>

            <Label value="تصویر آواتار" />
            <input
              id="avatar"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={(event) => handleUpload(event)}
            />
            <div className="w-full flex flex-col justify-between mb-2">
              <div className="w-full flex justify-center items-center">
                {showAvatar ? (
                  <img
                    src={URL.createObjectURL(avatar)}
                    className="w-[80px] h-[80px] rounded-[100%] mb-1 object-cover"
                  />
                ) : (
                  <div className="w-[80px] h-[80px] rounded-[100%] mb-1 border border-slate-400 text-[8px] flex justify-center items-center text-center">
                    تصویر آواتار خود را بارگذاری کنید.
                  </div>
                )}
              </div>
              <div
                className="w-full flex justify-end items-center cursor-pointer"
                onClick={() => document.getElementById("avatar").click()}
              >
                <span className="w-full flex flex-col justify-center items-center mt-1 py-1 px-3 text-[9px] text-gray-500 border border-slate-400 rounded-md ">
                  <FontAwesomeIcon icon={faUpload} className="mb-1" />
                  بارگذاری فایل
                </span>
              </div>
            </div>
            <Label value="درباره من / پیام خوش آمد گویی" />
            <TextArea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              placeholder="یک پیام خوش آمد گویی و یا توضیح مختصر درباره خودتان وارد کنید."
            ></TextArea>
            <Label value="تم رنگ" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="w-full flex">
                <div
                  className="w-1/3 p-1 ml-2 flex items-center cursor-pointer transition-all duration-500 hover:shadow-xl border border-slate-200 mb-3 rounded-lg "
                  onClick={() => setTheme("theme 1")}
                >
                  <div className="w-1/3 h-12 bg-[#05668D]"></div>
                  <div className="w-1/3 h-12 bg-[#028090]"></div>
                  <div className="w-1/3 h-12 bg-[#00A896]"></div>
                </div>
                <div
                  className="w-1/3 p-1 ml-2 flex items-center cursor-pointer transition-all duration-500 hover:shadow-xl border border-slate-200 mb-3 rounded-lg"
                  onClick={() => setTheme("theme 2")}
                >
                  <div className="w-1/3 h-12 bg-[#A3B18A]"></div>
                  <div className="w-1/3 h-12 bg-[#588157]"></div>
                  <div className="w-1/3 h-12 bg-[#3A5A40]"></div>
                </div>
                <div
                  className="w-1/3 p-1 flex items-center cursor-pointer transition-all duration-500 hover:shadow-xl border border-slate-200 mb-3 rounded-lg"
                  onClick={() => setTheme("theme 3")}
                >
                  <div className="w-1/3 h-12 bg-[#EFD9CE]"></div>
                  <div className="w-1/3 h-12 bg-[#DEC0F1]"></div>
                  <div className="w-1/3 h-12 bg-[#B79CED]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center w-full mb-4">
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
