import { SunIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";

const ModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <SunIcon boxSize={3} onClick={toggleColorMode}>
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </SunIcon>
  );
};
export default ModeButton;
