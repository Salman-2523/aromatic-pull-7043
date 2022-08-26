import React from "react";
import { Box, Flex, Heading, Image, Spacer, useBreakpointValue } from "@chakra-ui/react";
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const cards = [
    "https://www.cricket.com/pngs/Banner1.png",
    "https://www.cricket.com/pngs/Banner2.png",
    "https://www.cricket.com/pngs/Banner3.png",
  ];

  return (
    <Box
      position={"relative"}
      height={"280px"}
      width={"70%"}
      margin="auto"
      overflow={"hidden"}
      marginTop='20px'
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Image
            key={index}
            height="250px"
            src={url}
            borderRadius="15px"
          />
           
          
        ))}
      </Slider>
    </Box>
  );
}
