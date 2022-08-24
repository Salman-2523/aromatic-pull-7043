import { Box } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { Navbar } from "../components/Navbar";
import { Slider } from "../components/Slider";

export const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <Slider />
      <Main />
      <Footer />
    </Box>
  );
};
