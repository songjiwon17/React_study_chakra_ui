import { Container, Stack } from "@chakra-ui/react";
import Card from "./Card";

const Contents = () => {
  return (
    <Container maxW="1400px" p={2} bg="pink">
      <Stack>
        <Card />
        <Card />
        <Card />
        <Card />
      </Stack>
    </Container>
  );
};
export default Contents;
