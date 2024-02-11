import { Container, HStack, Box, Flex } from "@chakra-ui/react";

const Home = () => {
  return (
    <Container bg={"tomato"}>
      <Flex>
        <HStack spacing="24px">
          <Box w="100px" h="100px" bg="yellow.200">
            1
          </Box>
          <Box w="40px" h="40px" bg="green">
            2
          </Box>
          <Box w="40px" h="40px" bg="pink.100">
            3
          </Box>
        </HStack>
      </Flex>
    </Container>
  );
};
export default Home;
