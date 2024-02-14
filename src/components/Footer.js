import { Stack, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Stack maxW={"container.xl"} m="0 auto" p={5} bg="#666">
      <Flex justify="space-between">
        <Text fontSize="24px" as="b" color="#999">
          LOGO
        </Text>
      </Flex>
    </Stack>
  );
};
export default Footer;
