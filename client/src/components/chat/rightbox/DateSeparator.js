import React from "react";
import {styled} from "@mui/styles";


const Separator = styled("div")({
    width: "100%",
    backgroundColor: "#b9bbbe",
    height: "1px",
    position: "relative",
    marginTop: "20px",
    marginBottom: "15px",
});

const DateLabel = styled("span")({
    backgroundColor: "#fff",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "14px",
    padding: "5px",
    borderRadius: "10px",
});

const DateSeparator = ({date}) => {
    return (
        <Separator>
            <DateLabel>{new Date(date).toDateString()}</DateLabel>
        </Separator>
    );
};

export default DateSeparator;
