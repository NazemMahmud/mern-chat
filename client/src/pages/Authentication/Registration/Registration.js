import React, {useReducer, useEffect, useRef} from "react";
import {Avatar, Button, TextField, Paper, Link, Grid, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import AuthLayout from "../../../layout/AuthLayout";
import {registrationStyles} from "./RegistrationStyles";


const Registration = () => {
    const classes = registrationStyles(); // styling

    const [formInput, setFormInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            name: {
                name: "name",
                value: "",
            },
            email: {
                name: "email",
                value: "",
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                isValid: true,
                helperText: ""
            },
            password: {
                name: "password",
                value: "",
            },
            confirmPassword: {
                name: "confirm-password",
                value: "",
                isValid: true,
                helperText: ""
            },
            rememberMe: {
                name: "remember",
                value: false
            },
        }
    );
    const inputKeys = Object.keys(formInput);

    // register form: on change of an input field action
    const handleInput = (event, inputIdentifier) => {
        const input = formInput[inputIdentifier];
        input.value = ( event.target.name === "remember") ? (!!(event.target.checked)) : event.target.value;
        setFormInput({...formInput, [inputIdentifier]: input});
        // formValidation(input, inputIdentifier);
    };


    return (
        <AuthLayout>
            <Grid container spacing={0}
                  direction="column"
                  alignItems="center"
                  width="30rem"
                  justifyContent="space-evenly"
                  className={classes.root} >
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
                                           onChange={event => handleInput(event, inputKeys[0])}

                                />
                                <TextField className={classes.formInput} variant="outlined" margin="normal" required
                                           id="email" label="Email Address" autoComplete="email"
                                           name={formInput.email.name} defaultValue={formInput.email.value}
                                           error={!formInput.email.isValid} helperText={formInput.email.helperText}
                                           onChange={event => handleInput(event, inputKeys[1])}
                                />
                                <TextField className={classes.formInput} variant="outlined" margin="normal" required
                                           label="Password" type="password" id="password" autoComplete="current-password"
                                           name={formInput.password.name} defaultValue={formInput.password.value}
                                           onChange={event => handleInput(event, inputKeys[2])}
                                />
                                <TextField className={classes.formInput} variant="outlined" margin="normal" required
                                           label="Confirm Password" type="password" id="confirm-password"
                                           name={formInput.confirmPassword.name} defaultValue={formInput.confirmPassword.value}
                                           error={!formInput.confirmPassword.isValid} helperText={formInput.confirmPassword.helperText}
                                           onChange={event => handleInput(event, inputKeys[3])}
                                />

                                {/*<TextField className={classes.form} variant="outlined" margin="normal" required*/}
                                {/*           defaultValue={formInput.email.value} name={formInput.email.name}*/}
                                {/*           id="email" label="Email Address"  autoComplete="email" autoFocus*/}
                                {/*           error={!formInput.email.isValid && formInput.email.touched} helperText={formInput.email.helperText}*/}
                                {/*           onChange={event => handleInput(event, inputKeys[0])}*/}

                                {/*/>*/}
                                {/*<TextField className={classes.form} variant="outlined" margin="normal" required*/}
                                {/*           name={formInput.password.name} defaultValue={formInput.password.value}*/}
                                {/*           label="Password" type="password" id="password" autoComplete="current-password"*/}
                                {/*           onChange={event => handleInput(event, inputKeys[1])}*/}
                                {/*/>*/}

                                <Grid container>
                                    <Grid item xs={6} className={classes.redirect}>
                                        <Link href="/login" variant="body2" className={classes.signIn}>
                                            {"Already have an account? Sign In"}
                                        </Link>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button className={classes.registrationSubmit}
                                                type="submit"  variant="contained" color="primary">
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
