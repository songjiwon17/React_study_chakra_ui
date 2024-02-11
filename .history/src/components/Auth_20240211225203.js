import { useState } from "react";
import { Stack, Flex, Button } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";
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
                <InputGroup size="md">
                  <InputLeftElement pointerEvents="none">
                    <LockIcon color="gray.300" />
                  </InputLeftElement>
                  <Input pr="4.5rem" type="text" placeholder="user name" />
                </InputGroup>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Button type="submit" mt={3} bg="pink">
                  LOG IN
                </Button>
              </Stack>
              <Stack>
                <Button type="submit" mt={20} bg="#666" color="#fff">
                  Contiue with Github
                </Button>
                <Button type="submit" mt={0} bg="yellow">
                  Contiue with KaKao
                </Button>
              </Stack>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
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
