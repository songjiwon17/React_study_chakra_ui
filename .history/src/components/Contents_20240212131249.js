import { Container, Stack, Box } from "@chakra-ui/react";

const Contents = () => {
  return (
    <Container maxW="1200px">
      <Stack direction={["column", "row"]} bg="pink ">
        <Box w="100px" h="80px" bg="yellow.200">
          1
        </Box>
        <Box w="100px" h="80px" bg="tomato">
          2
        </Box>
        <Box w="100px" h="80px" bg="pink.100">
          3
        </Box>
      </Stack>
    </Container>
  );
};
export default Contents;
