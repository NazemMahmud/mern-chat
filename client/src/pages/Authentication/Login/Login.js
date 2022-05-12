import React, {useEffect, useReducer, useState} from 'react';
import AuthLayout from "../../../layout/AuthLayout";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {
    Avatar,
    Button,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Typography,
    Snackbar,
    Slide,
    Alert
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import {loginStyles} from "./LoginStyles";
import {login} from "../../../services/Authentication/auth.service";
import {useDispatch} from "react-redux";
import {handleLogin} from "../../../redux/authentication";
import {useNavigate} from "react-router-dom";
import {checkDisableButton, getAccessToken} from "../../../utility/utils";

const Login = () => {
    const classes = loginStyles();
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [isDisabled, setIsDisabled] = useState(true);
    const [formInput, setFormInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            email: {
                name: "email",
                value: "",
                pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                isValid: false,
                helperText: "",
                touched: false
            },
            password: {
                name: "password",
                value: "",
                isValid: false,
                touched: false
            }
        }
    );

    const inputKeys = Object.keys(formInput);

    // redirect if logged in
    useEffect(() => {
        if (getAccessToken) {
            navigate("/");
        }
    }, []);

    /** ******************* snackbar UI and actions *******************************/
    const SlideTransition = props => {
        return <Slide {...props} direction="right" />;
    }

    const [snackData, setSnackData] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'right',
        message: '',
        Transition: SlideTransition,
        type: ''
    });
    const {vertical, horizontal, open, message, type} = snackData;
    const snackClose = () => {
        setSnackData({
            ...snackData,
            open: false
        })
    }

    /** ******************* form based action *******************************/
    // to enable/disable submit button
    useEffect(() => {
        setIsDisabled(checkDisableButton(formInput))
    }, [formInput])

    const formValidation = (input, inputIdentifier) => {
        if (inputIdentifier === "email") {
            input.isValid = !!(formInput.email.value.match(formInput.email.pattern));
            input.helperText = (!input.isValid) ? "Invalid email address" : "";
        }
        if (inputIdentifier === "password") {
            input.isValid = !!input.value.length;
        }

        setFormInput({...formInput, [inputIdentifier]: input});
    };

    const handleInput = (event, inputIdentifier) => {
        const input = formInput[inputIdentifier];
        input.value = event.target.value;
        input.touched = true
        formValidation(input, inputIdentifier);
    };

    const formatSubmitData = () => {
        const data = {};
        for (let loginData in formInput) {
            data[loginData] = formInput[loginData].value;
        }
        return data;
    }

    // sign up action
    const signIn = async event => {
        event.preventDefault();
        const formData = formatSubmitData()

        await login(formData)
            .then(response => {
                dispatch(handleLogin(response.data.data));
                navigate("/dashboard");
            })
            .catch(error => {
                // TODO: add a toaster
                console.log('error..', error)
                setSnackData({
                    ...snackData,
                    open: true,
                    type: 'error',
                    message: error.response.data.message
                })
            });
        // TODO: add a loader
    };

    return (
        <AuthLayout>
            <Snackbar
                anchorOrigin={{vertical, horizontal}}
                open={open}
                onClose={snackClose}
                key={vertical + horizontal}>
                <Alert severity={type}> {message}</Alert>
            </Snackbar>
            <Grid container spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  className={classes.root}>
                <Grid item xs={12} sm={12} md={12}>
                    <Paper elevation={6} square p={2}>
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LockIcon/>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign In
                            </Typography>
                            <TextField className={classes.form} variant="outlined" margin="normal" required
                                       defaultValue={formInput.email.value} name={formInput.email.name}
                                       id="email" label="Email Address" autoComplete="email" autoFocus
                                       error={!formInput.email.isValid && formInput.email.touched}
                                       helperText={formInput.email.helperText}
                                       onChange={event => handleInput(event, inputKeys[0])}

                            />
                            <TextField className={classes.form} variant="outlined" margin="normal" required
                                       name={formInput.password.name} defaultValue={formInput.password.value}
                                       label="Password" type="password" id="password" autoComplete="current-password"
                                       onChange={event => handleInput(event, inputKeys[1])}
                            />

                            <Grid container>
                                <Grid item xs={6} className={classes.rememberMeWrapper}>
                                    <FormControlLabel className={classes.rememberMe}
                                                      control={<Checkbox value="remember" color="primary"/>}
                                                      label="Remember me"/>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button className={classes.loginSubmit}
                                            disabled={isDisabled}
                                            onClick={signIn} variant="contained" color="primary">
                                        Sign In
                                    </Button>
                                </Grid>
                            </Grid>

                            <Grid container className={classes.redirect}>
                                <Grid item xs={6}>
                                    <Link href="#" variant="body2" className={classes.forgetPassword}>
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item xs={6}>
                                    <Link href="/register" variant="body2" className={classes.signUp}>
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </AuthLayout>
    );
}


export default Login;
