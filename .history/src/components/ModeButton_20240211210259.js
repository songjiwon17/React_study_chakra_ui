import { SunIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";

const ModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <SunIcon w={8} h={8} cursor={"pointer"} onClick={toggleColorMode}>
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </SunIcon>
  );
};
export default ModeButton;
