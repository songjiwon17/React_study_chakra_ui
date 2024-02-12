import { Container, Stack, Box, Flex } from "@chakra-ui/react";

const Contents = () => {
  return (
    <Stack direction={["column", "row"]} spacing="24px" bg="pink">
      <Flex>
        <Box w="40px" h="40px" bg="yellow.200">
          1
        </Box>
        <Box w="40px" h="40px" bg="tomato">
          2
        </Box>
        <Box w="40px" h="40px" bg="pink.100">
          3
        </Box>
      </Flex>
    </Stack>
  );
};
export default Contents;
