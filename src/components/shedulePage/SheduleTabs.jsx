import React from 'react';
import {  HStack, Spacer, useRadioGroup } from '@chakra-ui/react'
import RadioCard from './RadioCard';
import SortSelector from './SortSelector';

const SheduleTabs = () => {

    
      
     
        const options = ['UPCOMING', 'LIVE', 'RESULT']
      
        const { getRootProps, getRadioProps } = useRadioGroup({
          name: 'framework',
          defaultValue: 'UPCOMING',
          onChange: console.log,
        })
      
        const group = getRootProps()
      
       

    return (
        <HStack {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value })
          return (
            <RadioCard key={value} {...radio} >
              {value}
            </RadioCard>
          )
        })}
        <Spacer/>
        
        <SortSelector/>
      </HStack>
    );
};

export default SheduleTabs;