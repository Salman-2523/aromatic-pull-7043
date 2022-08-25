import { Select } from '@chakra-ui/react';
import React from 'react';

const SortSelector = () => {
    return (
        
        <Select  variant='filled' bg='red.700' textAlign='center' color='white'  width='250px'>
  <option value='all'>ALL</option>
  <option value='int'>INTERNATIONAL</option>
  <option value='dom'>DOMESTIC</option>
</Select>

    );
};

export default SortSelector;