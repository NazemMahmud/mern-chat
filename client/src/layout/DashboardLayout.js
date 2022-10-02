import React from 'react';
import {styled} from "@mui/styles";

const DashBoardContainer = styled('div') ({
    width: "100%",
    height: "100vh",
    // display: "flex",
});

const DashboardLayout = (props) => {
    return (
        <DashBoardContainer>
            {props.children}
        </DashBoardContainer>
    );
}


export default DashboardLayout;
