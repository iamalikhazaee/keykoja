import LandingVector from "@/public/images/vector1.jpg";
import Image from "next/image";
import Background from "@/public/images/background.png"
// import ModalVideo from "@/components/modal-video";

export default function Hero() {
  return (
    <section>
      <div className="w-full px-5 py-5 relative">
        {/* Illustration behind hero content */}
        <div
          className="absolute w-full top-32 left-0 bottom-0 hidden lg:block md:block pointer-events-none px-5"
          aria-hidden="true"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Image src={Background} className="w-full h-full" />
        </div>

        {/* Hero content */}
        <div className="relative md:pt-32 pt-28 md:pb-12 pb-8">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center ">
            <h1 className="mb-4 md:text-2xl text-xl text-[#2d6a4f] animate-bounce leading-7" data-aos="fade-up">
              به کی کجا خوش اومدید
            </h1>
            <p
              className="md:text-base text-sm leading-7 text-gray-500 mb-8 animate-pulse"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              با کی کجا میتونید هماهنگی کاراتونو سریعتر و راحتتر انجام بدین.
            </p>
          </div>
          <div className="w-full flex justify-center">
            <Image src={LandingVector} className="lg:w-[600px] lg:h-[400px] md:w-[400px] md:h-[300px] sm:w-[300px] sm:h-[200px] rounded-md" />
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