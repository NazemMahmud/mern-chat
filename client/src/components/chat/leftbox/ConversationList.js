import React from "react";
import {styled} from "@mui/styles";
import {Box} from "@mui/material";

const Component = styled(Box)`
    min-width: 450px;
`;

const ConversationList = () => {
    return (
        <Component>
            <p> Conversation list </p>
        </Component>
    )
}

export default ConversationList
