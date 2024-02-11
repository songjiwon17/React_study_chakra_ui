import { Container, Button, Stack } from "@chakra-ui/react";
import Header from "./Header";
import Card from "./Card";

const Home = () => {
  return (
    <div>
      <Header />
      <Stack maxW="1200px" bg="yellow">
        <Card />
      </Stack>
    </div>
  );
};
export default Home;
