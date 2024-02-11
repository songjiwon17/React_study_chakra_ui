import { Box, Text, Flex, Button, Center } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box maxW="1200px" h="100px" m="0 auto" bg="green">
      <Flex justify="space-between">
        <Text>LOGO</Text>
        <Button colorScheme="teal" variant="outline">
          LOG IN
        </Button>
      </Flex>
    </Box>
  );
};
export default Header;
