import React from "react";
import {styled} from "@mui/styles";
import {Box} from "@mui/material";

const Component = styled(Box)`
    min-width: 450px;
`;

const EmptyChatBox = () => {
    return (
        <Component>
            <p> EmptyChatBox </p>
        </Component>
    )
}

export default EmptyChatBox
