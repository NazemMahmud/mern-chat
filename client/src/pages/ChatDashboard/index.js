import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {Box, Button, Dialog, Link, Typography} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {styled} from "@mui/styles";

import MessengerLayout from "../../layout/MessengerLayout";
import Conversations from "../../components/chat/leftbox/Conversations";
import ChatBox from "../../components/chat/rightbox/ChatBox";
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

const MessengerBox = styled(Box)`
    display: flex;
`;


const MessageBox = styled(Box)`
    width: 73%;
    min-width: 300px;
    height: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

const ChatDashboard = () => {
    const navigate = useNavigate();
    const { accessToken } = useSelector(state => state.auth);

    // redirect if not logged in
    useEffect(() => {
        if (!accessToken) {
            navigate("/login");
        }
    }, [accessToken, navigate]);



    return (
        <MessengerLayout>
            <Dialog open={true}
                    PaperProps={{ sx: dialogStyle }}
                    hideBackdrop={true}
            >
                <MessengerBox>
                    {/*LEFT BOX*/}
                    <Conversations></Conversations>
                    {/*RIGHT BOX*/}
                    <MessageBox>
                        <ChatBox></ChatBox>
                    </MessageBox>
                </MessengerBox>

                Chat board
            </Dialog>
        </MessengerLayout>

        // <Grid container spacing={0}
        //       direction="column"
        //       alignItems="center"
        //       justifyContent="center">
        //     <Grid item xs={12} sm={12} md={12}>
        //         <Paper elevation={6} square p={2}>
        //             <div>
        //                 <Typography component="h5" variant="h5">
        //                     Dashboard page :D
        //                 </Typography>

        //                 <Grid container>
        //                     <Grid item xs={6}>
        //                         <Button onClick={signOut} variant="contained" color="primary">
        //                             Log out
        //                         </Button>
        //                     </Grid>
        //                 </Grid>
        //
        //                 <Grid container>
        //                     <Grid item xs={6}>
        //                         <Link href="#" variant="body2" onClick={signOut}>
        //                             Logout
        //                         </Link>
        //                     </Grid>
        //                 </Grid>
        //             </div>
        //         </Paper>
        //     </Grid>
        // </Grid>
    )
}

export default ChatDashboard;
