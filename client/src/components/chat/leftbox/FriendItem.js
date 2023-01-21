import React from 'react';
import { useDispatch } from "react-redux";
import { styled } from "@mui/styles";
import { Box, Typography  } from "@mui/material";

import avatar from "../../../assets/profile-avatar.png";
import { setChatFriend } from "../../../redux/friends";
import {setMessages, setSelectedChatDetails} from "../../../redux/chat";
import {formatDateTime, truncateString} from "../../../utility/utils";


const Component = styled(Box)({
    minWidth: "450px",
    height: "45px",
    display: "flex",
    padding: "13px 0",
    cursor: "pointer",
});

const Image = styled('img') ({
    width: 50,
    height: 50,
    objectFit: 'cover',
    borderRadius: '50%',
    padding: '0 14px'
});

const Container = styled(Box) ({
    display: "flex"
});

const Timestamp = styled(Typography) ({
    fontSize: "12px !important",
    marginLeft: "auto !important",
    color: "#00000099",
    marginRight: "20px !important"
});

const Text = styled(Typography) ({
    display: "block",
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: "14px"
});

const FriendItem = ({ user }) => {
    const dispatch = useDispatch();
    // TODO: picture will be added later
    const imageUrl = user.picture || avatar;

    const setInitialChatDetails = async () => {
        dispatch(setChatFriend(user));
        dispatch(setSelectedChatDetails({ receiverId: user._id, receiverName: user.name}));
        dispatch(setMessages([]));
    }

    return (
        <Component onClick={() => setInitialChatDetails()}>
            <Box>
                <Image src={imageUrl} alt="user profile picture" />
            </Box>
            <Box style={{width: '100%'}}>
                <Container>
                    <Typography> { user.name } </Typography>
                    {/* 3 format,  dd/mm/yyyy, Day, time: h:m AM/PM */}
                    {user.conversation && <Timestamp> { formatDateTime(user.conversation.createdAt)} </Timestamp> }
                </Container>
                <Box>
                    {user.conversation && <Text> { truncateString(user.conversation.content, 40)} </Text> }
                </Box>
            </Box>
        </Component>
    )
}

export default FriendItem;
