import { Stack, Flex, Button } from "@chakra-ui/react";

const Auth = () => {
  return (
    <Stack>
      <Flex>
        <Button mr={2} colorScheme="teal" variant="outline">
          LOG IN
        </Button>

        <Button colorScheme="teal" variant="solid">
          SIGN UP
        </Button>
      </Flex>
    </Stack>
  );
};
export default Auth;
