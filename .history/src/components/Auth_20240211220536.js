import {
  Stack,
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Avatar,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

const Auth = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Stack>
      <Flex>
        <Button mr={2} colorScheme="teal" variant="outline" onClick={onOpen}>
          LOG IN
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>LOG IN</ModalHeader>
            <ModalBody>
              <Avatar src="https://bit.ly/broken-link" />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Button colorScheme="teal" variant="solid">
          SIGN UP
        </Button>
      </Flex>
    </Stack>
  );
};
export default Auth;
