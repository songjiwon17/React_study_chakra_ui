import { Divider, Container } from "@chakra-ui/react";
import Header from "./Header";
import Contents from "./Contents";

const Home = () => {
  return (
    <Container maxW="100%" m="0 auto">
      <Header />
      <Divider />
      <Contents />
      <Footer />
    </Container>
  );
};
export default Home;
