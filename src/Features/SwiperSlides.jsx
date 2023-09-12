import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import mcapita from "../assets/download.png";
const SwiperSlides = () => {
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
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={mcapita} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mcapita} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mcapita} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mcapita} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperSlides;
