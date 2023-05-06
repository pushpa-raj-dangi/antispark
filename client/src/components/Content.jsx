import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  Textarea,
  Menu,
  MenuList,
  MenuButton,
  IconButton,
  MenuItem,
} from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";
import Comment from "./Comment";
import Create from "./Create";
const Content = () => {
  const generateRandomUser = (min, max) => {
    min = Math.ceil(1);
    max = Math.floor(100);
    const randomUser = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomUser;
  };

  return (
    <Flex direction={"column"}>
      <Box bg={"white"} shadow="sm" rounded={"md"} mt={5} alignItems={"start"}>
        <Create />
      </Box>
      {[1, 2, 3, 4, 5].map((item, index) => (
        <Box
          bg={"white"}
          key={index}
          shadow="sm"
          rounded={"md"}
          mt={5}
          alignItems={"start"}
        >
          <Flex
            alignItems={"center"}
            justifyContent="space-between"
            p="2"
            mb={2}
          >
            <Flex alignItems={"center"} p="2" mb={2}>
              <Image
                rounded={"md"}
                w={"14"}
                h={"14"}
                objectPosition="center"
                objectFit="cover"
                mr={2}
                src="https://randomuser.me/api/portraits/men/1.jpg"
              />

              <Box>
                <Text fontSize="md" fontWeight="medium" color={"gray.600"}>
                  Jese Leos
                </Text>
                <Heading
                  fontSize={"xs"}
                  color="teal.500"
                  mt={1}
                  fontWeight="normal"
                  as={"p"}
                >
                  1 min ago
                </Heading>
              </Box>
            </Flex>
            <Flex justifyContent={"end"}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  size="md"
                  color={"gray.500"}
                  icon={<FiMoreVertical size={20} />}
                  colorScheme="gray"
                  variant="ghost"
                  aria-label="Comment settings"
                />
                <MenuList>
                  <MenuItem>Option 1</MenuItem>
                  <MenuItem>Option 2</MenuItem>
                </MenuList>
              </Menu>{" "}
            </Flex>
          </Flex>
          <Image
            w={"100%"}
            h={"300px"}
            objectPosition="center"
            objectFit="cover"
            roundedBottom={0}
            src={`https://randomuser.me/api/portraits/men/${generateRandomUser(
              1,
              10
            )}.jpg`}
            alt="Segun Adebayo"
          />
          <Box w="100%" p={4}>
            {[1, 2, 3].map((x) => (
              <div key={x}>
                <Comment />
              </div>
            ))}
          </Box>
          <Textarea
            placeholder="Add a comment..."
            border={"0px"}
            rounded={"md"}
            w={"90%"}
            mx={5}
            my={5}
            height={"auto"}
            bg={"gray.100"}
            p={5}
            color="black"
            fontWeight={"normal"}
          />
        </Box>
      ))}
    </Flex>
  );
};

export default Content;
