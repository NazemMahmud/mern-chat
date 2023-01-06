import React, { useEffect } from "react";
import { styled } from "@mui/styles";
import { Box, InputBase } from "@mui/material";
import { EmojiEmotions, AttachFile, Mic } from '@mui/icons-material';


const Component = styled(Box)({
    height: "55px",
    background: "#ededed",
    display: "flex",
    alignItems : "center",
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


const ChatInput = ({ sendText, message, setValue }) => {

        const onFileChange = (e) => {
            // TODO: later
        }

    return (
        <Component>
            <EmojiEmotions />
            <label htmlFor="fileInput">
                <ClipIcon />
            </label>
            <input
                type='file'
                id="fileInput"
                style={{ display: 'none' }}
                onChange={(e) => onFileChange(e)}
            />

            <Search>
                <InputField
                    placeholder="Type your message"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyPress={(e) => sendText(e)}
                    value={message}
                />
            </Search>
            <Mic />
        </Component>
    )
}

export default ChatInput;
