import { Stack, Text, Flex } from "@chakra-ui/react";
import Login from "./Login";
import ModeButton from "./ModeButton";

const Header = () => {
  return (
    <Stack maxW="1200px" m="0 auto" p={5}>
      <Flex justify="space-between">
        <Text fontSize="24px" as="b" color="#333">
          LOGO
        </Text>
        <Flex>
          <ModeButton />
          <Login />
        </Flex>
      </Flex>
    </Stack>
  );
};
export default Header;
