import { Container, Button, HStack } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import Header from "./Header";
import Card from "./Card";

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Header />
      <HStack maxH="1200px" centerContent bg="yellow">
        <Card />
      </HStack>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </div>
  );
};
export default Home;
