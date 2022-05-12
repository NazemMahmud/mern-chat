import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {getAccessToken} from "../../utility/utils";

const Dashboard = () => {
    const navigate = useNavigate();
    // redirect if not logged in
    useEffect(() => {
        if (!getAccessToken) {
            navigate("/login");
        }
    }, []);


    return (
        <div>
            <h3>Dashboard page :D </h3>
        </div>
    )
}

export default Dashboard;
