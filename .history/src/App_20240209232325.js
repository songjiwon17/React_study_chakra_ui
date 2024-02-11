import { ChakraBaseProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <ChakraBaseProvider>
      <Router>
        <Routes>
          <Route></Route>
        </Routes>
      </Router>
    </ChakraBaseProvider>
  );
}

export default App;
