import React from "react";
import {styled} from "@mui/styles";
import {Box} from "@mui/material";

const Component = styled(Box)`
    min-width: 450px;
`;

const SearchConversation = () => {
    return (
        <Component>
            <p> Search Conversation </p>
        </Component>
    )
}

export default SearchConversation
