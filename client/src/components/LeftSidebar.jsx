import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { List, ListItem, ListIcon, Divider } from "@chakra-ui/react";
import { GrHomeRounded } from "react-icons/gr";
import { BsPersonVideo3 } from "react-icons/bs";
import { HiOutlinePhoto } from "react-icons/hi2";
import { FiSettings } from "react-icons/fi";
import { FcCalendar } from "react-icons/fc";
import { RxPerson } from "react-icons/rx";
import { MdOutlineExplore } from "react-icons/md";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  // const getRandomNumber = (min, max) => {
  //   return Math.floor(Math.random() * (max - min) + min);
  // };

  // const generateRandomName = () => {
  //   const names = [
  //     "Alice",
  //     "Bob",
  //     "Charlie",
  //     "David",
  //     "Emily",
  //     "Frank",
  //     "Grace",
  //     "Hannah",
  //     "Isaac",
  //     "Julia",
  //   ];

  //   return names[getRandomNumber(0, names.length)];
  // };

  // const generateRadomActiveTime = () => {
  //   const times = [
  //     "active",
  //     "2 min",
  //     "3 min",
  //     "active",
  //     "4 min",
  //     "active",
  //     "5 min",
  //   ];

  //   return times[getRandomNumber(0, times.length)];
  // };

  return (
    <>
      <Box top={15} zIndex={0} w="280px" position="sticky">
        <Box
          rounded={"md"}
          bg={"white"}
          mt={"5"}
          p={"5"}
          top={15}
          zIndex={0}
          shadow="sm"
          position="sticky"
          borderColor="gray.200"
        >
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
              <Link to="/profile/1">
                <Heading as="h5" fontSize={"15"}>
                  <span>John Doe</span>
                </Heading>
                <Heading as={"h6"} color="gray.500" fontSize="10">
                  @johndoe
                </Heading>
              </Link>
            </Box>
          </Flex>
        </Box>
        <Box
          rounded={"md"}
          bg={"white"}
          mt={"5"}
          p={"5"}
          top={15}
          shadow="sm"
          zIndex={0}
          position="sticky"
          borderColor="gray.200"
        >
          <List>
            <ListItem
              px={"2"}
              py={2}
              _hover={{
                bg: "gray.100",
                rounded: "2px",
                cursor: "pointer",
              }}
            >
              <Flex alignItems={"center"}>
                <ListIcon
                  as={GrHomeRounded}
                  textColor="gray.100"
                  color="gray.100"
                />
                <Heading
                  as={"p"}
                  fontSize="md"
                  color={"gray.600"}
                  fontWeight="semibold"
                  ml="2"
                  py="1.5"
                >
                  Home
                </Heading>
              </Flex>
            </ListItem>
            <Divider orientation="horizontal" borderColor={"gray.100"} />
            <ListItem
              px={"2"}
              py={2}
              _hover={{
                bg: "gray.100",
                rounded: "2px",
                cursor: "pointer",
              }}
            >
              <Flex alignItems={"center"}>
                <ListIcon as={BsPersonVideo3} color="green.500" />
                <Heading
                  as={"p"}
                  fontSize="md"
                  color={"gray.600"}
                  fontWeight="semibold"
                  ml="2"
                  py="1.5"
                >
                  People
                </Heading>
              </Flex>
            </ListItem>
            <Divider orientation="horizontal" borderColor={"gray.100"} />
            <ListItem
              px={"2"}
              py={2}
              _hover={{
                bg: "gray.100",
                rounded: "2px",
                cursor: "pointer",
              }}
            >
              {" "}
              <Flex alignItems={"center"}>
                <ListIcon as={MdOutlineExplore} color="green.500" />
                <Heading
                  as={"p"}
                  fontSize="md"
                  color={"gray.600"}
                  fontWeight="semibold"
                  ml="2"
                  py="1.5"
                >
                  Explore
                </Heading>
              </Flex>
            </ListItem>
            <Divider orientation="horizontal" borderColor={"gray.100"} />

            <ListItem
              px={"2"}
              py={2}
              _hover={{
                bg: "gray.100",
                rounded: "2px",
                cursor: "pointer",
              }}
            >
              <Flex alignItems={"center"}>
                <ListIcon as={HiOutlinePhoto} color="green.500" />
                <Heading
                  as={"p"}
                  fontSize="md"
                  color={"gray.600"}
                  fontWeight="semibold"
                  ml="2"
                  py="1.5"
                >
                  Photos
                </Heading>
              </Flex>
            </ListItem>
            <Divider orientation="horizontal" borderColor={"gray.100"} />
            <ListItem
              px={"2"}
              py={2}
              _hover={{
                bg: "gray.100",
                rounded: "2px",
                cursor: "pointer",
              }}
            >
              {" "}
              <Flex alignItems={"center"}>
                <ListIcon as={FcCalendar} color="green.500" />
                <Heading
                  as={"p"}
                  fontSize="md"
                  color={"gray.600"}
                  fontWeight="semibold"
                  ml="2"
                  py="1.5"
                >
                  News Feed
                </Heading>
              </Flex>
            </ListItem>

            <Divider orientation="horizontal" borderColor={"gray.100"} />
            <ListItem
              px={"2"}
              py={2}
              _hover={{
                bg: "gray.100",
                rounded: "2px",
                cursor: "pointer",
              }}
            >
              {" "}
              <Flex alignItems={"center"}>
                <ListIcon as={RxPerson} color="green.500" />
                <Heading
                  as={"p"}
                  fontSize="md"
                  color={"gray.600"}
                  fontWeight="semibold"
                  ml="2"
                  py="1.5"
                >
                  Profile
                </Heading>
              </Flex>
            </ListItem>
            <Divider orientation="horizontal" borderColor={"gray.100"} />
            <ListItem
              px={"2"}
              py={2}
              _hover={{
                bg: "gray.100",
                rounded: "2px",
                cursor: "pointer",
              }}
            >
              {" "}
              <Flex alignItems={"center"}>
                <ListIcon as={FiSettings} color="green.500" />
                <Heading
                  as={"p"}
                  fontSize="md"
                  color={"gray.600"}
                  fontWeight="semibold"
                  ml="2"
                  py="1.5"
                >
                  Settings
                </Heading>
              </Flex>
            </ListItem>
          </List>
        </Box>
        <Box
          rounded={"md"}
          bg={"white"}
          shadow="sm"
          mt={"5"}
          p={"5"}
          borderColor="gray.200"
        >
          <Heading
            as={"p"}
            fontWeight="medium"
            color={"gray.500"}
            fontSize={"xs"}
          >
            <span>© 2023 Arti Spark</span>
          </Heading>

          <Heading
            as={"p"}
            fontWeight="medium"
            color={"gray.500"}
            fontSize={"xs"}
            mt="3"
          >
            <span>Privacy Policy</span>
          </Heading>
          <Heading
            as={"p"}
            fontWeight="medium"
            color={"gray.500"}
            fontSize={"xs"}
            mt="3"
          >
            <span>Cookies</span>
          </Heading>
          <Heading
            as={"p"}
            fontWeight="medium"
            color={"gray.500"}
            fontSize={"xs"}
            mt="3"
          >
            <span>Terms & Conditions</span>
          </Heading>
        </Box>
        {/* <Box
          rounded={"md"}
          p={"10"}
          bg={"white"}
          mt={"10"}
          pr={"10"}
          h="96vh"
          top={15}
          zIndex={0}
          position="sticky"
          borderColor="gray.200"
        >
          <InputGroup mb={"5"} size="md" border={1} rounded={"full"}>
            <InputLeftAddon
              shadow={"sm"}
              bg={"white"}
              rounded={"full"}
              border={0}
            >
              <CiSearch />
            </InputLeftAddon>
            <Input
              rounded={"full"}
              border="slateblue"
              bg={"white"}
              shadow="sm"
              focusBorderColor="transparent"
              color="gray.900"
              placeholder="Search followers..."
            />
          </InputGroup>
          <Heading
            as={"h6"}
            fontSize="14"
            fontWeight
            color={"gray.500"}
            letterSpacing={"widest"}
          >
            Followers
          </Heading>

          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <Flex
              key={index}
              alignItems={"center"}
              justifyContent={"space-between"}
              mt={"5"}
              mb={"5"}
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
                  <Box
                    as="div"
                    bg="green.500"
                    w={"2"}
                    h={"2"}
                    rounded="full"
                  ></Box>
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
        </Box>  */}
      </Box>
    </>
  );
};

export default LeftSidebar;
