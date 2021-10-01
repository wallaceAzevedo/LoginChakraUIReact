import {
  Box,
  Text,
  Flex,
  Heading, 
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
} from '@chakra-ui/react';

import { Image } from "@chakra-ui/image";

import "../CSS/Login.css";

import Group from "../imagens/Group.png"

import {  FaLock } from "react-icons/fa"
import { EmailIcon } from "@chakra-ui/icons";
import { FcGoogle  } from "react-icons/fc";

import { Button } from "@chakra-ui/button";

import celular from "../imagens/celular.png"
import Montanhas from "../imagens/montanhas.jpg"


const Login = () => {

  return (
    <Box >
      <Flex height="100vh" alingItems="center" justifyContent="center"  >
        <Box mt="80px"  >
          <Image  src={Montanhas} height="465px" width="250px" ml="5px" alt="Montanhas" borderRadius="35px"/>
          <Image mt="-465px" src={celular} height="475px" width="260px" alt="celular"/>
          <Box
            direction="column" 
            borderRadius="35px" 
            mt="-470px"
            textAlign="center"
            justifyContent="space-around"
            >
            <Heading
            mt="50px"
            fontFamily= "'Dancing Script', cursive"
            fontSize="70px"
            color="#13185f"
            fontWeight="700"
            >
              Login
            </Heading>
              <FormControl>
                <FormControl id="email" maxW="210px"  ml="25px" textAlign="left" mt="20px">
                  <FormLabel color="#13185f">Email address</FormLabel>
                  <Input  type="email" borderRadius="20px"/>
                </FormControl>
                <FormControl id="Password" maxW="210px"  ml="25px" textAlign="left" mt="5px">
                  <FormLabel color="#13185f">Password</FormLabel>
                  <Input color="#FFFFFF" type="Password" borderRadius="20px"/>
                  <FormHelperText color="#FFFFFF">We'll never share your password.</FormHelperText>
                </FormControl>
                <Button
                type="submit"
                mt="5px"
                borderRadius="41px" 
                border="1px solid"
                borderColor="#DFDFDF"
                backgroundColor="transparent"
                color="#FFFFFF"
                _hover={{color:'#FFFFFF'}}
                >
                  Enter
                </Button>
              </FormControl>
              <Box mt="5px">
                <Text color="#FFFFFF">
                Sign in with
                </Text>
                <Button leftIcon={<FcGoogle className="Gicone"/>}
                marginTop="5px"
                borderRadius="41px" 
                border="1px solid"
                borderColor="#DFDFDF"
                colorScheme="#FFFFFF"
                width="180px"
                letterSpacing="0.5px"
                fontFamily="Roboto"
                fontWeight="500" 
                fontSize="14px"
                >
                  Google Account
              </Button>
              </Box>
          </Box>  
        </Box>
      </Flex>
    </Box>
  )
}

export default Login;
