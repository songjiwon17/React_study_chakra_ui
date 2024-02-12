import { Stack, Flex, Text, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Stack maxW="1400px" m="0 auto" p={5} bg="#666">
      <Flex justify="space-between">
        <Text fontSize="24px" as="b" color="#999">
          LOGO
        </Text>
        <Flex>
          {/* <Button mr={2} colorScheme="facebook" leftIcon={<FaFacebook />}>
            Facebook
          </Button>
          <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
            Twitter
          </Button> */}
        </Flex>
      </Flex>
    </Stack>
  );
};
export default Footer;
