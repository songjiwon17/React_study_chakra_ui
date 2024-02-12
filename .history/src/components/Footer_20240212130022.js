import { Stack, Flex, Text, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Stack maxW="1200px" m="0 auto" bg="#999">
      <Flex justify="space-between">
        <Text fontSize="24px" as="b" color="#333">
          LOGO
        </Text>
        <Flex>
          <Button
            mr={2}
            colorScheme="facebook"
            leftIcon={<FaFacebook />}
          ></Button>
          <Button colorScheme="twitter" leftIcon={<FaTwitter />}></Button>
        </Flex>
      </Flex>
    </Stack>
  );
};
export default Footer;
