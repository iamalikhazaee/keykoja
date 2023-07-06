import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="pt-12 md:pt-16 border-t border-slate-200 mt-10">
        <div className="w-full mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-6 lg:col-span-6">
              <div className="mb-3">
                {/* Logo */}
                <Link
                  href="/"
                  className="flex items-center decoration-transparent text-[#2d6a4f] transition-all duration-500 hover:text-[#081c15]"
                  aria-label="Cruip"
                >
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="text-3xl ml-3"
                  />
                  <h1 className="text-2xl mb-0">کی کجا</h1>
                </Link>
              </div>
              <div className="text-gray-500 text-[10px] leading-7 md:text-xs md:leading-7">
                سیستمی برای جلوگیری از صرف زمان های طولانی و خسته کننده جهت
                هماهنگی و ثبت قرار ملاقات و جلسات
              </div>
            </div>

            <div className="md:col-span-6 lg:col-span-6 flex justify-center">
              <div className="text-sm">
                <h6 className="text-[#2d6a4f] md:text-base text-sm font-medium mb-4">
                  راه های ارتباطی با ما
                </h6>
                <ul className="md:text-xs text-[10px]">
                  <li className="mb-2">
                    <Link
                      href="/"
                      className="flex items-center text-gray-500 hover:text-[#2d6a4f] transition duration-150 ease-in-out decoration-transparent"
                    >
                      <span className="px-2 py-2 bg-[#2d6a4f] flex justify-center items-center rounded-[100%] ml-2">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="text-white"
                        />
                      </span>
                      <span>fatemehhanifi1379@gmail.com</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="/"
                      className="flex items-center text-gray-500 hover:text-[#2d6a4f] transition duration-150 ease-in-out decoration-transparent"
                    >
                      <span className="px-2 py-2 bg-[#2d6a4f] flex justify-center items-center rounded-[100%] ml-2">
                        <FontAwesomeIcon
                          icon={faPhoneAlt}
                          className="text-white"
                        />
                      </span>
                      <span>09386005853</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="/"
                      className="flex items-center text-gray-500 hover:text-[#2d6a4f] transition duration-150 ease-in-out decoration-transparent"
                    >
                      <span className="px-2 py-2 bg-[#2d6a4f] flex justify-center items-center rounded-[100%] ml-2">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="text-white"
                        />
                      </span>
                      <span>alikhazaee00@gmail.com</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="/"
                      className="flex items-center text-gray-500 hover:text-[#2d6a4f] transition duration-150 ease-in-out decoration-transparent"
                    >
                      <span className="px-2 py-2 bg-[#2d6a4f] flex justify-center items-center rounded-[100%] ml-2">
                        <FontAwesomeIcon
                          icon={faPhoneAlt}
                          className="text-white"
                        />
                      </span>
                      <span>09102340552</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full text-center text-gray-500 text-xs border-t border-slate-200 py-4">
            کلیه حقوق این سایت متعلق به keykojaa.ir میباشد.
          </div>
        </div>
      </div>
    </footer>
  );
}
