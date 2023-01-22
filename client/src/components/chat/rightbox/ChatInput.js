import React from "react";
import {styled} from "@mui/styles";
import {Box, InputBase} from "@mui/material";
import {EmojiEmotions, AttachFile, Mic} from '@mui/icons-material';
import {notifyTyping} from "../../../socket/socketConnection";

const Component = styled(Box)({
    height: "55px",
    background: "#ededed",
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "0 15px",
    "&  > *": {
        margin: "5px",
        color: "#919191"
    }

});

const Search = styled(Box)({
    borderRadius: "18px",
    backgroundColor: "#FFFFFF",
    width: "calc(94% - 100px)"
});

const InputField = styled(InputBase)({
    width: "100%",
    padding: "20px",
    paddingLeft: "25px",
    fontSze: "14px",
    height: "20px",
});

const ClipIcon = styled(AttachFile)({
    transform: 'rotate(40deg)'
});


const ChatInput = ({sendText, message, chatDetails, setValue}) => {

    const onFileChange = (e) => {
        // TODO: later
    }

    const handleChange = (event) => {
        setValue(event.target.value)
        notifyTyping(chatDetails?.receiverId, event.target.value.length > 0)
    };

    const handleBlur = (event) => {
        notifyTyping(chatDetails?.receiverId, false)
    }

    return (
        <Component>
            <EmojiEmotions/>
            <label htmlFor="fileInput">
                <ClipIcon/>
            </label>
            <input
                type='file'
                id="fileInput"
                style={{display: 'none'}}
                onChange={(e) => onFileChange(e)}
            />

            <Search>
                <InputField
                    placeholder="Type your message"
                    inputProps={{'aria-label': 'search'}}
                    onKeyPress={(e) => sendText(e)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={message}
                />
            </Search>
            <Mic/>
        </Component>
    )
}

export default ChatInput;
