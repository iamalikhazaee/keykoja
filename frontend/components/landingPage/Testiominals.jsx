import Image from "next/image";

import Ali from "@/public/images/ali.jpg";
import Fateme from "@/public/images/fateme.jpg";
import Divider from "@/public/images/divider.png"

export default function Testimonials() {
  return (
    <section>
      <div className="w-full">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="w-full mx-auto text-center py-12 mb-10 bg-[#1b4332] text-[#d8f3dc]">
            <h2 className="md:text-lg text-base mb-4">تیم ما</h2>
            <p className="md:text-sm text-[10px] leading-7">
              تیم ما یک تیم کوچیک هستن که سعی کردن ایده ای که مدت ها توی ذهنشون
              داشتن رو پیاده سازی کنن.
            </p>
          </div>

          {/* Testimonials */}
          <div className="w-full md:px-5 px-2 grid gap-8 lg:grid-cols-2 lg:gap-6 items-start">
            {/* 1st testimonial */}
            <div
              className="flex flex-col h-full p-6 border border-slate-200 rounded-lg shadow-md bg-[#b7e4c7]"
              data-aos="fade-up"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image
                    className="rounded-full md:w-[70px] md:h-[70px] w-[50px] h-[50px] object-cover"
                    src={Ali}
                    alt="Testimonial 01"
                  />
                  <svg
                    className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-[#1b4332]"
                    viewBox="0 0 24 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="md:text-sm text-xs leading-7 text-[#1b4332] grow">
                علی توی این پروژه کل زیر ساخت رو طراحی و پیاده سازی کرده. طراحی
                دیتابیس و توسعه بک اند رو علی انجام داده.
              </blockquote>
              <div className="text-[#1b4332] font-medium pt-3 border-t border-[#1b4332]">
                <cite className="md:text-sm text-xs not-italic">علی خزاعی</cite>{" "}
                - <span className="md:text-sm text-xs">UX Board</span>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-[#2d6a4f] border border-slate-200 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image
                    className="rounded-full md:w-[70px] md:h-[70px] w-[50px] h-[50px] object-cover"
                    src={Fateme}
                    alt="Testimonial 02"
                  />
                  <svg
                    className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-[#b7e4c7]"
                    viewBox="0 0 24 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="md:text-sm text-xs leading-7 text-[#b7e4c7] grow">
                فاطمه توی این پروژه مسئولیت طراحی و پیاده سازی هر آنچه که
                میبینید رو داشته. بخش فرانت اند و طراحی این پروژه به عهده فاطمه
                بوده.
              </blockquote>
              <div className="text-[#b7e4c7] font-medium pt-3 border-t border-[#b7e4c7]">
                <cite className="md:text-sm text-xs not-italic">
                  فاطمه حنیفی
                </cite>{" "}
                -{" "}
                <span className="md:text-sm text-xs">
                  UI designer and Front-end developer
                </span>
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
