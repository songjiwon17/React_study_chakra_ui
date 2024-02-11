import { useState } from "react";
import { Stack, Flex, Button, Divider } from "@chakra-ui/react";
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
  AbsoluteCenter,
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
                  <InputLeftElement pointerEvents="none">
                    <LockIcon color="gray.300" />
                  </InputLeftElement>
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
                <Button type="submit" mt={2} bg="pink">
                  LOG IN
                </Button>
              </Stack>
              <Stack position="relative" padding="10">
                <Divider />
                <AbsoluteCenter>OR</AbsoluteCenter>
              </Stack>
              <Stack>
                <Button type="submit" mt={4} bg="#666" color="#fff">
                  Contiue with Github
                </Button>
                <Button type="submit" mt={0} bg="#fee500">
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
        <Button colorScheme="teal" variant="solid" onClick={onOpen}>
          SIGN UP
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
                  <InputLeftElement pointerEvents="none">
                    <LockIcon color="gray.300" />
                  </InputLeftElement>
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
                <Button type="submit" mt={2} bg="pink">
                  LOG IN
                </Button>
              </Stack>
              <Stack position="relative" padding="10">
                <Divider />
                <AbsoluteCenter>OR</AbsoluteCenter>
              </Stack>
              <Stack>
                <Button type="submit" mt={4} bg="#666" color="#fff">
                  Contiue with Github
                </Button>
                <Button type="submit" mt={0} bg="#fee500">
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
      </Flex>
    </Stack>
  );
};
export default Auth;
