import React from "react";
import {styled} from "@mui/styles";
import {Box} from "@mui/material";
import MenuBar from "./MenuBar";
import SearchConversation from "./SearchConversation";
import ConversationList from "./ConversationList";

const Component = styled(Box)`
    min-width: 450px;
`;

const Conversations = () => {
    return (
        <Component>
            <MenuBar></MenuBar>
            <SearchConversation></SearchConversation>
            <ConversationList></ConversationList>
        </Component>
    )
}

export default Conversations
