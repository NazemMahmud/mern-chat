import React, {useReducer, useEffect, useRef, useState} from "react";
import {Avatar, Button, TextField, Paper, Link, Grid, Typography, Slide, Alert, Snackbar} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import AuthLayout from "../../../layout/AuthLayout";
import {registrationStyles} from "./RegistrationStyles";
import {checkDisableButton} from "../../../utility/utils";
import {registration} from "../../../services/Authentication/auth.service";
import { useNavigate } from "react-router-dom";


const Registration = () => {
    const navigate = useNavigate();
    const classes = registrationStyles(); // styling
    const [isDisabled, setIsDisabled] = useState(true);

    /** ****************** snackbar UI and actions *******************************/
    const SlideTransition = props => {
        return <Slide {...props} direction="right"/>;
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
    const [formInput, setFormInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            name: {
                name: "name",
                value: "",
                isValid: false,
                touched: false
            },
            email: {
                name: "email",
                value: "",
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                isValid: false,
                helperText: "",
                touched: false
            },
            password: {
                name: "password",
                value: "",
                isValid: false,
                touched: false
            },
            confirmPassword: {
                name: "confirm-password",
                value: "",
                isValid: false,
                helperText: "",
                touched: false
            }
        }
    );
    const inputKeys = Object.keys(formInput);

    // to enable/disable submit button
    useEffect(() => {
        setIsDisabled(checkDisableButton(formInput))
    }, [formInput])

    // password and confirm password field match?
    const passwordMatch = () => {
        const password = formInput.password.value;
        const confirm = formInput.confirmPassword.value;
        return confirm === password;
    };

    const formValidation = (input, inputIdentifier) => {
        switch (inputIdentifier) {
            case 'email':
                input.isValid = !!(formInput.email.value.match(formInput.email.pattern));
                input.helperText = (!input.isValid) ? "Invalid email address" : "";
                break;
            case 'confirmPassword':
                input.isValid = passwordMatch();
                input.helperText = (!input.isValid) ? "Password doesn't match" : "";
                break;
            case 'name':
            case 'password':
            default:
                input.isValid = !!input.value.length;
        }

        setFormInput({...formInput, [inputIdentifier]: input});
    };

    // register form: on change of an input field action
    const handleInput = (event, inputIdentifier) => {
        const input = formInput[inputIdentifier];
        input.value = event.target.value;
        input.touched = true
        formValidation(input, inputIdentifier);
    };

    // format data before submit
    const formatSubmitData = () => {
        const data = {};
        for (let loginData in formInput) {
            data[loginData] = formInput[loginData].value;
        }

        delete data['confirmPassword'];
        return data;
    }

    // sign up action
    const signUp = async event => {
        event.preventDefault();
        const formData = formatSubmitData();

        await registration(formData)
            .then(response => {
                navigate("/login");
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
                  width="30rem"
                  justifyContent="space-evenly">
                <Grid item xs={12} sm={8} md={4} >
                    <Paper elevation={6} square p={2}>
                        <div  className={classes.paper} >
                            <Avatar className={classes.avatar}>
                                <LockIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign Up
                            </Typography>
                            {/*noValidate onSubmit={register}*/}
                            <form  className={classes.form}>
                                <TextField className={classes.formInput} variant="outlined" margin="normal" required
                                           id="name" label="User Name" autoComplete="name" autoFocus
                                           name={formInput.name.name} defaultValue={formInput.name.value}
                                           error={!formInput.name.isValid && formInput.name.touched}
                                           onChange={event => handleInput(event, inputKeys[0])}

                                />
                                <TextField className={classes.formInput} variant="outlined" margin="normal" required
                                           id="email" label="Email Address" autoComplete="email"
                                           name={formInput.email.name} defaultValue={formInput.email.value}
                                           error={!formInput.email.isValid && formInput.email.touched}
                                           helperText={formInput.email.helperText}
                                           onChange={event => handleInput(event, inputKeys[1])}
                                />
                                <TextField className={classes.formInput} variant="outlined" margin="normal" required
                                           label="Password" type="password" id="password" autoComplete="current-password"
                                           name={formInput.password.name} defaultValue={formInput.password.value}
                                           error={!formInput.password.isValid && formInput.password.touched}
                                           onChange={event => handleInput(event, inputKeys[2])}
                                />
                                <TextField className={classes.formInput} variant="outlined" margin="normal" required
                                           label="Confirm Password" type="password" id="confirm-password"
                                           name={formInput.confirmPassword.name} defaultValue={formInput.confirmPassword.value}
                                           error={!formInput.confirmPassword.isValid && formInput.confirmPassword.touched}
                                           helperText={formInput.confirmPassword.helperText}
                                           onChange={event => handleInput(event, inputKeys[3])}
                                />

                                <Grid container>
                                    <Grid item xs={6} className={classes.redirect}>
                                        <Link href="/login" variant="body2" className={classes.signIn}>
                                            {"Already have an account? Sign In"}
                                        </Link>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button className={classes.registrationSubmit}
                                                disabled={isDisabled}
                                                onClick={signUp}
                                                variant="contained" color="primary">
                                            Sign Up
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </AuthLayout>
    );
}


export default Registration;
