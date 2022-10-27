import React, { useState } from "react";
import { styled } from "@mui/styles";
import { Box } from "@mui/material";
import MenuBar from "./menu/MenuBar";
import SearchConversation from "./menu/SearchConversation";
import ConversationList from "./ConversationList";

const Component = styled(Box) ({
    minWidth: '450px'
});

const Conversations = () => {
    const [text, setText] = useState('');

    return (
        <Component>
            <MenuBar></MenuBar>
            <SearchConversation setText={setText}></SearchConversation>
            <ConversationList></ConversationList>
        </Component>
    )
}

export default Conversations;
