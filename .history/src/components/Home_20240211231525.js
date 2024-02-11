import { Divider, Stack } from "@chakra-ui/react";
import Header from "./Header";
import Card from "./Card";

const Home = () => {
  return (
    <div>
      <Header />
      <Divider />
      <Stack maxW="1200px" m="0 auto" p={5} bg="green">
        <Card />
      </Stack>
    </div>
  );
};
export default Home;
