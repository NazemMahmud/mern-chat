import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {styled} from "@mui/styles";
import {AppBar, IconButton, Menu, MenuItem, Toolbar} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {logout} from "../services/Authentication/auth.service";
import {handleLogout} from "../redux/authentication";


const MainNavBar = styled("div")({
    position: "absolute",
    right: "0",
    top: "0",
    height: "48px",
    borderBottom: "1px solid #00A884",
    backgroundColor: "#00A884",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 15px",
});

const NavigationBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();
    const userData = useSelector(state => state.auth.userData);

    const handleMenuClose = () => {
        setAnchorEl(null);
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

    return (
        <MainNavBar>
            {/*<AppBar>*/}
            {/*    <Toolbar></Toolbar>*/}
            {/*</AppBar>*/}
            <IconButton style={{color: "white", marginLeft: "20px"}}
                        onClick={(e) => setAnchorEl(e.currentTarget)}>
                <MoreVertIcon/>
            </IconButton>
            <Menu
                id="nav-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                PaperProps={{
                    style: {
                        transform: 'translateX(-10px) translateY(30px)',
                    }
                }}
                MenuListProps={{
                    "aria-labelledby": "nav-button",
                }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}>
                <MenuItem onClick={signOut}>Logout</MenuItem>
                <MenuItem> {userData?.username}</MenuItem>
            </Menu>
        </MainNavBar>
    )
};

export default NavigationBar;
