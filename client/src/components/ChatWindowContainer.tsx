import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import ChatWindow from "./ChatWindow";
const ChatWindowContainer = ({ chatData, removeChatWindow }) => {
  console.log(chatData);

  return (
    <>
      <Box
        position={"fixed"}
        right="32"
        zIndex="1"
        display={"inline-flex"}
        justifyContent={"flex-end"}
        bottom="0"
        gap={"2"}
        alignItems="flex-end"
      >
        {chatData?.map((x) => (
          <Box key={x} onClick={() => removeChatWindow(x)}>
            <ChatWindow />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default ChatWindowContainer;
