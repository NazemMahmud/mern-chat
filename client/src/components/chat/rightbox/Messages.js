import React from "react";
import { styled } from "@mui/styles";
import { Box } from "@mui/material";
import chatBGWallpaper from "../../../assets/chatBGWallpaper.png";
import Footer from "./Footer";

const MessageWrapper = styled(Box)({
    backgroundImage: `url(${chatBGWallpaper})`,
    backgroundSize: "50%"
});

const Component = styled(Box)({
    height: "80vh",
    overflowY: "scroll"
});

const Container = styled(Box)({
    padding: "1px 80px"
});


const Messages = () => {
    return (
        <MessageWrapper>
            <Component>
                {/*        <Container>*/}
                {/*            /!*<Message message={message} />*!/*/}
                {/*        </Container>*/}

            </Component>

            <Footer />
        </MessageWrapper>
    )
}

export default Messages;
