import { Container, Button, Flex } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import Header from "./Header";
import Card from "./Card";

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container centerContent bg="yellow">
      <Header />
      <Card />
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </Container>
  );
};
export default Home;
