import { Divider, Container } from "@chakra-ui/react";
import Header from "./Header";
import Contents from "./Contents";
import Footer from "./Footer";

const Home = () => {
  return (
    <Container maxW="100%" m="0 auto" bg="tomato">
      <Header />
      <Divider />
      <Contents />
      <Footer />
    </Container>
  );
};
export default Home;
