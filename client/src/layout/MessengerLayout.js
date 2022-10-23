import React from 'react';
import { styled } from "@mui/styles";
import BackNavBar from "../components/BackNavBar";

const MessengerContainer = styled('div') ({
    width: '100%',
    height: '100vh',
    background: '#DCDCDC',
    display: "flex",
});

const MessengerLayout = (props) => {
    return (
        <MessengerContainer>
            <BackNavBar />
            {props.children}
        </MessengerContainer>
    );
}


export default MessengerLayout;
