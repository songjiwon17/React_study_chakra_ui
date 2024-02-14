import { Flex, Text, Box, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const MenuItem = ({ children, onClick }) => {
  return (
      <Text
          ms={{ base: 2, sm: 2, md: 2, xl: 2 }}
          mr={{ base: 2, sm: 2, md: 2, xl: 2 }}
          display="block"
          onClick={onClick}
      >
        <Link to="/">{children}</Link>
      </Text>
  );
};

const Header = () => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);

  return (
      <Flex
          // mb={4}
          p={2}
          as="nav"
          align="center"
          alignItems="center"
          justify="space-between"
          wrap="wrap"
          w="100%"
      >
        <Box w="200px" bg={"tomato"}>
          <Text fontSize="lg" fontWeight="bold">
            <Link to="/">Chakra-UI Example</Link>
          </Text>
        </Box>
        <DarkModeSwitch />
        <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
          {show ? <CloseIcon /> : <HamburgerIcon />}
        </Box>

        <Box
            display={{ base: show ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
        >
          <Stack
              spacing={8}
              align="center"
              justify={["center", "center", "space-between", "space-between"]}
              direction={["column", "column", "row", "row"]}
              p={[4, 4, 0, 0]}
              bg={"yellow"}
          >
            <MenuItem onClick={toggleMenu}>
              <Link to="/login">
                Log in
              </Link>
            </MenuItem>
            <MenuItem onClick={toggleMenu}>
              <Link to="/signup">
                Sign up
              </Link>
            </MenuItem>
          </Stack>
        </Box>
      </Flex>
  );
};

export default Header;