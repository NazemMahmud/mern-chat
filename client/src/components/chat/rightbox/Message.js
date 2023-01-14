import React from "react";
import { styled } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import { formatDate } from "../../../utility/utils";
import {useSelector} from "react-redux";


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



const Message = ({ messages }) => {
    // message = { content: "Lorem ipsum is a dummy text", createdAt: "2022-03-16T20:09:26.443Z" }; // cretedAt missing
    const senderId = useSelector(state => state.auth.userData.id);

    return (
        <>
            {messages.map((message, index) => (
                message.sender._id === senderId ?
                        <OwnMessage key={index}>
                            {/* TODO: check on message type, normally text, if message.type === 'file', then Image */}
                            {/*<ImageMessage message={message} />*/}
                            <Text> {message.content} </Text>
                            {/*<Time> {formatDate(message.createdAt)} </Time>*/}
                        </OwnMessage> : <FriendMessage key={index}>
                            <Text> {message.content} </Text>
                            {/*<Time> {formatDate(message.createdAt)} </Time>*/}
                        </FriendMessage>

                ))
            }
        </>
    )
}

export default Message;
