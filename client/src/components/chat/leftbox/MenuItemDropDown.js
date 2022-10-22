import React, { useState, useContext } from 'react';
import { MoreVert } from '@mui/icons-material';
import { Menu, MenuItem } from '@mui/material';
import { styled } from "@mui/styles";

// import { googleLogout } from '@react-oauth/google';
// import { AccountContext } from '../../../context/AccountProvider';
// import { UserContext } from '../../../context/UserProvider';

// import { clientId } from '../../../constants/data';

//components
// import InfoDrawer from '../../drawer/Drawer';

const MenuOption = styled(MenuItem)({
    fontSize: "14px",
    padding: "15px 60px 5px 24px",
    color: "#4A4A4A"
});

// const Logout = styled(googleLogout)({
//     border: "none",
//     boxShadow: "none"
// });

const MenuItemDropDown = () => {

    const [open, setOpen] = useState(false);
    // const [openDrawer, setOpenDrawer] = useState(false);

    // const { setAccount, setShowloginButton, showlogoutButton, setShowlogoutButton } = useContext(AccountContext);
    // const { setPerson } = useContext(UserContext);


    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

    // const onSignoutSuccess = () => {
    //     alert("You have been logged out successfully");
    //     console.clear();
        // setShowlogoutButton(false);
        // setShowloginButton(true);
        // setAccount('');
        // setPerson({});
    // };

    // const toggleDrawer = () => {
    //     setOpenDrawer(true);
    // }


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
                {/*onClick={() => { handleClose(); toggleDrawer()}}*/}
                <MenuOption> Profile </MenuOption>
                <MenuOption> Settings </MenuOption>
                {/*<MenuOption onClick={() => { handleClose(); }}>*/}
                    {/* { showlogoutButton ?
                    <Logout
                        clientId={clientId}
                        buttonText="Logout"
                        onLogoutSuccess={onSignoutSuccess}
                    >
                    </Logout> : null
                } */}
                {/*</MenuOption>*/}
            </Menu>
            {/*<InfoDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true} />*/}
        </>
    )
}

export default MenuItemDropDown;
