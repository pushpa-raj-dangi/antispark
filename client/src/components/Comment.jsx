import {
  Flex,
  Image,
  Text,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";
const Comment = () => {
  return (
    <>
      <Flex
        align="center"
        bg={"gray.50"}
        rounded="md"
        justify="space-between"
        mt="1rem"
      >
        <Flex align="center">
          <Image
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="Jese Leos"
            borderRadius="full"
            boxSize="40px"
            mr="1rem"
          />
          <Flex direction="row" alignItems={"center"}>
            <Text fontSize="md" fontWeight="medium" color={"gray.600"}>
              Jese Leos
            </Text>
            <Text fontSize="xs" fontWeight={"medium"} ml={"2"} color="gray.500">
              Feb. 12, 2022
            </Text>
          </Flex>
        </Flex>

        <Menu>
          <MenuButton
            as={IconButton}
            size="md"
            icon={<FiMoreVertical size={20} />}
            colorScheme="gray"
            variant="ghost"
            aria-label="Comment settings"
          />
          <MenuList>
            <MenuItem>Option 1</MenuItem>
            <MenuItem>Option 2</MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <Flex px={"16"} py="2">
        <Text color={"teal"}>
          Very straight-to-point article. Really worth time reading. Thank you!
          But tools are just the instruments for the UX designers.
        </Text>
      </Flex>
    </>
  );
};

export default Comment;
