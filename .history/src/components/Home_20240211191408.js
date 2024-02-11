import { Container, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Container bg={"tomato"}>
      <HStack spacing='24px'>
  <Box w='40px' h='40px' bg='yellow.200'>
    1
  </Box>
  <Box w='40px' h='40px' bg='tomato'>
    2
  </Box>
  <Box w='40px' h='40px' bg='pink.100'>
    3
  </Box>
</HStack>
  );
};
export default Home;
