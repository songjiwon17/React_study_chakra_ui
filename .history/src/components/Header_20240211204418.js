import { Stack, Text, Flex, Button, Center } from "@chakra-ui/react";

const Header = () => {
  return (
    <Stack maxW="1200px" h="80px" m="0 auto" p={2} bg="green">
      <Flex justify="space-between">
        <Text>LOGO</Text>
        <Button colorScheme="teal" variant="outline">
          LOG IN
        </Button>
      </Flex>
    </Stack>
  );
};
export default Header;
