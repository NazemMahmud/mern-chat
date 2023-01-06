import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/styles";
import { Box } from "@mui/material";

import ChatBoxHeader from "./ChatBoxHeader";
import Messages from "./Messages";
import { fetchChatHistory } from "../../../socket/socketConnection";


const Component = styled(Box) ({
    height: "75%"
});


const ChatBox = () => {
    const chatBuddy = useSelector(state => state.friends.selectedFriend);
    const chatDetails = useSelector(state => state.chat.selectedChatDetails);

    useEffect(() => {
        // get conversation with chatBuddy: at least one friend is selected
        if (chatDetails) {
            console.log('fetching chat history with: ', chatDetails);
            fetchChatHistory({ receiverId: chatDetails.receiverId })
        }
    }, [chatDetails]);

    return (
        <Component >
            <ChatBoxHeader chatBuddy={chatBuddy} />
            {/* TODO: need both (chat friend & conversation messages) info here*/}
            <Messages chatDetails={chatDetails} />
        </Component>
    )
}

export default ChatBox
