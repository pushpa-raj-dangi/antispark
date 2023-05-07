import {
  Box,
  Flex,
  Image,
  Heading,
  Center,
  Divider,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import { BsPlus } from "react-icons/bs";
const Profile = () => {
  return (
    <>
      <Box bg={"gray.100"}>
        <Flex alignItems={"center"} px={"52"} pt={"20"} bg={"gray.50"}>
          <Box mr={"14"}>
            <Image
              src="https://bit.ly/sage-adebayo"
              alt="Segun Adebayo"
              borderRadius="full"
              boxSize="150px"
            />
          </Box>
          <Box>
            <Heading as={"h4"} fontSize={"xl"}>
              Pushpa Raj Dangi
            </Heading>
            <Heading
              as={"h6"}
              fontWeight={"normal"}
              mt={"2"}
              fontSize={"large"}
            >
              @pushpa
            </Heading>
          </Box>
        </Flex>
        <Flex
          textAlign="center"
          bg={"gray.50"}
          borderBottom={"1px"}
          borderColor={"gray.200"}
          justifyContent={"center"}
        >
          <Flex
            bg={"white"}
            borderTop={"1px"}
            borderColor={"gray.50"}
            shadow={"sm"}
            borderTopRadius={"lg"}
            justifyContent={"space-between"}
          >
            <Box py="2" px={"5"} textAlign={"center"}>
              <Heading as={"h6"} fontWeight={"bold"} fontSize={"md"}>
                1220
              </Heading>
              <Heading
                as={"h6"}
                textColor={"gray.500"}
                fontWeight={"semibold"}
                fontSize={"xs"}
              >
                followers
              </Heading>
            </Box>
            <Center>
              <Divider mx={"1"} orientation="vertical" />
            </Center>
            <Box px={"5"} py="2" textAlign={"center"}>
              <Heading as={"h6"} fontWeight={"bold"} fontSize={"md"}>
                80
              </Heading>
              <Heading
                as={"h6"}
                textColor={"gray.500"}
                fontWeight={"semibold"}
                fontSize={"xs"}
              >
                following
              </Heading>
            </Box>

            <Flex
              alignItems={"center"}
              px={"5"}
              bg="blue.500"
              borderTopRightRadius={"lg"}
              textColor={"white"}
              textAlign={"left"}
            >
              <BsPlus size={"28"} />{" "}
              <Heading as={"h6"} fontWeight={"normal"} fontSize={"base"}>
                Follow
              </Heading>
            </Flex>
          </Flex>
        </Flex>
      </Box>

      <Box>
        <Box
          mt={"8"}
          justifyContent={"space-between"}
          alignItems={"center"}
          px={"52"}
          py={"5"}
        >
          <Heading
            as={"h6"}
            fontWeight={"bold"}
            color={"black"}
            fontSize={"md"}
          >
            Posts
          </Heading>
          <Box
            border={"1px"}
            borderColor={"gray.50"}
            px={"52"}
            mt={"5"}
            orientation="horizontal"
          />
        </Box>

        <Grid spacing={"10"} templateColumns="repeat(3, 1fr)" gap={6} mx={"52"}>
          {Array(1000)
            .fill()
            .map((_, i) => (
              <GridItem key={i} rounded={"md"}>
                <Image
                  rounded={"lg"}
                  src="https://bit.ly/sage-adebayo"
                  boxSize="100%"
                />
              </GridItem>
            ))}
        </Grid>
      </Box>
    </>
  );
};

export default Profile;
