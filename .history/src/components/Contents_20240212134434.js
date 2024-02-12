import { Container, Stack, Box, VStack } from "@chakra-ui/react";
import Card from "./Card";

const Contents = () => {
  return (
    <Container maxW="1400px" p={2} bg="pink">
      <VStack>
        <Card />
        <Card />
        <Card />
        <Card />
      </VStack>
    </Container>
  );
};
export default Contents;
