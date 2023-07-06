import Image from "next/image";

import AddEvent from "@/public/images/add-event.png";
import GuestPage from "@/public/images/guest-page.png";
import EventsGuests from "@/public/images/events-guests.png"
import Divider from "@/public/images/divider.png"

export default function Zigzag() {
  return (
    <section>
      <div className="w-full">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="w-full py-12 mx-auto text-center mb-10 bg-[#1b4332] text-[#d8f3dc]">
            <h1 className="text-xl mb-4">قابلیت های متعدد در یک محصول</h1>
            <p className="text-[13px] leading-7">
              با قابلیت ها و امکانات ما آشنا بشید و بعد شروع به استفاده کنید.
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-20 px-5">
            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="mx-auto w-full border border-slate-200 rounded-md"
                  src={AddEvent}
                  // width={540}
                  // height={405}
                  alt="Features 01"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full h-full py-3 bg-[#2d6a4f] rounded-md mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16 pl-3">
                  <h3 className="mb-3 text-base text-[#1b4332]">
                    افزودن رویداد به تعداد دلخواه
                  </h3>
                  <p className="text-[13px] text-[#d8f3dc] mb-4 leading-7">
                    شما میتونید به هر تعداد که نیاز دارین جلسه و رویداد اضافه
                    کنید و همچنین میتونید بصورت موقت هر کدوم رو غیر فعال و یا
                    بعد از اینکه کارتون تموم شد حذفش کنید.
                  </p>
                  <ul className="text-[12px] text-[#d8f3dc] pr-5">
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-[#1b4332] ml-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>افزودن رویداد</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-[#1b4332] ml-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>ویرایش رویداد</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-[#1b4332] ml-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>حذف رویداد</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-up"
              >
                <Image
                  className="mx-auto w-full border border-slate-200 rounded-md"
                  src={GuestPage}
                  width={540}
                  height={405}
                  alt="Features 02"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 bg-[#2d6a4f] h-full py-3 rounded-md"
                data-aos="fade-left"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16 pl-3">
                  <h3 className="text-base mb-4 text-[#1b4332]">صفحه میهمان</h3>
                  <p className="text-[13px] text-[#d8f3dc] mb-4 leading-7">
                    با به اشتراک گذاشتن لینک رویدادها و یا لینک مختص به خودتون
                    میتونین امکان هماهنگی و رزرو وقت رو به مراجعه کنندگانتون
                    بدین.
                  </p>
                  <ul className="text-[12px] text-[#d8f3dc] pr-5">
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-[#1b4332] ml-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>مشاهده روزهای قابل رزرو</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-[#1b4332] ml-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>مشاهده ساعت های قابل رزرو</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-[#1b4332] ml-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>مشاهده جزئیات و توضیحات</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="mx-auto w-full border border-slate-200 rounded-md"
                  src={EventsGuests}
                  // width={540}
                  // height={405}
                  alt="Features 01"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl bg-[#2d6a4f] md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 h-full py-3 rounded-md"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16 pl-3">
                  <h3 className="mb-3 text-base">
                    قابلیت مشاهده رویدادها و میهمانان هر رویداد
                  </h3>
                  <p className="text-[13px] text-[#d8f3dc] mb-4 leading-7">
                    شما توی پروفایل خودتون یه قسمت دارین که میتونین تمامی رویدادها رو به همراه کسانی که جلسه ای با شما رزرو کردن مشاهده کنید.
                  </p>
                  <ul className="text-[12px] text-[#d8f3dc] pr-5">
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-[#1b4332] ml-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>افزودن رویداد</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-[#1b4332] ml-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>ویرایش رویداد</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-[#1b4332] ml-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>حذف رویداد</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4">
        <Image src={Divider} className="w-full" />
      </div>
    </section>
  );
}
