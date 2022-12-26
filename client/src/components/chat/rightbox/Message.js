import React from "react";
import { styled } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import { formatDate } from "../../../utility/utils";


const FriendMessage = styled(Box)({
    background: "#FFFFFF",
    padding: "5px",
    maxWidth: "60%",
    width: "fit-content",
    display: "flex",
    borderRadius: "10px",
    wordBreak: "break-word",
});

const OwnMessage = styled(Box)({
    background: "#dcf8c6",
    padding: "5px",
    maxWidth: "60%",
    width: "fit-content",
    marginLeft: "auto",
    display: "flex",
    borderRadius: "10px",
    wordBreak: "break-word",
});

const Text = styled(Typography)({
    fontSize: "14px",
    padding: "0 25px 0 5px"
});

const Time = styled(Typography)({
    fontSize: "10px",
    padding: "0 25px 0 5px",
    wordBreak: "keep-all",
    color: "#919191",
    marginTop: "auto",
});



const Message = ({ message = {} }) => {
    // user account info from localstorage
    message = { text: "Lorem ipsum is a dummy text", createdAt: "2022-03-16T20:09:26.443Z" };
    return (
        <>
            {/*TODO: if storage user id === message senderId, then own message*/}
            <OwnMessage>
                {/* TODO: check on message type, normally text, if message.type === 'file', then Image */}
                {/*<ImageMessage message={message} />*/}
                <Text> { message.text } </Text>
                <Time> { formatDate(message.createdAt) } </Time>
            </OwnMessage>

            {/*TODO: same as above*/}

            <FriendMessage>
                <Text> { message.text} </Text>
                <Time> { formatDate(message.createdAt) } </Time>
            </FriendMessage>
        </>
    )
}

export default Message;
