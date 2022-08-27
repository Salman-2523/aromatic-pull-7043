import {
  Avatar,
  Box,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import MatchCard from "./MatchCard";

const MatchField = ({ data }) => {
  return (
    <Box margin="20px">
      <Flex gap="50px" boxShadow="base" padding="15px" textAlign="center">
        {" "}
        <Box
          bg={data.matches[0].league == "Domestic" ? "blue.900" : "red.700"}
          fontSize="lg"
          fontWeight="bold"
          textAlign="center"
          color="white"
          padding="15px 10px 15px 10px"
          borderRadius="5px"
          boxShadow="md"
        >
          {data.matches[0].league == "Domestic" ? "DOM" : "INT"}
        </Box>{" "}
        <Heading size="md">{data.seriesName}</Heading> <Spacer />
        <Text fontSize="25px" color="gray" textAlign="center">
          {">"}
        </Text>
      </Flex>
      <Flex padding="10px" gap="15px">
        {data.matches.map((data, i) => {
          return <MatchCard key={i} data={data} />;
        })}
      </Flex>
    </Box>
  );
};

export default MatchField;
