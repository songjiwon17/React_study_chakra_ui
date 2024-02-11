import { Container, Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import Header from "./Header";
import Card from "./Card";

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="2xl" centerContent bg="yellow">
      <Header />
      <Card />
      <Card />
      <Card />
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </Container>
  );
};
export default Home;
