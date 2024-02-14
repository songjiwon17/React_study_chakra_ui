import { Divider, Container } from "@chakra-ui/react";
import Header from "./Header";
import Contents from "./Contents";
import Footer from "./Footer";
import React from "react";

const Home = (props) => {
  return (
      <Container maxW="container.xl" p={0}>
          <Header />
          <Divider />
          {/*<Contents />*/}
          {/*<Footer />*/}
          {props.children}
      </Container>
  );
};
export default Home;
