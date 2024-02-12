import { Divider, Container } from "@chakra-ui/react";
import Header from "./Header";

const Home = () => {
  return (
    <Container maxW="1200px" m="0 auto">
      <Header />
      <Divider />
    </Container>
  );
};
export default Home;
