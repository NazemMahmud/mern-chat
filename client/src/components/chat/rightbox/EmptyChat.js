import React from "react";
import { Box, Typography, Divider } from '@mui/material';
import { styled } from "@mui/styles";
import emptyChatImage from '../../../assets/emptyChatImage.jpg';

const Component = styled(Box)({
    background:" #f8f9fa",
    padding: "30px 0",
    textAlign: "center",
    height: "100%"
});

const Container = styled(Box)({
    padding: "0 200px"
});

const Image = styled('img')({
    marginTop: 100,
    width: 400
});

const Title = styled(Typography)({
    fontSize: "32px",
    fontFamily: "inherit",
    fontWeight: 300,
    color: "#41525d",
    marginTop: "25px 0 10px 0"
});

const SubTitle = styled(Typography)({
    fontSize: "14px",
    color: "#667781",
    fontWeight: 400,
    fontFamily: "inherit",
});

const StyledDivider = styled(Divider)({
    margin: "40px 0",
    opacity: "0.4"
});

const EmptyChat = () => {

    return (
        <Component>
            <Container>
                <Image src={emptyChatImage} alt="empty" />
                <Title>WhatsApp Web</Title>
                <SubTitle>Now send and receive messages without keeping your phone online.</SubTitle>
                <SubTitle>Use WhatsApp on up to 4 linked devices and 1 phone at the same time. </SubTitle>
                <StyledDivider />
            </Container>
        </Component>
    )
}

export default EmptyChat;
