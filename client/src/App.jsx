import LeftSidebar from "./components/LeftSidebar";
import "./App.css";
import Content from "./components/Content";
import RightSidebar from "./components/RightSidebar";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Menu from "./components/Menu";
import LoginRegister from "./components/LoginRegister";
function App() {
  return (
    // <Box bg={"#f4f4f4"}>
    //   <Menu />

    //   <Grid mx={"36"} gap="10" templateColumns="repeat(7,1fr)">
    //     <GridItem colSpan={1}>
    //       <LeftSidebar />
    //     </GridItem>
    //     <GridItem colSpan={4}>
    //       <Content />
    //     </GridItem>
    //     <GridItem colSpan={2}>
    //       <RightSidebar />
    //     </GridItem>
    //   </Grid>
    // </Box>
    <LoginRegister />
  );
}

export default App;
