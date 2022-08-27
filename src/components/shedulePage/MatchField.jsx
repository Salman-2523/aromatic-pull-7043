import {
  Avatar,
  Box,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import MatchCard from "./MatchCard";

const MatchField = ({ data }) => {
  const [searchParams]=useSearchParams();
  const sortBy=searchParams.get('sortBy');
  const league=searchParams.get('league');
    const [status,setStatus]=useState('upcoming');
 

  const sheduleData=data.matches.filter(data=>
    data.matchStatus==(sortBy=="UPCOMING"?'upcoming':sortBy=='LIVE'?'live':sortBy=='RESULT'?'completed':'')&&(league=='All'?(data.league=='International'||'Domestic'):data.league==league));
  console.log(sheduleData);
  console.log(sortBy);

  return (
    <>
    {sheduleData.length!=0?<Box margin="20px" bg='white'padding='10px'>
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
    </Box>:''}
          </>
  );
};

export default MatchField;
