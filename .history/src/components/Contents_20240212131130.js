import { Container, Stack, Box } from "@chakra-ui/react";

const Contents = () => {
  return (
    <Stack direction={["column", "row"]} spacing="10px" bg="pink ">
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
  );
};
export default Contents;
