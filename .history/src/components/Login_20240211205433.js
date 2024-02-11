import { Stack, Flex, Button } from "@chakra-ui/react";

const Login = () => {
  return (
    <Stack bg="yellow">
      <Flex>
        <Button mr={1} colorScheme="teal" variant="outline">
          LOG IN
        </Button>
        <Button colorScheme="teal" variant="solid">
          SIGN UP
        </Button>
      </Flex>
    </Stack>
  );
};
export default Login;
