import {
  Box,
  Center,
  Divider,
  Flex,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { transform } from "framer-motion";
import React from "react";

const UpcomingBox = ({ match }) => {
  return (
    <Box width={"250px"} borderRadius="5px" shadow="base" padding="10px" transition='ease-out' _hover={{zoom:1.1}}>
      <Text fontSize="xs" textAlign="left">
        {match.matchNumber}-{match.seriesName}
      </Text>
      <Divider />
      <Flex padding="15px">
        <Box>
          {match.matchScore.map((data, i) => {
            return (
              <Flex key={i}>
                <Image
                  margin="auto"
                  src="https://images.cricket.com/teams/21_flag.png"
                  width="20px"
                  height="15px"
                />{" "}
                <Text margin="auto">{data.teamShortName}</Text>{" "}
              </Flex>
            );
          })}
        </Box>
        <Spacer />
        <Center height="50px">
          <Divider orientation="vertical" />
        </Center>
        <Spacer />
        <Box>
          <Text>24 August</Text>
          <Text>3:30 PM </Text>
        </Box>
      </Flex>
      <Text fontSize="xs" bg="orange.200" borderRadius="10px" width="60%">
        20 hour 20 min to toss
      </Text>
    </Box>
  );
};

export default UpcomingBox;
