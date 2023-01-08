import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Box, Dialog} from "@mui/material";
import { useSelector } from "react-redux";
import {styled} from "@mui/styles";

import MessengerLayout from "../../layout/MessengerLayout";
import LeftBoxLayout from "../../components/chat/leftbox/LeftBoxLayout";
import ChatBox from "../../components/chat/rightbox/ChatBox";
import {connectWithSocketServer} from "../../socket/socketConnection";

// import NavigationBar from "../../components/NavigationBar";

const dialogStyle = {
    height: '95%',
    width: '100%',
    margin: '20px',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden'
};

const MessengerBox = styled(Box)({
    display: 'flex'
});

const MessageBox = styled(Box)({
    width: '73%',
    minWidth: '300px',
    height: '100%',
    borderLeft: '1px solid rgba(0, 0, 0, 0.14)'
});

const ChatDashboard = () => {
    const navigate = useNavigate();
    const {accessToken} = useSelector(state => state.auth);

    // redirect if not logged in
    useEffect(() => {
        const token = accessToken;
        if (!accessToken) {
            navigate("/login");
        } else {
            connectWithSocketServer(token);
        }
    }, [accessToken, navigate]);


    return (
        <MessengerLayout>
            <Dialog open={true}
                    PaperProps={{sx: dialogStyle}}
                    hideBackdrop={true}
                    maxWidth={'md'}>
                <MessengerBox>
                    {/* chat menu */}
                    <LeftBoxLayout />
                    {/*RIGHT BOX*/}
                    <MessageBox>
                        <ChatBox />
                    </MessageBox>
                </MessengerBox>
            </Dialog>
        </MessengerLayout>
    )
};

export default ChatDashboard;
