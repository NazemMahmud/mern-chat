import React, { useState, useEffect }  from "react";
import {useDispatch, useSelector} from "react-redux";
import { styled } from "@mui/styles";
import { Box, Divider } from "@mui/material";


//components
import FriendItem from './FriendItem';
import { getUsers } from "../../../services/users.service";
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
            let response = await getUsers();
            const data = response.data.data;
            dispatch(setFriendsList(data));
            setUsers(data);
        }

        fetchData();
    }, []);

    return (
        <Component>
            {
                users && users.map((user, index) => (
                    user.id !== account.id &&
                    <>
                        <FriendItem user={user} />
                        {
                            users.length !== (index + 1)  && <StyledDivider />
                        }
                    </>
                ))
            }
        </Component>
    )
};

export default FriendsList;
