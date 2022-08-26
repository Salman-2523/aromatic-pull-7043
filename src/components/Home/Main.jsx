import { Box, Flex, Image, Text } from "@chakra-ui/react";
import "../../styles/hero.css";
import { MainCard } from "./MainCard";
export const Main = () => {
  return (
    <Box className="hero-container">
      <Box border="1px solid black" w="68%" h="2300px">
        <Box w="100%" h="366px" border="1px solid black" marginBottom="1rem">
          <Flex w="100%" bg="#172132" h="43px" justifyContent={"space-between"}>
            <Flex
              w="120px"
              h="27px"
              // border="1px solid red"
              justifyContent={"space-between"}
              marginLeft="1.2rem"
              paddingTop="6px"
            >
              <Image
                src="https://www.cricket.com/footer/criclytics.svg"
                boxSize="27px"
              />
              <Text
                color="white"
                fontSize="14px"
                fontWeight="bold"
                paddingTop="2px"
              >
                Criclytics<sup>TM</sup>{" "}
              </Text>
            </Flex>
            <Flex alignItems="center">
              <Image
                src="https://www.cricket.com/svgs/RightSchevronWhite.svg"
                height={"12px"}
                width={"7px"}
                marginRight="10px"
              />
            </Flex>
          </Flex>
          <Flex height="88%">
            <Box border="1px solid gray" height="100%" width="50%">
              <Flex
                borderBottom={"1px solid black"}
                justifyContent={"center"}
                height="50px"
                alignItems="center"
                gap="24rem"
              >
                <Text fontSize="14px" fontWeight="500">
                  Recent Form
                </Text>
                <Text fontWeight="bold" fontSize="1.3rem">
                  &#62;
                </Text>
              </Flex>
              <Flex
                height="82px"
                borderBottom="1px solid black"
                justifyContent="center"
                alignItems="center"
              >
                <Box width="50%">
                  <Text textAlign="center" letterSpacing="3px">
                    SOB
                  </Text>
                  <Flex justifyContent={"space-evenly"}>
                    <span>L</span>
                    <span>L</span>
                    <span>L</span>
                    <span>L</span>
                    <span>W</span>
                  </Flex>
                </Box>
                <Box width="50%">
                  <Text textAlign="center" letterSpacing="3px">
                    TRT
                  </Text>
                  <Flex justifyContent={"space-evenly"}>
                    <span>L</span>
                    <span>L</span>
                    <span>L</span>
                    <span>L</span>
                    <span>W</span>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box border="1px solid gray" height="100%" width="50%">
              <Flex
                borderBottom={"1px solid black"}
                justifyContent={"center"}
                height="50px"
                alignItems="center"
                gap="22rem"
              >
                <Text fontSize="14px" fontWeight="500">
                  Players Projection
                </Text>
                <Text fontWeight="bold" fontSize="1.3rem">
                  &#62;
                </Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Flex
                  height="88%"
                  flexDirection="column"
                  gap="10px"
                  paddingLeft="2rem"
                >
                  <Text paddingLeft="8px" paddingTop="10px" letterSpacing="2px">
                    SOB
                  </Text>

                  <Flex
                    width="50%"
                    // border="1px solid black"
                    flexDirection="column"
                  >
                    <Flex gap="8px">
                      <Image
                        src="https://www.cricket.com/pngs/fallbackProjection.png"
                        height="50px"
                        width="50px"
                      />
                      <Flex flexDirection="column">
                        <Text fontWeight="500">Ross Whitely</Text>
                        <Text color="#d64b4b" fontWeight="600">
                          21-31
                        </Text>
                        <Text color="#777">Runs</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex
                    width="50%"
                    // border="1px solid black"
                    flexDirection="column"
                  >
                    <Flex gap="8px">
                      <Image
                        src="https://www.cricket.com/pngs/fallbackProjection.png"
                        height="50px"
                        width="50px"
                      />
                      <Flex flexDirection="column">
                        <Text fontWeight="500">Ross Whitely</Text>
                        <Text color="#d64b4b" fontWeight="600">
                          21-31
                        </Text>
                        <Text color="#777">Runs</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex
                    width="50%"
                    // border="1px solid black"
                    flexDirection="column"
                  >
                    {/* <Flex gap="8px">
                    <Image
                      src="https://www.cricket.com/pngs/fallbackProjection.png"
                      height="50px"
                      width="50px"
                    />
                    <Flex flexDirection="column">
                      <Text fontWeight="500">Ross Whitely</Text>
                      <Text color="#d64b4b" fontWeight="600">
                        21-31
                      </Text>
                      <Text color="#777">Runs</Text>
                    </Flex>
                  </Flex> */}
                  </Flex>
                  <Flex width="50%"></Flex>
                </Flex>
                <Flex height="88%" flexDirection="column" gap="10px">
                  <Text paddingLeft="8px" paddingTop="10px" letterSpacing="2px">
                    TRT
                  </Text>

                  <Flex
                    width="50%"
                    // border="1px solid black"
                    flexDirection="column"
                  >
                    <Flex gap="8px">
                      <Image
                        src="https://www.cricket.com/pngs/fallbackProjection.png"
                        height="50px"
                        width="50px"
                      />
                      <Flex flexDirection="column">
                        <Text fontWeight="500">Dawid Malan</Text>
                        <Text color="#d64b4b" fontWeight="600">
                          21-31
                        </Text>
                        <Text color="#777">Runs</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex
                    width="50%"
                    // border="1px solid black"
                    flexDirection="column"
                  >
                    <Flex gap="8px">
                      <Image
                        src="https://www.cricket.com/pngs/fallbackProjection.png"
                        height="50px"
                        width="50px"
                      />
                      <Flex flexDirection="column">
                        <Text fontWeight="500">Colin Munro</Text>
                        <Text color="#d64b4b" fontWeight="600">
                          21-31
                        </Text>
                        <Text color="#777">Runs</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex
                    width="50%"
                    // border="1px solid black"
                    flexDirection="column"
                  >
                    {/* <Flex gap="8px">
                    <Image
                      src="https://www.cricket.com/pngs/fallbackProjection.png"
                      height="50px"
                      width="50px"
                    />
                    <Flex flexDirection="column">
                      <Text fontWeight="500">Ross Whitely</Text>
                      <Text color="#d64b4b" fontWeight="600">
                        21-31
                      </Text>
                      <Text color="#777">Runs</Text>
                    </Flex>
                  </Flex> */}
                  </Flex>
                  <Flex width="50%"></Flex>
                </Flex>
              </Flex>
            </Box>
          </Flex>
          <Flex></Flex>
        </Box>
        <Box w="100%" h="246px" border="1px solid black" marginBottom="2rem">
          <Box height="50px">
            <Text
              padding="16px"
              fontSize="12px"
              fontWeight="bold"
              borderBottom={"1px solid gray"}
            >
              FEATURED VIDEOS
            </Text>
          </Box>
          <Flex justifyContent={"space-evenly"} marginTop="1rem">
            <Box height="176px" width="256px" border="1px solid black">
              <Image
                src={"https://img.youtube.com/vi/ftLqXELjqdQ/mqdefault.jpg"}
              />
              <Text fontSize="10px" fontWeight="bold">
                India vs Pakistan | Fan Rivalry ft Sameer &amp; Sehrish |
                Episode 1
              </Text>
            </Box>
            <Box height="176px" width="256px" border="1px solid black">
              <Image src="https://img.youtube.com/vi/XgozQx61QZU/mqdefault.jpg" />
              <Text fontSize="10px" fontWeight="bold">
                Cricket.com DECODED | Episode 44 | where do the minnows stand?
              </Text>
            </Box>
            <Box height="176px" width="256px" border="1px solid black">
              <Image src="https://img.youtube.com/vi/xR9WeJA3kmE/mqdefault.jpg" />
              <Text fontSize="10px" fontWeight="bold">
                Ingredients necessary in the marketing of a good slip fielder{" "}
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Box height="50px" border="1px solid black">
            <Text padding="1rem" fontSize="12px" fontWeight="bold">
              NEWS AND ARTICLES
            </Text>
          </Box>
          {/* <Flex height="220px" border="1px solid black">
            <Box width="50%" >
              <Image src="https://images-cricketcom.imgix.net/news-1661344864512?auto=compress&dpr=2&w=1&h=200"  height="200px" width={'100%'} padding = '5px'/>
            </Box>
            <Box width="50%">
              <Text fontSize="20px" fontWeight = 'bold'marginBottom = '1rem' marginTop='8px'>Laxman named interim head coach for Asia Cup</Text>
              <Text fontSize="14px">Rahul Dravid will join the team once he tests negative for Covid</Text>
              <Flex justifyContent={"space-between"}>
                <Text fontSize="14px" >cricket.com staff</Text>
                <Text paddingRight="4rem" fontSize="14px" >24 Aug 2022</Text>
              </Flex>
            </Box>
          </Flex> */}
          <MainCard
            imageUrl={
              "https://images-cricketcom.imgix.net/news-1661344864512?auto=compress&dpr=2&w=1&h=200"
            }
            heading = {'Laxman named interim head coach for Asia Cup'} subHeading = {'Rahul Dravid will join once he tests negative for Covid'}
          />
          <MainCard
            imageUrl={
              "https://images-cricketcom.imgix.net/news-1661348574024?auto=compress&dpr=2&w=1&h=200"
            }
            heading = {'I know where my game stands:Kohli'} 
            subHeading = {'The former India skipper has gone without an international hundred across formats for nearly three years now'}
          />
          <MainCard
            imageUrl={
              "https://images-cricketcom.imgix.net/news-1661351778510?auto=compress&dpr=2&w=1&h=200"
            }
            heading = {'Tilak, Umran and Kuldeep named in India A squad'} subHeading = {'India A will play three four-day games against New Zealand A in September'}
          />
          <MainCard
            imageUrl={
              "https://images-cricketcom.imgix.net/news-1661350106530?auto=compress&dpr=2&w=1&h=200"
            }
            heading = {'Gill set to play four County Championship games for Glamorgan'} subHeading = {'He will become only the third Indian player after Ravi Shastri and Sourav Ganguly to play for Glamorgan in the County Championship'}
          />
          <MainCard
            imageUrl={
              "https://images-cricketcom.imgix.net/news-1661186466215?auto=compress&dpr=2&w=1&h=200"
            }
            heading = {'Rahul disappoints, but Gill and ODIs are a match made in heaven'} subHeading = {'Sikandar Raza and Brad Evans tried their best but India managed to get over the line to complete a 3-0 clean sweep'}
          />
          <MainCard
            imageUrl={
              "https://images-cricketcom.imgix.net/news-1661394564658?auto=compress&dpr=2&w=1&h=200"
            }
            heading = {'Fit-again Matt Henry returns for Australia ODIs'}
            subHeading = {'Meanwhile, Kyle Jamieson (back) and Adam Milne (achilles) were not considered due to injury'}
          />
        </Box>
        <Box w="100%" h="260px" border="1px solid black" marginBottom="2rem">
          <Box height="50px">
            <Text
              padding="16px"
              fontSize="12px"
              fontWeight="bold"
              // borderBottom={"1px solid gray"}
            >
          DATA DIGEST

            </Text>
          </Box>
          <Flex justifyContent={"space-evenly"} marginTop="1rem">
            <Box height="192px" width="192px">
              <Image
                src={"https://s3.ap-south-1.amazonaws.com/image.cricket.com/datadigest/d2093c655fff970c893d62e6f355715b2ce27a26.png"}
              />
             
            </Box>
            <Box height="192px" width="192px">
              <Image src="https://s3.ap-south-1.amazonaws.com/image.cricket.com/datadigest/453aaf421bc1087199fbd51833b77738cf4f6377.png" />
              
            </Box>
            <Box height="192px" width="192px">
              <Image src="https://s3.ap-south-1.amazonaws.com/image.cricket.com/datadigest/f62a6cf67cbce5037a4c02a023a5b806ef3534dd.png" />
            
            </Box>
            <Box height="192px" width="192px">
              <Image src="https://s3.ap-south-1.amazonaws.com/image.cricket.com/datadigest/4eec0f8505aa7b1172a8ca8126389c5b88384981.png" />
            
            </Box>
          </Flex>
        </Box>
      </Box>

    </Box>
  );
};
