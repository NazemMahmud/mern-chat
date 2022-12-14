import React from "react";
import { styled } from "@mui/styles";
import { Box } from "@mui/material";

import ChatBoxHeader from "./ChatBoxHeader";
import Messages from "./Messages";


const Component = styled(Box) ({
    height: "75%"
});

const ChatBox = () => {
    return (
        <Component >
            {/* TODO: need user (chat friend) info here*/}
            <ChatBoxHeader />
            {/* TODO: need both (chat friend & conversation messages) info here*/}
            <Messages />
        </Component>
    )
}

export default ChatBox
