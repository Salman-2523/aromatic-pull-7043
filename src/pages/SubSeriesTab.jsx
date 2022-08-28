import { Tabs, TabList, TabPanels, Tab, TabPanel, Spacer, Button, Flex } from '@chakra-ui/react'
import {All} from "../components/All";
import { International } from "../components/International";
import { Domestic } from "../components/Domestic";
import { Womens } from "../components/Womens";
import {MdOutlineFilterList } from 'react-icons/md'
export const SubSeriesTab = ({status}) => {
    return (
        <Tabs variant='soft-rounded' colorScheme='red'>
            <Flex>

  <TabList>
    <Tab width='150px'>ALL</Tab>
    <Tab width='150px'>INTERNATIOAL</Tab>
    <Tab width='150px'>DOMESTIC</Tab>
    <Tab width='150px'>WOMENS</Tab>
  </TabList>
  <Spacer/>
  <Button bg='red.700' color='white' width='150px' justifyContent='space-evenly'> <MdOutlineFilterList fontSize='20px' fontWeight='bold'/> Filter</Button>
            </Flex>
  <TabPanels>
    <TabPanel>
      <All status={status} />
    </TabPanel>
    <TabPanel>
      <International status={status} />
    </TabPanel>
    <TabPanel>
      <Domestic status={status} />
    </TabPanel>
    <TabPanel>
      <Womens status={status} />
    </TabPanel>
  </TabPanels>
</Tabs>
    )
}