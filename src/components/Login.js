import {Flex, VStack, Button, Input, Heading } from "@chakra-ui/react";
import Header from "./Header";
const Login = () => {
    return(
        <>
            <Header/>
            <Flex align="center" justify="center" bg={"green"}>
                <Flex w={["80%", "80%", "60%", "50%", "50%"]} p={[0, 10, 20]} >
                    <VStack bg={"green"}>
                        <Heading>Sign In</Heading>
                        <form>
                            <Input
                                m={1}
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Email address"
                                size="lg"
                            ></Input>
                            <Input
                                m={1}
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Password"
                                size="lg"
                            ></Input>
                            <Button m={1} w="100%" type="submit" colorScheme="twitter"
                                    size="lg">
                                Log In
                            </Button>
                        </form>
                    </VStack>
                </Flex>
            </Flex>
        </>
    )
}
export default Login;