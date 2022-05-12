import React, {useEffect, useReducer, useState} from 'react';
import AuthLayout from "../../../layout/AuthLayout";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Avatar, Button, TextField, FormControlLabel, Checkbox, Link, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import {loginStyles} from "./LoginStyles";


const Login = () => {
    const classes = loginStyles();
    const [isDisabled, setIsDisabled] = useState(true);
    const [formInput, setFormInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
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

    /** ******************* form based action *******************************/

    useEffect(() => {
        let disable = false
        console.log(formInput);
        for(const elem in formInput) {
            console.log(formInput[elem]);
            disable = !formInput[elem].isValid;
            if (disable) {
                break;
            }
        }
        console.log('disable: ', disable);
        setIsDisabled(disable);
    }, [formInput]);

    const formValidation = (input, inputIdentifier) => {
        if(inputIdentifier === "email") {
            input.isValid = !!(formInput.email.value.match(formInput.email.pattern));
            input.helperText = (!input.isValid) ? "Invalid email address" : "";
        }
        if(inputIdentifier === "password") {
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

    return (
        <AuthLayout>
            <Grid container spacing={2}
                  direction="column"
                  alignItems="center"
                  width="30rem"
                  justifyContent="space-evenly"
                  className={classes.root}>
                <Grid item xs={8} sm={8} md={4}>
                    <Paper elevation={6} square p={2}>
                        <div  className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LockIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign In
                            </Typography>
                            {/*noValidate purpose */}
                            {/*onSubmit={signin}*/}
                            <form noValidate >
                                <TextField className={classes.form} variant="outlined" margin="normal" required
                                           defaultValue={formInput.email.value} name={formInput.email.name}
                                           id="email" label="Email Address"  autoComplete="email" autoFocus
                                           error={!formInput.email.isValid && formInput.email.touched} helperText={formInput.email.helperText}
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
                                                          control={<Checkbox value="remember" color="primary" />}
                                                          label="Remember me"/>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button className={classes.loginSubmit} disabled={isDisabled}
                                                type="submit"  variant="contained" color="primary">
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
                                        <Link href="/signup" variant="body2" className={classes.signUp}>
                                            {"Don't have an account? Sign Up"}
                                        </Link>
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


export default Login;
