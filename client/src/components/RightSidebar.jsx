import { Box, Flex, Heading } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { InputGroup, InputLeftAddon, Input } from "@chakra-ui/react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import ChatWindowContainer from "./ChatWindowContainer";
import { Link } from "react-router-dom";

const RightSidebar = () => {
  const [chatHeads, setChatHeads] = useState([]);
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const removeChatWindow = (item) => {
    setChatHeads(chatHeads.filter((x) => x !== item));
  };

  const addChatHead = (item) => {
    if (!chatHeads.includes(item)) {
      setChatHeads([...chatHeads, item]);
    }
  };

  const generateRandomName = () => {
    const names = [
      "Alice",
      "Bob",
      "Charlie",
      "David",
      "Emily",
      "Frank",
      "Grace",
      "Hannah",
      "Isaac",
      "Julia",
    ];

    return names[getRandomNumber(0, names.length)];
  };

  const generateRadomActiveTime = () => {
    const times = [
      "active",
      "2 min",
      "3 min",
      "active",
      "4 min",
      "active",
      "5 min",
    ];

    return times[getRandomNumber(0, times.length)];
  };
  return (
    <>
      <Box top={10} zIndex={0} position="sticky">
        <Heading
          as="p"
          size={"14"}
          mt={4}
          mb="4"
          fontWeight="semibold"
          color={"gray.600"}
          fontSize="xs"
        >
          REQUESTS
        </Heading>

        {[1, 2].map((item, index) => (
          <Box
            key={index}
            rounded={"md"}
            bg={"white"}
            mt={"1"}
            p={"2"}
            top={15}
            zIndex={0}
            shadow="sm"
            position="sticky"
            mb={"5"}
            borderColor="gray.200"
          >
            <Link to="/profile/1">
              <Flex alignItems={"center"}>
                <Image
                  h={10}
                  border={1}
                  borderColor={"gray.300"}
                  rounded={"md"}
                  src={"https://randomuser.me/api/portraits/men/85.jpg"}
                  alt="Arti spark logo"
                />
                <Box pl={2}>
                  <Heading as="h5" p="2" fontSize={"14"}>
                    <Heading as="span" fontWeight={"semibold"} fontSize={"14"}>
                      Pushpa Raj Dangi
                    </Heading>
                    <Heading
                      as="span"
                      color={"gray.500"}
                      fontWeight={"normal"}
                      fontSize={"14"}
                    >
                      <br />
                      <Heading
                        as="span"
                        pt="3"
                        fontWeight={"normal"}
                        fontSize={"xs"}
                      >
                        {" "}
                        follow you{" "}
                      </Heading>
                    </Heading>
                  </Heading>
                </Box>
              </Flex>
            </Link>
            <Flex alignItems={"center"} mx={"2.5"} mt="2">
              <Box
                rounded={"md"}
                shadow="sm"
                fontSize={"small"}
                fontWeight={"medium"}
                bg="blue.500"
                py={1}
                color={"white"}
                cursor={"pointer"}
                _hover={{ bg: "green.400", color: "white" }}
                px={3}
              >
                Follow
              </Box>
              <Box
                ml={"2"}
                rounded={"md"}
                shadow="sm"
                fontSize={"small"}
                fontWeight={"medium"}
                py={1}
                bg="gray.100"
                color={"gray.700"}
                cursor={"pointer"}
                _hover={{ bg: "red", color: "white" }}
                px={3}
              >
                Decline
              </Box>
            </Flex>
          </Box>
        ))}

        <Box
          rounded={"md"}
          mx={"auto"}
          bg={"white"}
          pr={"10"}
          p={"0"}
          shadow="sm"
          backdropBlur={"md"}
          top={15}
          w="full"
          zIndex={0}
          position="sticky"
          borderColor="gray.200"
        >
          <Box
            w={"full"}
            bg="white"
            p={"2"}
            position="sticky"
            left="0"
            px={"5"}
            py="2"
            roundedTop={"md"}
            backdropBlur={"sm"}
            shadow={"sm"}
            right={"0"}
            top={0}
          >
            <InputGroup
              size="sm"
              border={"0"}
              borderColor="gray.300"
              rounded={"md"}
            >
              <InputLeftAddon bg={"white"} rounded={"md"} border={0}>
                <CiSearch />
              </InputLeftAddon>
              <Input
                rounded={"md"}
                border="gray"
                bg={"white"}
                px={"0"}
                focusBorderColor="transparent"
                color="gray.900"
                placeholder="Search connections..."
              />
            </InputGroup>
          </Box>
          <Box>
            <Heading
              mt={1}
              as="p"
              size={"14"}
              p="3"
              fontWeight="medium"
              color={"gray.600"}
              fontSize="base"
            >
              Connections
            </Heading>
          </Box>

          <Box className="scroll" h="50vh">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
              <Flex
                _hover={{ bg: "gray.100", cursor: "pointer" }}
                onClick={() => addChatHead(item)}
                key={index}
                alignItems={"center"}
                justifyContent={"space-between"}
                p="3"
              >
                <Flex alignItems={"center"}>
                  <Image
                    src={`https://randomuser.me/api/portraits/women/${getRandomNumber(
                      1,
                      100
                    )}.jpg`}
                    borderRadius="full"
                    boxSize="40px"
                  />
                  <Box ml={2}>
                    <Heading as={"p"} fontWeight="medium" fontSize={"15"}>
                      {generateRandomName()} {generateRandomName()}
                    </Heading>
                  </Box>
                </Flex>
                <Box color={"gray.400"}>
                  {generateRadomActiveTime() === "active" ? (
                    <Box as="div" w={"2"} h={"2"} rounded="full"></Box>
                  ) : (
                    <Box
                      as="span"
                      bg="gray.200"
                      px="2"
                      py="1"
                      color="gray.500"
                      fontSize="10"
                      fontWeight="bold"
                      rounded="md"
                    >
                      {generateRadomActiveTime()}
                    </Box>
                  )}{" "}
                </Box>
              </Flex>
            ))}
          </Box>
        </Box>
      </Box>
      <ChatWindowContainer
        removeChatWindow={removeChatWindow}
        chatData={chatHeads}
      />
    </>
  );
};

export default RightSidebar;
