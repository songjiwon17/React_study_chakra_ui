import { Divider, Container } from "@chakra-ui/react";
import Header from "./Header";
import Contents from "./Contents";

const Home = () => {
  return (
    <Container maxW="1200px" m="0 auto">
      <Header />
      <Divider />
      <Contents />
    </Container>
  );
};
export default Home;
