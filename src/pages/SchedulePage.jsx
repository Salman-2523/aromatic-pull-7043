import {  Box, Container, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MatchField from "../components/shedulePage/MatchField";
import SheduleTabs from "../components/shedulePage/SheduleTabs";
import { getSheduleApi } from "../redux/sheduleReducer/actions";

const SchedulePage = () => {
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
          return <MatchField key={i} data={data} />;
        })}
      </Box>
    </Container>
  );
};

export default SchedulePage;
