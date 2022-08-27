import React from "react";
import { Avatar, Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";

const MatchCard = ({ data }) => {
  return (
    <Box boxShadow="md" minHeight="180px" padding="10px" width="300px">
      <Flex>
        <Text
          fontSize="xs"
          bg="orange.200"
          borderRadius="10px"
          textAlign="center"
          width="50px"
          marginRight="5px"
          padding="1px"
        >
          {data.matchType}
        </Text>
        <Text>{data.matchNumber}</Text>
      </Flex>
      <Flex>{data.venue}</Flex>
      <Flex>
        <Box>
          <Flex>
            <Image
              margin="auto"
              src="https://images.cricket.com/teams/21_flag.png"
              width="20px"
              height="15px"
            />{" "}
            <Text>{data.homeTeamName}</Text>
          </Flex>
          <Flex>
            <Image
              margin="auto"
              src="https://images.cricket.com/teams/21_flag.png"
              width="20px"
              height="15px"
            />{" "}
            <Text>{data.awayTeamName}</Text>
          </Flex>
        </Box>
        <Spacer />
        <Box>
          <Text>28th August</Text>
          <Text>3:30 PM</Text>
        </Box>
      </Flex>
      <Text
        fontSize="xs"
        bg="orange.200"
        borderRadius="10px"
        textAlign="center"
        padding="1px"
        width="60%"
      >
        2 day 20 min to toss
      </Text>
      {data.teamsWinProbability.homeTeamPercentage != "" ? (
        <>
          <Flex width="95%" padding="10px 5px 0px 5px">
            <Text
              fontSize="sm"
              color="gray"
            >{`${data.teamsWinProbability.homeTeamPercentage}%`}</Text>
            <Spacer />
            <Text
              fontSize="sm"
              color="gray"
            >{`${data.teamsWinProbability.awayTeamPercentage}%`}</Text>
          </Flex>
          <Flex width="95%" margin="0px">
            <Box
              bg="green"
              height="3px"
              width={`${data.teamsWinProbability.homeTeamPercentage}%`}
            ></Box>
            <Box
              bg="gray"
              height="3px"
              width={`${data.teamsWinProbability.tiePercentage}%`}
            ></Box>
            <Box
              bg="red"
              height="3px"
              width={`${data.teamsWinProbability.awayTeamPercentage}%`}
            ></Box>
          </Flex>
          <Flex width="95%" padding="0px 5px">
            <Text fontSize="sm" color="gray">
              {data.teamsWinProbability.homeTeamShortName}
            </Text>
            <Spacer />
            <Text fontSize="sm" color="gray">
              {data.teamsWinProbability.awayTeamShortName}
            </Text>
          </Flex>
        </>
      ) : (
        <Flex>
          <Avatar
            margin="10px"
            size="sm"
            src="https://www.cricket.com/pngs/prediction-loader.png"
          />
          <Text fontSize="xs" margin="auto" color="gray" marginLeft="5px">
            Win projection to be updated soon
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export default MatchCard;
