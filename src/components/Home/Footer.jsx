import { Box, Flex, Image, Text } from "@chakra-ui/react";
import "../../styles/footer.css";
export const Footer = () => {
  return (
    <Box w={"100%"} h={"114px"} bg={"#172132"} className="footer-container">
      <Box w={"68%"} h={"50px"} className="footer">
        <Box>
          <img src="https://www.cricket.com/svgs/cricket-logo.svg" alt="" />
          <Text color = '#777' fontSize="10px">Cricket like never before</Text>
        </Box>
        <Box className="footer-about">
          <Text>Terms of use</Text>
          <Text>Privacy Policy</Text>
          <Text>Cookies Policy</Text>
        </Box>
        <Box className="rights">
          <Box className="icon-text-container">
            <Text color="#777" fontSize="xs">
              Follow us on
            </Text>
            <Box className="footer-icon-container">
              <Image
                src="https://www.cricket.com/svgs/facebook.svg"
                boxSize={"16px"}
              />
              <Image
                src="https://www.cricket.com/svgs/twitter.svg"
                boxSize={"16px"}
              />
              <Image
                src="https://www.cricket.com/svgs/linkedin.svg"
                boxSize={"16px"}
              />
            </Box>
          </Box>
          <Text color="#777" fontSize="12px">
            @2020 cricket.com | All rights reserved
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
