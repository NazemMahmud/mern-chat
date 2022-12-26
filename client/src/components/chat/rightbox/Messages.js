import React from "react";
import { styled } from "@mui/styles";
import { Box } from "@mui/material";
import chatBGWallpaper from "../../../assets/chatBGWallpaper.png";
import Message from "./Message";
import Footer from "./Footer";

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
    return (
        <MessageWrapper>
            <Component>
                <Container>
                    <Message message={{}} />
                </Container>
            </Component>

            <Footer />
        </MessageWrapper>
    )
}

export default Messages;
