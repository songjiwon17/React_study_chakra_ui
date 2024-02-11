import { useState } from "react";
import { StarIcon } from "@chakra-ui/icons";
import { Stack, Flex, Button, Avatar } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

const Auth = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
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
              <Stack>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <StarIcon />
                  </InputLeftElement>
                  <Input type="text" placeholder="user name" />
                </InputGroup>
              </Stack>
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
