import { Stack, Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <Stack>
      <Flex>
        <Link to="/login">
          <Button mr={2} colorScheme="teal" variant="outline">
            LOG IN
          </Button>
        </Link>

        <Button colorScheme="teal" variant="solid">
          SIGN UP
        </Button>
      </Flex>
    </Stack>
  );
};
export default Auth;
