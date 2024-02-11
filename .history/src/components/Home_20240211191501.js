import { Container, HStack, Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Container bg={"tomato"}>
      <HStack spacing="24px">
        <Box w="100px" h="40px" bg="yellow.200">
          1
        </Box>
        <Box w="40px" h="40px" bg="green">
          2
        </Box>
        <Box w="40px" h="40px" bg="pink.100">
          3
        </Box>
      </HStack>
    </Container>
  );
};
export default Home;
