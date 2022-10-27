import React, { useState } from 'react';
import { useDispatch } from "react-redux";
// material
import { MoreVert } from '@mui/icons-material';
import { Menu, MenuItem } from '@mui/material';
import { styled } from "@mui/styles";

//components
import ProfileDrawer from "../drawer/ProfileDrawer";
// service handler
import { logout } from "../../../../services/Authentication/auth.service";
import { handleLogout } from "../../../../redux/authentication";


const MenuOption = styled(MenuItem)({
    fontSize: "14px",
    padding: "15px 60px 5px 24px",
    color: "#4A4A4A"
});

const MenuItemDropDown = () => {

    const [open, setOpen] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

    const signOut = async event => {
        event.preventDefault()
        // LATER: add a loader
        await logout()
            .then(response => {
                dispatch(handleLogout());
            })
            .catch(error => {
                console.log('error..', error);
            });
    };

    const toggleDrawer = () => {
        handleClose();
        setOpenDrawer(true);
    }

    return (
        <>
            <MoreVert onClick={handleClick} />
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuOption onClick={toggleDrawer}> Profile </MenuOption>
                <MenuOption onClick={signOut}> Logout </MenuOption>
            </Menu>
            <ProfileDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true} />
        </>
    )
};

export default MenuItemDropDown;
