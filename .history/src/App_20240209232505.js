import { ChakraBaseProvider, theme } from "@chakra-ui/react";
import { extendBaseTheme, theme as chakraTheme } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});
function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Router>
        <Routes>
          <Route></Route>
        </Routes>
      </Router>
    </ChakraBaseProvider>
  );
}

export default App;
