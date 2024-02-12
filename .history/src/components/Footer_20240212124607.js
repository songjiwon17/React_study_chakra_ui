import { Stack, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Stack maxW="1200px" m="0 auto" bg="#999">
      <Flex justify="space-between">
        <Text fontSize="24px" as="b" color="#333">
          LOGO
        </Text>
        <Flex>
          <ModeButton />
          <Auth />
        </Flex>
      </Flex>
    </Stack>
  );
};
export default Footer;
