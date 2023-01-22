import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {styled} from "@mui/styles";
import {Box} from "@mui/material";

import EmptyChatBox from "./EmptyChatBox";
import ChatBoxHeader from "./ChatBoxHeader";
import Messages from "./Messages";
import {fetchChatHistory} from "../../../socket/socketConnection";


const Component = styled(Box) ({
    height: "75%"
});


const ChatBox = () => {
    const chatBuddy = useSelector(state => state.friends.selectedFriend);
    const chatDetails = useSelector(state => state.chat.selectedChatDetails);

    useEffect(() => {
        // get conversation with chatBuddy: at least one friend is selected
        if (chatDetails) {
            fetchChatHistory({ receiverId: chatDetails.receiverId })
        }
    }, [chatDetails]);

    return (
        <Component >
            <ChatBoxHeader chatBuddy={chatBuddy} />
            { chatDetails?.receiverId ? <Messages chatDetails={chatDetails} chatBuddy={chatBuddy}/> : <EmptyChatBox /> }
        </Component>
    )
}

export default ChatBox
