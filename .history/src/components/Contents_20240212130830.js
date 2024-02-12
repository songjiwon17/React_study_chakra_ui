import { Container, Stack } from "@chakra-ui/react";

const Contents = () => {
  return (
    <Container bg="yellow">
      <Stack direction={["column", "row"]} spacing="24px">
        <Box w="40px" h="40px" bg="yellow.200">
          1
        </Box>
        <Box w="40px" h="40px" bg="tomato">
          2
        </Box>
        <Box w="40px" h="40px" bg="pink.100">
          3
        </Box>
      </Stack>
    </Container>
  );
};
export default Contents;
