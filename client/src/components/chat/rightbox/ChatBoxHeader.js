import React from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import { Search, MoreVert } from '@mui/icons-material';
import avatar from "../../../assets/profile-avatar.png";


const Header = styled(Box)({
    height: "44px",
    background: "#ededed",
    display: "flex",
    padding: "8px 16px",
    alignItems : "center"
});

const Image = styled('img')({
    width: 40,
    height: 40,
    objectFit: 'cover',
    borderRadius: '50%'
});

const Name = styled(Typography)({
    marginLeft: "12 px !important"
});

const RightContainer = styled(Box)({
    marginLeft: "auto",
    "& > svg": {
        padding: "8px",
        fontSize: "22px",
        color: "#000"
    }
});

const Status = styled(Typography)({
    fontSize: "12px !important",
    color: "rgb(0, 0, 0, 0.6)",
    marginLeft: "12px !important"
});

const ChatBoxHeader = ({ chatBuddy }) => {
    const profileUrl = chatBuddy.picture || avatar;
    const activeUsers = useSelector(state => state.friends.onlineUsers);

    return (
        <Header>
            {
                chatBuddy.name &&
                <>
                    <Image src={ profileUrl } alt="display picture" />
                    <Box>
                        <Name> { chatBuddy.name } </Name>
                        <Status> { activeUsers.find(user => user.userId === chatBuddy.id) ? 'Online' : 'Offline'} </Status>
                    </Box>
                </>
            }


            <RightContainer>
                <Search />
                <MoreVert />
            </RightContainer>
        </Header>
    )
}

export default ChatBoxHeader;
