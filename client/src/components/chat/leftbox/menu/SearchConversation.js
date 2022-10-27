import React from "react";
import { Box, InputBase } from "@mui/material";
import { styled } from "@mui/styles";
import { Search as SearchIcon } from '@mui/icons-material';

const Component = styled(Box)({
    background: "#fff",
    height: "45px",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #F2F2F2"
});

const Wrapper = styled(Box)({
    position: "relative",
    borderRadius: "10px",
    backgroundColor: "#f0f2f5",
    margin: "0 13px",
    width: "100%"
});

const Icon = styled(Box)({
    color: "#919191",
    padding: "8px",
    height: "100%",
    position: "absolute"
});

const InputField = styled(InputBase) ({
    width: "100%",
    padding: "16px",
    paddingLeft: "65px",
    fontSize: "14px",
    height: "15px"
});

const SearchConversation = ({ setText }) => {
    return (
        <Component>
            <Wrapper>
                <Icon>
                    <SearchIcon fontSize="small"/>
                </Icon>
                <InputField
                    placeholder="Search or start new chat"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e) => setText(e.target.value)}
                />
            </Wrapper>
        </Component>
    )
}

export default SearchConversation;
