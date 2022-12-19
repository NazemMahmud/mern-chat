import React from 'react';
import { useDispatch } from "react-redux";
import { styled } from "@mui/styles";
import { Box, Typography  } from "@mui/material";

import avatar from "../../../assets/profile-avatar.png";
import {selectFriend} from "../../../redux/friends";



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
    fontSize: "12px",
    marginLeft: "auto !important",
    color: "#00000099",
    marginRight: "20px !important"
});

const Text = styled(Typography) ({
    display: "block",
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: "14px"
});

const Conversation = ({ user }) => {
    const dispatch = useDispatch();

    // console.log('user: ', user);
    // TODO: picture will be added later
    const imageUrl = user.picture || avatar;

    const getFriend = async () => {
        // TODO: set the selected friend info
        dispatch(selectFriend(user))
        // GET selected friends conversation data
    }

    return (
        <Component onClick={() => getFriend()}>
            <Box>
                <Image src={imageUrl} alt="user profile picture" />
            </Box>
            <Box style={{width: '100%'}}>
                <Container>
                    <Typography>{user.name}</Typography>
                    <Timestamp> time data </Timestamp>

                </Container>
                <Box>
                    <Text> Some text </Text>
                </Box>
            </Box>
        </Component>
    )
}

export default Conversation;
