import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../components/Navbar";
import { Link, Outlet, NavLink } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Container, Heading } from '@chakra-ui/react'
import { Upcoming } from "../pages/Upcoming";
import { getData } from "../redux/seriesreducer/action";
import { Ongoing } from "../pages/Ongoing";
import { Completed } from "../pages/Completed";
// const All = ({item}) => {

 export const SeriesTab = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getData());
},[]);

  return (
    <Container minW='100%' bg='gray.200' minH='550px' padding='0px'>
      <Heading size='lg' marginLeft='15%'>Series</Heading>
    <Container minW='70%' bg='white' padding='0px'>
    <Tabs isFitted variant='line' colorScheme='red' >
  <TabList mb='1em'>
    <Tab>UPCOMING</Tab>
    <Tab>ONGOING</Tab>
    <Tab>COMPLETE</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Upcoming/>
    </TabPanel>
    <TabPanel>
      <Ongoing/>
    </TabPanel>
    <TabPanel>
      <Completed/>
    </TabPanel>
  </TabPanels>
</Tabs>
    </Container>
    </Container>
  );
};

