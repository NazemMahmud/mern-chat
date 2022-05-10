import React, {useReducer} from 'react';
import Box from '@mui/material/Box';



const AuthLayout = (props) => {
    return (
        <Box sx={{
            flexGrow: 1,
            width: "100%",
            height: "100vh",
            background: "#dddbd1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            {props.children}
        </Box>
    );
}


export default AuthLayout;
