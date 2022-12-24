import React, { useState } from "react";
import { styled } from "@mui/styles";
import { Box } from "@mui/material";
import MenuBar from "./menu/MenuBar";
import SearchConversation from "./menu/SearchConversation";
import FriendsList from "./FriendsList";

const Component = styled(Box) ({
    minWidth: '450px'
});

const LeftBoxLayout = () => {
    const [text, setText] = useState('');

    return (
        <Component>
            <MenuBar></MenuBar>
            <SearchConversation setText={setText}></SearchConversation>
            <FriendsList></FriendsList>
        </Component>
    )
}

export default LeftBoxLayout;
