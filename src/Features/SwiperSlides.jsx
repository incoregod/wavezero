import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import mcapita from "../assets/download.webp";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { useContext } from "react";
const SwiperSlides = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className={` mySwiper ${theme === "dark" && "invert"}`}
      >
        <SwiperSlide>
          <img src={mcapita} alt="logo-mdcapital" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mcapita} alt="logo-mdcapital" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mcapita} alt="logo-mdcapital" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mcapita} alt="logo-mdcapital" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperSlides;
