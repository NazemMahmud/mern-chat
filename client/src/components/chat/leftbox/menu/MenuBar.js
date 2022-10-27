import React, { useState } from "react";
import { styled } from "@mui/styles";
import { Box } from "@mui/material";
import { Chat as NewMessageIcon } from '@mui/icons-material';
import MenuItemDropDown from "./MenuItemDropDown";

import avatar from '../../../../assets/profile-avatar.png'
import ProfileDrawer from "../drawer/ProfileDrawer";

const Component = styled(Box) ({
    height: "44px",
    background: "#ededed",
    display: "flex",
    padding: "8px 16px",
    alignItems: "center"
});

const Image = styled('img') ({
    height: 40,
    width: 40,
    borderRadius: '50%'
});

const Wrapper = styled(Box) ({
    marginLeft: "auto",
    "& > *": {
        marginLeft: "2px",
        padding: "8px",
        color: "#000",
    },
    "& :first-child": {
        fontSize: "22px",
        marginRight: "8px",
        marginTop: "3px"
    }
});

const MenuBar = () => {

    const [openDrawer, setOpenDrawer] = useState(false);
    const toggleDrawer = () => {
        setOpenDrawer(true);
    }

    return (
        <>
            <Component>
                <Image src={avatar} onClick={toggleDrawer} />
                <Wrapper>
                    <NewMessageIcon />
                    <MenuItemDropDown />
                </Wrapper>
            </Component>
            <ProfileDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true} />
        </>
    )
}

export default MenuBar;
