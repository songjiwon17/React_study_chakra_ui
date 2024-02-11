import { Stack, Text, Flex, Button, Center } from "@chakra-ui/react";

const Header = () => {
  return (
    <Stack maxW="1200px" m="0 auto" p={5} bg="pink">
      <Flex justify="space-between">
        <Text fontSize="24px" as="b" color="#333">
          LOGO
        </Text>
        <Button colorScheme="teal" variant="outline">
          LOG IN
        </Button>
        <Button colorScheme="teal" variant="solid">
          Button
        </Button>
      </Flex>
    </Stack>
  );
};
export default Header;
