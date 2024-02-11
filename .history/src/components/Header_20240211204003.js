import { Box, Text, Flex, Button } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box maxW="1200px" h="80px" m="0 auto" bg="green">
      <Flex align="center" justify="space-between">
        <Text>header</Text>
        <Button colorScheme="teal" variant="outline">
          Button
        </Button>
      </Flex>
    </Box>
  );
};
export default Header;
