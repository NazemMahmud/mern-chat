import React from "react";
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

// TODO: check chatBuddy is active or not

const ChatBoxHeader = ({ chatBuddy= {} }) => {
    const profileUrl = chatBuddy.picture || avatar;

    return (
        <Header>
            <Image src={ profileUrl } alt="display picture" />
            <Box>
                {/*{chatBuddy.name}*/}
                <Name> Buddy </Name>
                {/*{ isActiveUsers?.find(user => user.isActive === chatBuddy.isActive) ? 'Online' : 'Offline'}*/}
                <Status> Online </Status>
            </Box>
            <RightContainer>
                <Search />
                <MoreVert />
            </RightContainer>
        </Header>
    )
}

export default ChatBoxHeader;
