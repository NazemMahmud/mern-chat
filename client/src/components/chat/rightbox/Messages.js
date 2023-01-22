import React, { useState } from "react";
import {useSelector} from "react-redux";
import { styled } from "@mui/styles";
import {Box, Typography} from "@mui/material";
import chatBGWallpaper from "../../../assets/chatBGWallpaper.png";
import Message from "./Message";
import ChatInput from "./ChatInput";
import { sendDirectMessage } from "../../../socket/socketConnection";
import gif from "../../../assets/dots.gif";

const MessageWrapper = styled(Box)({
    backgroundImage: `url(${chatBGWallpaper})`,
    backgroundSize: "50%"
});

const Component = styled(Box)({
    height: "80vh",
    overflowY: "scroll"
});

// TODO: message should starts from bottom
const Container = styled(Box)({
    padding: "4px 10px"
});


const Typing = styled("div")({
    display: "flex",
    marginLeft: "auto !important",
    position: "absolute",
    top: "87%",
    left: "90%",
});

const Messages = ({chatDetails, chatBuddy}) => {
    const [message, setMessage] = useState();
    const messages = useSelector(state => state.chat.messages);

    const sendText = async (e) => {
        let code = e.keyCode || e.which || e.key || e.code; // keycode and which is deprecated for modern browser
        if(!message) return;

        if(code === 13) {
            sendDirectMessage({
                message,
                receiverId: chatDetails?.receiverId
            });
            setMessage('');
        }
    };

    return (
        <MessageWrapper>
            <Component>
                <Container>
                    <Message messages={messages} />
                </Container>
                <Typing>
                    {(chatDetails?.typing && chatDetails?.receiverId == chatBuddy._id) && (
                        <Typography>
                            <p style={{float: "left", marginTop: "10px", fontSize: "17px"}}> typing </p>
                            <div>
                                <img
                                    src={gif}
                                    alt="dots"
                                    style={{
                                        height: "50%",
                                        width: "40%",
                                        marginLeft: "3px",
                                    }}
                                />
                            </div>
                        </Typography>
                    )}
                </Typing>
            </Component>

            <ChatInput
                sendText={sendText}
                message={message}
                chatDetails={chatDetails}
                setValue={setMessage}/>
        </MessageWrapper>
    )
}

export default Messages;
