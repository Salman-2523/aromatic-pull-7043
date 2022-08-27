import { Box } from "@chakra-ui/react";

import { Main } from "../components/Home/Main";

import { Slider } from "../components/Home/Slider";

export const HomePage = () => {
  return (
    <Box>
      <Slider />
      <Main />
    </Box>
  );
};
