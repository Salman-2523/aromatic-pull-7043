import { Box } from "@chakra-ui/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../styles/slider.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { SliderCard } from "./SliderCard";

export const Slider = () => {
  return (
    <Box className="swiper-container" bg={"#d5303a"}>
      <Swiper
        // pagination={{
        //   type: "fraction",
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SliderCard
            firstImgUrl={"https://images.cricket.com/teams/8_flag_safari.png"}
            secondImgUrl={
              "https://images.cricket.com/teams/1188_flag_safari.png"
            }
            day={"Today"}
            time={"7:30 PM IST"}
            timeLeft = {'4:30 hours to go'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard
            firstImgUrl={"https://images.cricket.com/teams/7_flag_safari.png"}
            secondImgUrl={"https://images.cricket.com/teams/3_flag_safari.png"}
            day={"Tomorrow"}
            time={"3:30 PM IST"}
            timeLeft = {'1 day to go'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard
            firstImgUrl={"https://images.cricket.com/teams/4_flag_safari.png"}
            secondImgUrl={"https://images.cricket.com/teams/6_flag_safari.png"}
            day={"Tomorrow"}
            time={"5:30 PM IST"}
            timeLeft = {'1 day to go'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard
            firstImgUrl={
              "https://images.cricket.com/teams/2038_flag_safari.png"
            }
            secondImgUrl={
              "https://images.cricket.com/teams/2041_flag_safari.png"
            }
            day={"Tomorrow"}
            time={"6:30 PM IST"}
            timeLeft = {'1 day to go'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard
            firstImgUrl={"https://images.cricket.com/teams/1_flag_safari.png"}
            secondImgUrl={"https://images.cricket.com/teams/10_flag_safari.png"}
            day={"Today"}
            time={"8:30 PM IST"}
            timeLeft = {'3 hours to go'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard
            firstImgUrl={"https://www.cricket.com/svgs/images/flag_empty.svg"}
            secondImgUrl={"https://www.cricket.com/svgs/images/flag_empty.svg"}
            day={"Tomorrow"}
            time={"2:30 PM IST"}
            timeLeft = {'1 day to go'}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
