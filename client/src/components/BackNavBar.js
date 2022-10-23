import React from "react";
import { styled } from "@mui/styles";

const MainNavBar = styled("div")({
    position: "absolute",
    right: "0",
    top: "0",
    height: "48px",
    borderBottom: "1px solid #00A884",
    backgroundColor: "#00A884",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 15px",
});

const BackNavBar = () => {

    return (
        <MainNavBar></MainNavBar>
    )
};

export default BackNavBar;
