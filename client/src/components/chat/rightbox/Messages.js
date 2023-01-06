import React, { useState } from "react";
import { styled } from "@mui/styles";
import { Box } from "@mui/material";
import chatBGWallpaper from "../../../assets/chatBGWallpaper.png";
import Message from "./Message";
import ChatInput from "./ChatInput";
import { sendDirectMessage } from "../../../socket/socketConnection";

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

// TODO: like if today only time, || today, yesterday, day bar | Date bar
const Messages = ({chatDetails}) => {
    const [message, setMessage] = useState();

    const sendText = async (e) => {
        let code = e.keyCode || e.which || e.key || e.code; // keycode and which is deprecated for modern browser
        if(!message) return;

        if(code === 13) {
            sendDirectMessage({
                message,
                receiverId: chatDetails?.receiverId
            });

            console.log('message: ', message);
            setMessage('');
        }
    };

    return (
        <MessageWrapper>
            <Component>
                <Container>
                    <Message message={{}} />
                </Container>
            </Component>

            <ChatInput
                sendText={sendText}
                message={message}
                setValue={setMessage}/>
        </MessageWrapper>
    )
}

export default Messages;
