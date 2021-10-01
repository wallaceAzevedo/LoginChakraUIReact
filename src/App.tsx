import React from "react";
import "./styles/global.css";
import Routes from "./route";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/layout";

import background from "./assets/montanhas.jpg";

function App() {
  return (
    <ChakraProvider>
      <Box
        backgroundImage={background}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Routes />
      </Box>
    </ChakraProvider>
  );
}

export default App;
