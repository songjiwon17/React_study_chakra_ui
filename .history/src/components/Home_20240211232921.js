import {
  Divider,
  Stack,
  Grid,
  GridItem,
  Box,
  HStack,
  Container,
} from "@chakra-ui/react";
import Header from "./Header";
import Card from "./Card";

const Home = () => {
  return (
    <Container maxW="1200px" m="0 auto">
      <Header />
      <Divider />
      <Stack mb="40px" p={5} bg="green">
        <Card />
      </Stack>
      <HStack spacing="24px">
        <Box w="40px" h="40px" bg="yellow.200">
          1
        </Box>
        <Box w="40px" h="40px" bg="tomato">
          2
        </Box>
        <Box w="40px" h="40px" bg="pink.100">
          3
        </Box>
      </HStack>
      <Grid
        maxW="1200px"
        m="0 auto"
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg="tomato" />
        <GridItem colSpan={2} bg="pink" />
        <GridItem colSpan={2} bg="pink" />
        <GridItem colSpan={4} bg="tomato" />
      </Grid>
    </Container>
  );
};
export default Home;
