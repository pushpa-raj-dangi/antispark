import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import {
  IoCallOutline,
  IoCloseOutline,
  IoVideocamOutline,
} from "react-icons/io5";

import { AiOutlineMinus } from "react-icons/ai";
import { BsSend } from "react-icons/bs";
import React from "react";

const ChatWindow = () => {
  return (
    <Flex gap={"2"}>
      <Flex
        shadow={"2xl"}
        backdropBlur="md"
        backdropContrast={2}
        backdropFilter="blur(2px)"
        bg="white"
        backgroundColor={"white"}
        flexDir={"column"}
        justifyContent={"space-between"}
        roundedTop={"md"}
        minHeight="55vh"
        w="80"
      >
        <Flex
          p="2"
          bg="white"
          roundedTop={"md"}
          shadow={"sm"}
          justifyContent={"space-between"}
        >
          <Text>Pushpa Raj Dangi</Text>
          <Flex gap={"10px"} alignItems="center">
            <Box
              _hover={{
                bg: "gray.300",
                cursor: "pointer",
                borderRadius: "50%",
              }}
            >
              <IoCallOutline />
            </Box>
            <Box
              _hover={{
                bg: "gray.300",
                cursor: "pointer",
                borderRadius: "50%",
              }}
            >
              <IoVideocamOutline />
            </Box>
            <Box
              _hover={{
                bg: "gray.300",
                cursor: "pointer",
                borderRadius: "50%",
              }}
            >
              <Box
                _hover={{
                  bg: "gray.300",
                  cursor: "pointer",
                  borderRadius: "50%",
                }}
              >
                <AiOutlineMinus />
              </Box>
            </Box>
            <Box
              _hover={{
                bg: "gray.300",
                cursor: "pointer",
                borderRadius: "50%",
              }}
            >
              <IoCloseOutline onClick={() => {}} />
            </Box>
          </Flex>
        </Flex>

        <Flex
          h={"full"}
          justifyContent="end"
          height={"50vh"}
          overflowY="scroll"
          flexDir="column"
          p={"2"}
        >
          <Box w="full">
            <Flex align={"end"}>
              <Box mr={"2"}>
                <Image
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                  boxSize="2rem"
                  borderRadius="full"
                />
              </Box>
              <Flex flexDir={"column"} gap="1">
                <Box>
                  <Text
                    bg={"gray.100"}
                    rounded="full"
                    p={"2"}
                    fontSize="sm"
                    display={"inline-block"}
                    fontWeight="normal"
                  >
                    Hi
                  </Text>
                </Box>
                <Box>
                  <Text
                    bg={"gray.100"}
                    rounded="full"
                    p={"2"}
                    fontSize="sm"
                    fontWeight="normal"
                  >
                    Hi k cha khabar
                  </Text>
                </Box>
              </Flex>
            </Flex>

            <Flex align={"end"} justifyContent={"end"}>
              <Flex
                flexDir={"column"}
                textAlign="right"
                display="inline-flex"
                alignContent={"flex-end"}
                gap="1"
              >
                <Box>
                  <Text
                    p="2"
                    bg={"gray.100"}
                    rounded="full"
                    display={"inline-block"}
                    fontSize="sm"
                    fontWeight="normal"
                  >
                    Hi
                  </Text>
                </Box>
                <Box>
                  <Text
                    p="2"
                    bg={"gray.100"}
                    rounded="full"
                    display={"inline-block"}
                    fontSize="sm"
                    fontWeight="normal"
                  >
                    Hi k chaa khabar
                  </Text>
                </Box>
              </Flex>
              <Box ml="1">
                <Image
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                  boxSize="2rem"
                  borderRadius="full"
                />
              </Box>
            </Flex>
            <Flex align={"end"}>
              <Box mr={"2"}>
                <Image
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                  boxSize="2rem"
                  borderRadius="full"
                />
              </Box>
              <Flex flexDir={"column"} gap="1">
                <Box>
                  <Text
                    bg={"gray.100"}
                    rounded="full"
                    p={"2"}
                    fontSize="sm"
                    display={"inline-block"}
                    fontWeight="normal"
                  >
                    Hi
                  </Text>
                </Box>
                <Box>
                  <Text
                    bg={"gray.100"}
                    rounded="full"
                    p={"2"}
                    fontSize="sm"
                    fontWeight="normal"
                  >
                    Hi k cha khabar
                  </Text>
                </Box>
              </Flex>
            </Flex>

            <Flex align={"end"} justifyContent={"end"}>
              <Flex
                flexDir={"column"}
                textAlign="right"
                display="inline-flex"
                alignContent={"flex-end"}
                gap="1"
              >
                <Box>
                  <Text
                    p="2"
                    bg={"gray.100"}
                    rounded="full"
                    display={"inline-block"}
                    fontSize="sm"
                    fontWeight="normal"
                  >
                    Hi
                  </Text>
                </Box>
                <Box>
                  <Text
                    p="2"
                    bg={"gray.100"}
                    rounded="full"
                    display={"inline-block"}
                    fontSize="sm"
                    fontWeight="normal"
                  >
                    Hi k chaa khabar
                  </Text>
                </Box>
              </Flex>
              <Box ml="1">
                <Image
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                  boxSize="2rem"
                  borderRadius="full"
                />
              </Box>
            </Flex>
          </Box>
        </Flex>

        <Flex>
          <InputGroup borderTop={"1px"} borderColor="gray.100" size="md">
            <Input
              placeholder="Type..."
              focusBorderColor="transparent"
              borderRight={"gray"}
            />
            <InputRightAddon
              border={"none"}
              bg={"white"}
              children={
                <Box as="button" bg={"gray.100"} rounded="md" px="3" p={2}>
                  <BsSend />
                </Box>
              }
            />
          </InputGroup>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ChatWindow;
