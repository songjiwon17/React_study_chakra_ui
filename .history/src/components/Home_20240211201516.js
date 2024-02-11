import { Container, Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import Header from "./Header";

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="2xl" centerContent bg="yellow">
      <Header />
      <Card />
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </Container>
  );
};
export default Home;
