// import { SunIcon } from "@chakra-ui/icons";
// import { useColorMode } from "@chakra-ui/react";
//
// const ModeButton = () => {
//   const { colorMode, toggleColorMode } = useColorMode();
//
//   return (
//     <SunIcon
//       w={10}
//       h={10}
//       mr={2}
//       p={2}
//       cursor={"pointer"}
//       onClick={toggleColorMode}
//     >
//       Toggle {colorMode === "light" ? "Dark" : "Light"}
//     </SunIcon>
//   );
// };
// export default ModeButton;

import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
      <IconButton
          size="md"
          fontSize="lg"
          aria-label={`Switch to ${text} mode`}
          variant="ghost"
          color="current"
          marginLeft="2"
          onClick={toggleColorMode}
          icon={<SwitchIcon />}
          {...props}
      />
  );
};
