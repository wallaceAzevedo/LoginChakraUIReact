import {
    Box,
    Flex,
    Heading, 
    Input, 
    Text, 
    InputGroup,
    InputRightElement, 
    Stack,
    Checkbox
 } from '@chakra-ui/react';

import "../CSS/Login.css";

import {  FaLock } from "react-icons/fa"
import { EmailIcon } from "@chakra-ui/icons";
import { FcGoogle  } from "react-icons/fc";

import { Button } from "@chakra-ui/button";

const Login = () => {

    return (
      <Box>
          <Flex height="100vh" alingItems="center" justifyContent="center"  >
          
          <Flex 
          direction="column" 
          background="#FFFFFF" 
          boxShadow="0px 1px 4px rgba(0, 0, 0, 0.15)" 
          padding="40px" 
          width="370px"
          height="450px" 
          borderRadius="15px" 
          style={{marginTop:'80px'}}
          >
            <Heading mb={6}  textAlign="center">
              <Text 
              fontSize="24px"
              fontWeight="900"
              color="#FDC921"
              marginTop="15px"
              >
                  GoTokens
              </Text>
              <Text 
              fontSize="14px"
              fontWeight="500"
              color="#3A3A3A"
              marginTop="12px"
              letterSpacing="0.2px"
              >
                  Entre para começar sua sessão
              </Text>
            </Heading>
  
            <InputGroup >
              <InputRightElement
                  pointerEvents="none"
                  padding="12px"
                  fontSize="1.2em"
                  children={<EmailIcon color="#3A3A3A"/>}
                  marginTop="2px"
                 
                  />
              <Input 
              type="email" 
              focusBorderColor="#DFDFDF"
              marginBottom="22px"
              height="45px"
              borderRadius="10px"
              />
            </InputGroup>
  
              <InputGroup   height="57px" >
              <InputRightElement
                  padding="13px"
                  pointerEvents="none"
                  fontSize="1.2em"
                  children={<FaLock color="#3A3A3A"/>}
                  marginTop="2px"
                  />
              <Input 
              type="password" 
              focusBorderColor="#DFDFDF"
              marginBottom="22px"
              height="45px"
              borderRadius="10px"
              />
              </InputGroup>
  
          <Stack isInline justifyContent="space-between" align="center">
              <Box 
              color="#AFAFAF"
              >
                  <Checkbox colorScheme="#FFFFFF" iconColor="#FDC921"> 
                      <Text 
                      fontSize="12px" 
                      fontWeight="500" 
                      letterSpacing="0.5px" 
                      > 
                      Lembrar de mim
                      </Text>
                  </Checkbox>
              </Box>
              <Box>
                  <Button className="botaoHoverAmarelo"
                  borderRadius="41px" 
                  border="1px solid"
                  borderColor="#DFDFDF"
                  color="#454545"
                  colorScheme="#FFFFFF"
                  width="115px"
                  letterSpacing="0.5px"
                  fontWeight="500" 
                  fontSize="14px"
                   >
                      Entrar
                  </Button>
              </Box>
          </Stack>
          <Text
              marginTop="40px"
              
              fontFamily="Mulish"
              textAlign="center"
              fontWeight="600"
              fontSize="14px"
              color=" #3A3A3A"
              letterSpacing="0.2px"
              >
              - ou logar com -
          </Text>
         <Box textAlign="center">
          <Button leftIcon={<FcGoogle className="Gicone"/>}
              className="bordaHoverAmarelo"
              marginTop="10px"
              borderRadius="41px" 
              border="1px solid"
              borderColor="#DFDFDF"
              color="#454545"
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
         <Box
         textAlign="center"
         position="absolute"
         color="#454545"
         width="300px"
         fontSize="12px"
         fontWeight="500"
         marginTop="430px"
         >
            <Text className="Text" >Esqueci minha senha</Text>
            <Text marginTop="10px"
            >
                 Cadastrar uma nova conta
            </Text>
         </Box>  
        </Flex>  
        </Flex>
        
      </Box>
    )
}

export default Login;
