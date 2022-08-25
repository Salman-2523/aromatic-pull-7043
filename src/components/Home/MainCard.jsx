import {Flex,Box,Text,Image} from '@chakra-ui/react'
export const MainCard = ({imageUrl,heading,subHeading}) => {
    return (
        <>
         <Flex height="220px" border="1px solid black">
            <Box width="50%" >
              <Image src={imageUrl}  height="200px" width={'100%'} padding = '5px'/>
            </Box>
            <Box width="50%">
              <Text fontSize="20px" fontWeight = 'bold'marginBottom = '1rem' marginTop='8px'>{heading}</Text>
              <Text fontSize="14px">{subHeading}</Text>
              <Flex justifyContent={"space-between"} marginTop = '10px'>
                <Text fontSize="14px" >cricket.com staff</Text>
                <Text paddingRight="4rem" fontSize="14px" >24 Aug 2022</Text>
              </Flex>
            </Box>
          </Flex>
        </>
    )
}