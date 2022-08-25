import { Box, Container, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SheduleTabs from "../components/shedulePage/SheduleTabs";
import { getSheduleApi } from "../redux/sheduleReducer/actions";

const ShedulePage = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.sheduleReducer);

  useEffect(() => {
    dispatch(getSheduleApi());
  }, []);
  return (
    <Container minWidth="70%">
      <Heading textAlign="left" fontSize="2xl">
        Shedule
      </Heading>
      <SheduleTabs />
      <Box>
        {data.map((data, i) => {
          return (
            <Box key={i} margin="20px" >
              <Flex gap="50px" boxShadow='base' padding='10px' textAlign='center'>
                {" "}
                <Box
                  bg="red.700"
                  fontSize="lg"
                  fontWeight="bold"
                  textAlign="center"
                  color="white"
                  padding='15px 10px 15px 10px' 
                  borderRadius='5px'
                 boxShadow='md'
                  
                >
                  {data.matches[0].league == "Domestic" ? "DOM" : "INT"}
                </Box>{" "}
                <Heading size='md' >{data.seriesName}</Heading>{" "}
                <Spacer/>
                <Text fontSize='25px' color='gray' textAlign='center'>{'>'}</Text>
              </Flex>
              <Flex padding='10px' gap='10px'>
                {
                data.matches.map((data,i)=>{
                    return(
                        <Box key={i} boxShadow='md' minHeight='100px' >
                            <Text>{data.matchType}</Text>
                            <Flex>{data.venue}</Flex>
                            <Flex>
                                <Box>
                                    {data.homeTeamName}
                                </Box>
                                <Box>
                                    {data.awayTeamName}
                                </Box>
                            </Flex>

                        </Box>
                    )
                })
                }
                </Flex>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default ShedulePage;
