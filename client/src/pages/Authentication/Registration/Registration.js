import React, {useReducer, useEffect, useRef, useState} from "react";
import {Avatar, Button, TextField, Paper, Link, Grid, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import AuthLayout from "../../../layout/AuthLayout";
import {registrationStyles} from "./RegistrationStyles";
import {checkDisableButton} from "../../../utility/utils";


const Registration = () => {
    const classes = registrationStyles(); // styling
    const [isDisabled, setIsDisabled] = useState(true);

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

    /** ******************* form based action *******************************/
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
        // setFormInput({...formInput, [inputIdentifier]: input});
        formValidation(input, inputIdentifier);
    };


    // sign up action
    const signUp = async (event) => {
    //     event.preventDefault();
    //     const formData = {};
    //     for (let registerData in formInput) {
    //         formData[registerData] = formInput[registerData].value;
    //         // TODO: if required field empty, show helpertext and error valid
    //     }
    //     delete formData['confirmPassword'];
    //     delete formData['rememberMe'];
    //
    //     await signUpAction(formData);
    };


    return (
        <AuthLayout>
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
