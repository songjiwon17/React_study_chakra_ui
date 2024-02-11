import { Container, Button, Stack, Flex } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import Header from "./Header";
import Card from "./Card";

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Header />
      <Stack centerContent bg="yellow">
        <Flex>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Flex>
      </Stack>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </div>
  );
};
export default Home;
