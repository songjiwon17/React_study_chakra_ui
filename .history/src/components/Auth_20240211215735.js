import { Stack, Flex, Button } from "@chakra-ui/react";
import { UseDisclosureProps } from "@chakra-ui/react";

const Auth = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
