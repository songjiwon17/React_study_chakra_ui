import { Container, Button, Stack } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import Header from "./Header";
import Card from "./Card";

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Header />
      <Stack centerContent bg="yellow">
        <Card />
      </Stack>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </>
  );
};
export default Home;
