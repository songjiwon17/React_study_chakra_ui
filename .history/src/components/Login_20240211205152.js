import { Stack, Flex, Button } from "@chakra-ui/react";

const login = () => {
  return (
    <Stack>
      <Flex>
        <Button colorScheme="teal" variant="outline">
          LOG IN
        </Button>
        <Button colorScheme="teal" variant="solid">
          SIGN UP
        </Button>
      </Flex>
    </Stack>
  );
};
export default login;
