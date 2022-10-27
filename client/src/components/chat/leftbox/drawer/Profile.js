import React  from 'react';
import { Box, Typography } from "@mui/material";
import avatar from "../../../../assets/profile-avatar.png";

import { styled } from "@mui/styles";
import { useSelector } from "react-redux";


const ImageContainer = styled(Box)({
    display: "flex",
    justifyContent: "center"
});

const Image = styled('img') ({
    width: 200,
    height: 200,
    borderRadius: '50%',
    padding: '25px 0'
});

const BoxWrapper = styled(Box)({
    background: "#FFFFFF",
    padding: "12px 30px 2px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
    "& :first-child": {
        fontSize: "13px",
        color: "#009688",
        fontWeight: 200
    },
    "& :last-child": {
        margin: "14px 0",
        color: "#4A4A4A"
    }
});

const DescriptionContainer = styled(Box)({
    padding: "15px 20px 28px 30px",
    "& > p": {
        color: "#8696a0",
        fontSize: "13px"
    }
});

const Profile = () => {

    const userData = useSelector(state => state.auth.userData);

    return (
        <>
            <ImageContainer>
                <Image src={avatar} alt="displaypicture" />
            </ImageContainer>
            <BoxWrapper>
                <Typography> Your name </Typography>
                <Typography> {userData.username} </Typography>
            </BoxWrapper>
            <DescriptionContainer>
                <Typography>This is not your username or pin. This name will be visible to your Chat contacts.</Typography>
            </DescriptionContainer>
            <BoxWrapper>
                <Typography>About</Typography>
                <Typography>Eat! Sleep! Code! Repeat</Typography>
            </BoxWrapper>
        </>
    )
};

export default Profile;
