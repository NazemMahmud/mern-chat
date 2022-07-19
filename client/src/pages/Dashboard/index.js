import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {getAccessToken} from "../../utility/utils";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {Button, Link, Typography} from "@mui/material";
import {logout} from "../../services/Authentication/auth.service";
import {handleLogout} from "../../redux/authentication";
import {useDispatch} from "react-redux";

const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // redirect if not logged in
    useEffect(() => {
        if (!getAccessToken) {
            navigate("/login");
        }
    }, [navigate]);

    const signOut = async event => {
        event.preventDefault()
        // LATER: add a loader
        await logout()
            .then(response => {
                dispatch(handleLogout())
                navigate('/login')
            })
            .catch(error => {
                console.log('error..', error)
            });
    }

    return (
        <Grid container spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center">
            <Grid item xs={12} sm={12} md={12}>
                <Paper elevation={6} square p={2}>
                    <div>
                        <Typography component="h5" variant="h5">
                            Dashboard page :D
                        </Typography>



                        <Grid container>
                            <Grid item xs={6}>
                                <Button onClick={signOut} variant="contained" color="primary">
                                    Log out
                                </Button>
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item xs={6}>
                                <Link href="#" variant="body2" onClick={signOut}>
                                    Logout
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Dashboard;
