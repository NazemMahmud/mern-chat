import React from "react";
import { styled } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import {useSelector} from "react-redux";
import DateSeparator from "./DateSeparator";
import {formatHourAndMinute} from "../../../utility/utils";


const FriendMessage = styled(Box)({
    background: "#FFFFFF",
    padding: "5px",
    maxWidth: "60%",
    width: "fit-content",
    display: "flex",
    borderRadius: "10px",
    wordBreak: "break-word",
    marginBottom: "10px"
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
    marginBottom: "10px"
});

const Text = styled(Typography)({
    fontSize: "14px !important",
    padding: "0 25px 0 5px"
});

const Time = styled(Typography)({
    fontSize: "10px !important",
    padding: "0 0px 0 5px",
    wordBreak: "keep-all",
    color: "#919191",
    marginTop: "auto !important",
});



const Message = ({ messages }) => {
    const senderId = useSelector(state => state.auth.userData.id);
    let prevMessageDate = null;

    return (
        <>
            {messages.map((message, index) => {
                    const messageDate = new Date(message.createdAt).toDateString();
                    let dateSeparator = null;
                    if (prevMessageDate !== messageDate) {
                        dateSeparator = <DateSeparator date={message.createdAt}/>;
                        prevMessageDate = messageDate;
                    }
                    return (
                        <>
                            {dateSeparator}
                            {message.sender._id === senderId ?
                                <OwnMessage key={index}>
                                    {/* TODO: check on message type, normally text, if message.type === 'file', then Image */}
                                    <Text> {message.content} </Text>
                                    <Time> {formatHourAndMinute(message.createdAt)} </Time>
                                </OwnMessage> :
                                <FriendMessage key={index}>
                                    <Text> {message.content} </Text>
                                    <Time> {formatHourAndMinute(message.createdAt)} </Time>
                                </FriendMessage>
                            }
                        </>
                    );
                })}
        </>
    );
}

export default Message;
