import { Box, Flex, Image, Text } from "@chakra-ui/react";
// {team,imageUrl,day,timeLeft,time}
export const SliderCard = () => {
  return (
    <Box w="85%" h="230px">
      <Box
        marginBottom="1.2rem"
        w="100%"
        h="55px"
        bg="linear-gradient(to left, rgb(186, 82, 34), rgb(167, 15, 20))"
      >
        <Text color="white" textAlign = 'left' paddingTop="13px">ENG VS SA,2nd Test</Text>
      </Box>
      <Flex
        w="50%"
        h="22px"
        justifyContent={"space-between"}
        marginBottom="15px"
      >
        <Box>
          <Image
            src="https://images.cricket.com/teams/3_flag_safari.png"
            height="16px"
            width="22.2px"
          />
        </Box>
        <Text fontSize="15px">Today</Text>
      </Flex>
      <Flex
        w="50%"
        h="22px"
        justifyContent={"space-between"}
        marginBottom="9px"
      >
        <Box>
          <Image
            src="https://images.cricket.com/teams/7_flag_safari.png"
            height="14px"
            width="22.2px"
          />
        </Box>
        <Text fontSize="15px">3:30 PM IST</Text>
      </Flex>
      <Text textAlign={"left"} w="50%" h="24px" marginBottom="2rem" fontSize="10px">
        4 hrs 15 mins to toss
      </Text>
      <Flex w="100%" h="35px" justifyContent={"space-between"}>
        <Box border="1px solid gray" w="50%">
          <Image
            src="https://www.cricket.com/svgs/frcBlueIcon.svg"
            height="10px"
            width="12px"
          />
        </Box>
        <Box w="50%" border="1px solid gray">
          <Image
            src="https://www.cricket.com/svgs/icons/criclytics-icon.svg"
            boxSize="25px"
          />
        </Box>
      </Flex>
    </Box>
  );
};
