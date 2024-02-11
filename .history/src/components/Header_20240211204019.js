import { Box, Text, Flex, Button, Center } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box maxW="1200px" h="80px" m="0 auto" bg="green">
      <Flex align="center" justify="space-between">
        <Center>
          <Text>header</Text>
          <Button colorScheme="teal" variant="outline">
            Button
          </Button>
        </Center>
      </Flex>
    </Box>
  );
};
export default Header;
