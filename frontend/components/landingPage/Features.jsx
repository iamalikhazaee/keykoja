import Image from "next/image";
import Divider from "@/public/images/divider.png";
export default function Features() {
  return (
    <section>
      <div className="w-full mx-auto">
        <div className="py-12">
          {/* Section header */}
          <div className="w-full mx-auto text-center py-12 px-10 bg-[#1b4332] mb-10">
            <h2 className="mb-4 md:text-lg text-base text-[#d8f3dc]">
              هماهنگی جلساتتون رو آنلاین انجام بدین
            </h2>
            <p className="md:text-sm text-[10px] leading-7 text-[#d8f3dc]">
              با استفاده از کی کجا و امکانات متعددش، کارهای مربوط به رزرو نوبت و
              مدیریت تایمتون رو آسانتر کنید و وقتتون رو برای کارای هماهنگی تلف
              نکنید.
            </p>
          </div>

          {/* Items */}
          <div
            className="max-w-none mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 lg:gap-16 items-start md:max-w-none lg:max-w-none px-5"
            data-aos-id-blocks
          >
            {/* 1st item */}
            <div
              className="md:h-72 border border-[#2d6a4f] text-[#2d6a4f] relative flex flex-col items-center border-t cursor-pointer px-3 py-3 rounded-lg shadow-md transition-transform duration-500 hover:-translate-y-4"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-[#2d6a4f]"
                  width="64"
                  height="64"
                  rx="32"
                />
                <path
                  className="stroke-current text-[#fff]"
                  d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924"
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
                <path
                  className="stroke-current text-[#fff]"
                  d="M43 42h-9M43 37h-9"
                  strokeLinecap="square"
                  strokeWidth="2"
                />
              </svg>
              <h4 className="md:text-base text-sm mb-2">قابل استفاده برای همه</h4>
              <p className="md:text-[13px] text-[10px] text-center leading-7">
                مهم نیست که چه سمتی دارید و مشغول چه کاری هستید و یا اصلا
                جلساتتون به چه منظور هست. اینجا میتونید هر جلسه با هر مدت زمانی
                رو ثبت کنید و با مراجعه کنندگانتون به اشتراک بذارید.
              </p>
            </div>

            {/* 2nd item */}
            <div
              className="md:h-72 border border-[#2d6a4f] text-[#2d6a4f] relative flex flex-col items-center border-t cursor-pointer px-3 py-3 rounded-lg shadow-md transition-transform duration-500 hover:-translate-y-4"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect className="fill-current text-[#2d6a4f]" width="64" height="64" rx="32" />
                <path
                  className="stroke-current text-[#fff]"
                  d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924"
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
                <path
                  className="stroke-current text-[#fff]"
                  d="M43 42h-9M43 37h-9"
                  strokeLinecap="square"
                  strokeWidth="2"
                />
              </svg>
              <h4 className="md:text-base mb-2 text-sm">ساده و آسان</h4>
              <p className="md:text-[13px] text-[10px] text-center leading-7">
                یک ویژگی مهم این سیستم اینه که کار کردن باهاش بسیار ساده و راحته
                و بدون دردسر و پیچیدگی میتونید ازش استفاده کنید.
              </p>
            </div>

            {/* 3rd item */}
            <div
              className="md:h-72 border border-[#2d6a4f] text-[#2d6a4f] relative flex flex-col items-center border-t cursor-pointer px-3 py-3 rounded-lg shadow-md transition-transform duration-500 hover:-translate-y-4"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect className="fill-current text-[#2d6a4f]" width="64" height="64" rx="32" />
                <path
                  className="stroke-current text-[#fff]"
                  d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924"
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
                <path
                  className="stroke-current text-[#fff]"
                  d="M43 42h-9M43 37h-9"
                  strokeLinecap="square"
                  strokeWidth="2"
                />
              </svg>
              <h4 className="md:text-base mb-2 text-sm">قابلیت شخصی سازی</h4>
              <p className="md:text-[13px] text-[10px] text-center leading-7">
                ما موقع ثبت نام ازتون اطلاعی درباره حوزه فعالیت و سمت شغلی که
                دارین، میگیریم. همچنین موقع ثبت نام میتونید تم رنگی مد نظرتون رو
                انتخاب کنید. با دادن این اطلاعات به ما، این امکان براتون فراهم
                میشه که پروفایل و داشبوردتون رو شخصی سازی کنید.
              </p>
            </div>

            {/* 4th item */}
            <div
              className="md:h-72 border border-[#2d6a4f] text-[#2d6a4f] relative flex flex-col items-center border-t cursor-pointer px-3 py-3 rounded-lg shadow-md transition-transform duration-500 hover:-translate-y-4"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect className="fill-current text-[#2d6a4f]" width="64" height="64" rx="32" />
                <g
                  transform="translate(21 22)"
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                >
                  <path
                    className="stroke-current text-[#fff]"
                    d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415"
                  />
                  <circle
                    className="stroke-current text-[#fff]"
                    cx="17"
                    cy="5"
                    r="3"
                  />
                  <path
                    className="stroke-current text-[#fff]"
                    d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948"
                  />
                </g>
              </svg>
              <h4 className="md:text-base mb-2 text-sm">پشتیبانی</h4>
              <p className="md:text-[13px] text-[10px] text-center leading-7">
                درسته ک استفاده از این سیستم خیلی راحته و پیچیدگی نداره، ولی
                بازم هر کجا به مشکل برخوردین، تیم پشتیبانی ما آماده شنیدن و حل
                کردن مشکلاتتون هستن.
                <b className="block">پس با ما در ارتباط باشید.</b>
              </p>
            </div>

            {/* 5th item */}
            {/* <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-purple-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <g
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                >
                  <path
                    className="stroke-current text-purple-100"
                    d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6"
                  />
                  <path
                    className="stroke-current text-purple-300"
                    d="M22 30h4v12h-4z"
                  />
                </g>
              </svg>
              <h4 className="h4 mb-2">Instant Features</h4>
              <p className="text-lg text-gray-400 text-center">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div> */}

            {/* 6th item */}
            {/* <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-purple-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <g
                  transform="translate(21 22)"
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                >
                  <path
                    className="stroke-current text-purple-300"
                    d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415"
                  />
                  <circle
                    className="stroke-current text-purple-300"
                    cx="17"
                    cy="5"
                    r="3"
                  />
                  <path
                    className="stroke-current text-purple-100"
                    d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948"
                  />
                </g>
              </svg>
              <h4 className="h4 mb-2">Instant Features</h4>
              <p className="text-lg text-gray-400 text-center">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div> */}
          </div>
        </div>
      </div>
      <div className="px-4">
        <Image src={Divider} className="w-full" />
      </div>
    </section>
  );
}
