import {
  Container,
  Stack,
  HStack,
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";

const Contents = () => {
  return (
    <Container>
      <Stack mb="40px" p={5} bg="green">
        <Card />
      </Stack>
      <HStack spacing="24px">
        <Box w="40px" h="40px" bg="yellow.200">
          1
        </Box>
        <Box w="40px" h="40px" bg="tomato">
          2
        </Box>
        <Box w="40px" h="40px" bg="pink.100">
          3
        </Box>
      </HStack>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg="tomato" />
        <GridItem colSpan={2} bg="pink" />
        <GridItem colSpan={2} bg="pink" />
        <GridItem colSpan={4} bg="tomato" />
      </Grid>
    </Container>
  );
};
export default Contents;
