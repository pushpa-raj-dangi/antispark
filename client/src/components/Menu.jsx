import { Box, Flex, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import Logo from "../assets/logo-main.png";
import { BsBell } from "react-icons/bs";

const Menu = () => {
  return (
    <Box
      top={0}
      px={"20"}
      boxSize="full"
      position="sticky"
      zIndex={2}
      shadow={"sm"}
      bg={"white"}
      borderBottom={"1px"}
      borderColor={"gray.100"}
    >
      <Grid
        templateColumns="repeat(3, 1fr)"
        alignItems={"center"}
        py="3"
        gap="10"
      >
        <GridItem>
          <Image h={"8"} src={Logo} alt="Arti spark logo" />
        </GridItem>
        <GridItem>
          <InputGroup size="sm" rounded={"md"}>
            <InputLeftAddon bg={"gray.100"} rounded={"md"} border={0}>
              <CiSearch />
            </InputLeftAddon>
            <Input
              rounded={"md"}
              border="gray"
              bg={"gray.100"}
              focusBorderColor="transparent"
              fontWeight={"medium"}
              color="gray.600"
              placeholder="Search"
            />
          </InputGroup>
        </GridItem>
        <GridItem ml={20}>
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
              <Heading as="h5" fontSize={"15"}>
                <span>Selna Gomez</span>
              </Heading>
              <Heading as={"h6"} color="gray.500" fontSize="10">
                @selena_gomez
              </Heading>
            </Box>
            <Box ml={10}>
              <BsBell size={20} />
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Menu;
