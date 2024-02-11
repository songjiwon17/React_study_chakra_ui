import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route></Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
