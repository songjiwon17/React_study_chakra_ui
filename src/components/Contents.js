import { Container, Stack, HStack, Flex, Button } from "@chakra-ui/react";
import Card from "./Card";

const Contents = () => {

    /** @chakra-ui 기본 제공 브레이크 포인트 */
    // const breakpoints = createBreakpoints({
    //     sm: "30em",
    //     md: "48em",
    //     lg: "62em",
    //     xl: "80em",
    //     "2xl": "96em",
    // })

  return (
    <Container maxW={"1400px"} p={2} align={"center"} justify={"center"} bg={"tomato"}>
        <Flex bg={'yellow'}>
            <Stack w={["100%", "80%", "60%", "50%", "10%"]} direction={{ base: "column", md: "row" }} p={[0, 10]} mb={3}>
                <Card />
                <Card />
            </Stack>
        </Flex>
        <Flex>
            <HStack>
                <Card />
                <Card />
                <Card />
                <Card />
            </HStack>
        </Flex>
        <Button display={{ base: "none", xl: "block" }} bg={"green"}>d안녕</Button>
    </Container>
  );

};
export default Contents;
