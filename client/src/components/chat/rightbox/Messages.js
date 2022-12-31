import React, { useState } from "react";
import { styled } from "@mui/styles";
import { Box } from "@mui/material";
import chatBGWallpaper from "../../../assets/chatBGWallpaper.png";
import Message from "./Message";
import ChatInput from "./ChatInput";

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
const Messages = () => {
    const [value, setValue] = useState();

    const sendText = async (e) => {
        let code = e.keyCode || e.which || e.key || e.code; // keycode and which is deprecated for modern browser
        if(!value) return;

        let receiverId = '';
        let conversationId = ''; // conversation.id will get later

        if(code === 13) {
            let message = {
                senderId: '123213', // get logged user id,
                receiverId,
                conversationId: conversationId,
                type: 'text',
                text: value
            };
            console.log('message: ', message);
            setValue('');
        }
    }

    return (
        <MessageWrapper>
            <Component>
                <Container>
                    <Message message={{}} />
                </Container>
            </Component>

            <ChatInput
                sendText={sendText}
                value={value}
                setValue={setValue}/>
        </MessageWrapper>
    )
}

export default Messages;
