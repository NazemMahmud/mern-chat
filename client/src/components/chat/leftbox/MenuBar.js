import React from "react";
import {styled} from "@mui/styles";
import {Box} from "@mui/material";

const Component = styled(Box)`
    min-width: 450px;
`;

const MenuBar = () => {
    return (
        <Component>
            <p> Menubar </p>
        </Component>
    )
}

export default MenuBar
