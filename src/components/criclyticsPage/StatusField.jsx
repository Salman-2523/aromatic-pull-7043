import { Box, Flex, Heading } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCriclyticsApi } from '../../redux/criclyticsReducer/actions';
import UpcomingBox from './UpcomingBox';

const StatusField = ({status}) => {
    const {data,isLoading,isError}=useSelector(state=>state.criclyticsReducer)
const dispatch=useDispatch();
useEffect(()=>{
    if(data.length==0){
        
        dispatch(getCriclyticsApi());
    }
},[status])
const fielddata=data.filter(match=>match.matchStatus==status);
    return (<>
        {fielddata.length!=0?<Box width='70%' margin='auto'  border='1px solid black'>
            <Box bg='rgb(23,33,50)' padding='10px'>
                <Heading textAlign='left' color='white' size='md'>{status}</Heading>
            </Box >
            <Box display='flex' padding='20px' overflow='auto' gap='10px'>
            {fielddata.map((match,i)=>{
                return(
                    <UpcomingBox key={i} match={match}/>
                );
            })}
            </Box>
        </Box>:''}
            </>
    );
};

export default StatusField;