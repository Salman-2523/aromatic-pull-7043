import { Box, Flex, Image, Text } from "@chakra-ui/react";
import "../styles/hero.css";
export const Main = () => {
  return (
    <Box className="hero-container">
      <Box border="1px solid black" w="68%" h="2700px">
        <Box w = '100%' h = '366px' border="1px solid black">
        <Flex w="100%" bg="#172132" h="43px" justifyContent={"space-between"}>
          <Flex
            w="120px"
            h="27px"
            // border="1px solid red"
            justifyContent={"space-between"}
            marginLeft="1.2rem"
            paddingTop="6px"
          >
            <Image
              src="https://www.cricket.com/footer/criclytics.svg"
              boxSize="27px"
            />
            <Text
              color="white"
              fontSize="14px"
              fontWeight="bold"
              paddingTop="2px"
            >
              Criclytics<sup>TM</sup>{" "}
            </Text>
          </Flex>
         <Flex  alignItems = "center">
          <Image
            src="https://www.cricket.com/svgs/RightSchevronWhite.svg"
            height={"12px"}
            width={"7px"}
           marginRight = '10px'
          />
          </Flex>
        </Flex>
        <Flex>

        </Flex>
        <Flex>

        </Flex>
        </Box>
       <Box w = '100%' h = '232px' border="1px solid black">

       </Box>

      </Box>
    </Box>
  );
};
