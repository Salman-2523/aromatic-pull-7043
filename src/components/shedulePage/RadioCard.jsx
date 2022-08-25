import { Box, useRadio } from '@chakra-ui/react';
import React from 'react';

const RadioCard = (props) => {
    const { getInputProps, getCheckboxProps } = useRadio(props)
      
    const input = getInputProps()
    const checkbox = getCheckboxProps()
    return (
        <Box as='label'>
            <input {...input} />
            <Box
              {...checkbox}
              cursor='pointer'
              borderWidth='1px'
              bg='none'
              border='1px'
              borderRadius='md'
              minWidth='200px'
              minHeight='30px'
              _checked={{
                bg: 'red.700',
                color: 'white',
                border: '  none',
              }}
              _focus={{
                boxShadow: 'base',
              }}
              px={5}
              py={1}
            >
              {props.children}
            </Box>
          </Box>
    );
};

export default RadioCard;