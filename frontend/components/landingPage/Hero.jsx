import LandingVector from "@/public/images/vector.jpg";
import Image from "next/image";
import Background from "@/public/images/background.png"
// import ModalVideo from "@/components/modal-video";

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 py-5 sm:px-6 relative">
        {/* Illustration behind hero content */}
        <div
          className="absolute max-w-full left-0 bottom-0 hidden lg:block pointer-events-none"
          aria-hidden="true"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Image src={Background} className="w-full h-full" />
        </div>

        {/* Hero content */}
        <div className="relative pt-32 pb-12">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center ">
            <h1 className="mb-4 text-2xl text-[#2d6a4f] animate-bounce" data-aos="fade-up">
              به کی کجا خوش اومدید
            </h1>
            <p
              className="text-base text-gray-500 mb-8 animate-pulse"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              با کی کجا میتونید هماهنگی کاراتونو سریعتر و راحتتر انجام بدین.
            </p>
          </div>
          <div className="w-full flex justify-center">
            <Image src={LandingVector} className="w-[600px] h-[500px] rounded-md" />
          </div>

          {/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1024}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          /> */}
        </div>
      </div>
    </section>
  );
}
