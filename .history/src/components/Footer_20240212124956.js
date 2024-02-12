import { Stack, Flex, Text } from "@chakra-ui/react";
import { BellIcon, SearchIcon, SettingsIcon } from "@chakra-ui/icons";

const Footer = () => {
  return (
    <Stack maxW="1200px" m="0 auto" bg="#999">
      <Flex justify="space-between">
        <Text fontSize="24px" as="b" color="#333">
          LOGO
        </Text>
        <Flex>
          <BellIcon />
          <SearchIcon />
          <SettingsIcon />
        </Flex>
      </Flex>
    </Stack>
  );
};
export default Footer;
