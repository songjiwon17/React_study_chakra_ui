import { SunIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";

const ModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <SunIcon
      w={10}
      h={10}
      p={2}
      cursor={"pointer"}
      bg={"tomato"}
      onClick={toggleColorMode}
    >
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </SunIcon>
  );
};
export default ModeButton;
