import { Box } from "@chakra-ui/react";
import "../styles/slider.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export const Slider = () => {
  return (
    <Box
      bg={"rgb(152 42 42)"}
      border="1px solid black"
      w="100%"
      h="35vh"
      className="slider-container"
    >
      <Box w="70%" border="1px solid yellow" h="80%" className="slider">
      
          </Box>
          <Box className="swiper-container">
      </Box>
        
    </Box>
  );
};
