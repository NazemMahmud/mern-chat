import React from 'react';
import {styled} from "@mui/styles";
import NavigationBar from "../components/NavigationBar";

const MessengerContainer = styled('div') ({
    width: '100%',
    height: '100vh',
    background: '#DCDCDC',
    display: "flex",
});

const MessengerLayout = (props) => {
    return (
        <MessengerContainer>
            <NavigationBar />
            {props.children}
        </MessengerContainer>
    );
}


export default MessengerLayout;
