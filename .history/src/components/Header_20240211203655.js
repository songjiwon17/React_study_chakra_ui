import { Box, Text, Flex, Button } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box maxW="1200px" h="80px" bg="green">
      <Flex align="center" justify="center">
        <Text>header</Text>
        <Button colorScheme="teal" variant="outline">
          Button
        </Button>
      </Flex>
    </Box>
  );
};
export default Header;
