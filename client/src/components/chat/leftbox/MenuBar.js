import React from "react";
import {styled} from "@mui/styles";
import {Box} from "@mui/material";
import {Chat as NewMessageIcon, MoreVert} from '@mui/icons-material';

import avatar from '../../../../src/assets/profile-avatar.png'

const Component = styled(Box) ({
    height: "44px",
    background: "#ededed",
    display: "flex",
    padding: "8px 16px",
    alignItems: "center"
});

const Image = styled('img') ({
    height: 40,
    width: 40,
    borderRadius: '50%'
});

const Wrapper = styled(Box) ({
    marginLeft: "auto",
    "& > *": {
        marginLeft: "2px",
        padding: "8px",
        color: "#000",
    },
    "& :first-child": {
        fontSize: "22px",
        marginRight: "8px",
        marginTop: "3px"
    }
});

const MenuBar = () => {
    return (
        <Component>
            <Image src={avatar} />
            <Wrapper>
                <NewMessageIcon />
                <MoreVert />
            </Wrapper>
        </Component>
    )
}

export default MenuBar
