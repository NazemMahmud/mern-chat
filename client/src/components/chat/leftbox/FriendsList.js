import React, { useState, useEffect }  from "react";
import { useDispatch } from "react-redux";
import { styled } from "@mui/styles";
import { Box, Divider } from "@mui/material";


//components
import FriendItem from './FriendItem';
import {getUsersWithLastConversationMessage} from "../../../services/users.service";
import { setFriendsList } from "../../../redux/friends";
import { getUserData } from "../../../utility/utils";

const Component = styled(Box)({
    overflow: "overlay",
    height: "81vh"
});

const StyledDivider = styled(Divider)({
    margin: "0 0 0 70px",
    backgroundColor: "#e9edef",
    opacity: ".6"
});

const FriendsList = () => {
    const [users, setUsers] = useState([]);
    const dispatch = useDispatch();
    const account = getUserData();


    useEffect(() => {
        const fetchData = async () => {
            let response = await getUsersWithLastConversationMessage();
            setUsersList(response.data.data);
            setUsers(response.data.data);
        }

        fetchData();
    }, []);

    const setUsersList = (data) => {
        const friends = [];
        data.forEach(item => {
            friends.push({ _id: item._id, id: item._id, name: item.name})
        });
        dispatch(setFriendsList(users));
    }

    return (
        <Component>
            {
                users && users.map((user, index) => (
                    user.id !== account.id &&
                    <div key={user.id}>
                        <FriendItem user={user} />
                        {
                            users.length !== (index + 1)  && <StyledDivider />
                        }
                    </div>
                ))
            }
        </Component>
    )
};

export default FriendsList;
