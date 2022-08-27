import React, { useEffect, useState } from 'react';
import {  HStack, Spacer, useRadioGroup } from '@chakra-ui/react'
import RadioCard from './RadioCard';
import SortSelector from './SortSelector';
import { useSearchParams } from 'react-router-dom';

const SheduleTabs = () => {
  const options = ['UPCOMING', 'LIVE', 'RESULT']
  const [searchParams,setSearchParams]=useSearchParams();
  const urlSort=searchParams.get('sortBy');
  const league=searchParams.get('league');

  const [status,setStatus]=useState(urlSort||'UPCOMING');

    
       const onChangeHanler=(e)=>{
        console.log(e);
        setStatus(e);
       }

       const { getRootProps, getRadioProps } = useRadioGroup({
          name: 'framework',
          defaultValue: status,
          onChange: onChangeHanler,
        })
      
        const group = getRootProps()

        useEffect(()=>{
          const params={};
          status&&(params.sortBy=status);
          league&&(params.league=league)

          setSearchParams(params)
        },[status,league])
      
      
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