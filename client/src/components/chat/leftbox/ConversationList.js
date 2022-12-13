import React, { useState, useEffect, useContext }  from "react";
import { styled } from "@mui/styles";
import { Box, Divider } from "@mui/material";

// import { AccountContext } from '../../../context/AccountProvider';


//components
import Conversation from './Conversation';
import { getUsers } from "../../../services/users.service";

const Component = styled(Box)({
    overflow: "overlay",
    height: "81vh"
});

const StyledDivider = styled(Divider)({
    margin: "0 0 0 70px",
    backgroundColor: "#e9edef",
    opacity: ".6"
});

const ConversationList = ({ text }) => {
    const [users, setUsers] = useState([]);

    // const { account, socket, setActiveUsers } = useContext(AccountContext);

    useEffect(() => {
        const fetchData = async () => {
            let response = await getUsers();
            // const data = response.data.data;
            // let fiteredData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            // console.log('filtered data: ', data);
            setUsers(response.data.data);
        }
        fetchData();
    }, []);
    // }, [text]);

    // useEffect(() => {
        // socket.current.emit('addUser', account);
        // socket.current.on("getUsers", users => {
        //     setActiveUsers(users);
        // })
    // }, [account])

    return (
        // user.sub !== account.sub &&
        <Component>
            {
                users && users.map((user, index) => (

                    <>
                        <Conversation user={user} />
                        {
                            users.length !== (index + 1)  && <StyledDivider />
                        }
                    </>
                ))
            }
        </Component>
    )
};

export default ConversationList
