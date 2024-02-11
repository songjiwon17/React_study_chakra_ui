import { Container, Button, HStack } from "@chakra-ui/react";
import Header from "./Header";
import Card from "./Card";

const Home = () => {
  return (
    <div>
      <Header />
      <HStack centerContent bg="yellow">
        <Card />
      </HStack>
    </div>
  );
};
export default Home;
