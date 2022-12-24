import React, { useState } from 'react';
import { Drawer, Box, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { styled } from "@mui/styles";

// custom component
import Profile from './Profile';

const Header = styled(Box)({
  background: "#008069",
  height: "107px",
  color: "#FFFFFF",
  display: "flex",
  "& > svg, & > p": {
      marginTop: "auto",
      padding: "15px",
      fontWeight: 600
  }
});

const Component = styled(Box)({
  background: "#ededed",
  height: "85%"
});

const Text = styled(Typography)({
    fontSize: "18px"
});

const drawerStyle = {
    left: 20,
    top: 17,
    height: '95%',
    width: '30%',
    boxShadow: 'none'
}

const ProfileDrawer = ({ open, setOpen, profile }) => {

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Drawer
            open={open}
            onClose={handleClose}
            PaperProps={{ sx: drawerStyle }}
            style={{ zIndex: 1500 }}
        >
            <Header>
                <ArrowBack onClick={() => setOpen(false)} />
                <Text>Profile</Text>
            </Header>
            <Component>
                <Profile />
            </Component>
        </Drawer>
    );
};

export default ProfileDrawer;
