import React from "react";
import {styled} from "@mui/styles";
import {Box} from "@mui/material";

const Component = styled(Box)`
    min-width: 450px;
`;

const ChatBox = () => {
    return (
        <Component>
            <p> ChatBox </p>
        </Component>
    )
}

export default ChatBox
