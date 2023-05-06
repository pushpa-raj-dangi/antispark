import { Flex, Box, Heading, Image, Textarea, Divider } from "@chakra-ui/react";
import { TbPhotoPlus } from "react-icons/tb";
import { FaPaintBrush } from "react-icons/fa";

const Create = () => {
  return (
    <Flex p="4" gap={"5"} placeItems="center" alignItems={"center"}>
      <Box>
        <Image
          rounded={"md"}
          w={"20"}
          border="0"
          h={"14"}
          objectPosition="center"
          objectFit="cover"
          mr={2}
          src="https://randomuser.me/api/portraits/men/85.jpg"
        />
      </Box>
      <Box>
        <Textarea
          w="full"
          border={"0"}
          p={"0"}
          _hover={{ border: "0" }}
          focusBorderColor={"white"}
          borderColor={"white"}
          _focus={{ border: "0" }}
          cols="100"
          rows="1"
          placeholder="Share or create art"
        />
        <Divider my={"3"} />
        <Flex gap={"10"}>
          <Box display={"flex"} _hover={{ cursor: "pointer" }}>
            <TbPhotoPlus cursor={"pointer"} size={20} color="rgb(83 112 255)" />
            <Heading
              as={"span"}
              fontWeight="medium"
              color="gray.600"
              pl={"1"}
              size="xs"
            >
              Art
            </Heading>
          </Box>
          <Box display={"flex"} _hover={{ cursor: "pointer" }}>
            <FaPaintBrush
              cursor={"pointer"}
              size={20}
              color="rgb(83 112 255)"
            />
            <Heading
              as={"span"}
              fontWeight="medium"
              color="gray.600"
              pl={"1"}
              size="xs"
            >
              Draw
            </Heading>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Create;
