import { Container, HStack } from "@chakra-ui/react";
import Card from "./Card";

const Contents = () => {
  return (
    <Container maxW="1400px" p={2} bg="pink">
      <HStack mb={3}>
        <Card />
        <Card />
        <Card />
        <Card />
      </HStack>
      <HStack mb={3}>
        <Card />
        <Card />
        <Card />
        <Card />
      </HStack>
      <HStack>
        <Card />
        <Card />
        <Card />
        <Card />
      </HStack>
    </Container>
  );
};
export default Contents;
