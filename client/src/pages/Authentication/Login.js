import React, {useReducer} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import {Avatar, Button, TextField, FormControlLabel, Checkbox, Link, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '75vh'
    },
    paper: {
        margin: '25px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: "10px",
    },
    form: {
        width: '100%', // Fix IE 11 issue.
    },
    loginSubmit: {
        // margin: theme.spacing(3, 0, 2),
        marginTop: "2vh !important",
        float: "right"
    },
}));

const Login = () => {
    const classes = useStyles();
    const [formInput, setFormInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            email: {
                name: "email",
                value: "",
                pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                isValid: true,
                helperText: ""
            },
            password: {
                name: "password",
                value: "",
            }
        }
    );

    const inputKeys = Object.keys(formInput);

    const handleInput = (event, inputIdentifier) => {
        const input = formInput[inputIdentifier];
        input.value = event.target.value;
        setFormInput({...formInput, [inputIdentifier]: input});
        // formValidation(input, inputIdentifier);
    };

    return (
        <Box sx={{
            flexGrow: 1,
            width: "100%",
            height: "100vh",
            background: "#dddbd1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Grid container spacing={2}
                  direction="column"
                  alignItems="center"
                  width="30rem"
                  justifyContent="space-evenly">
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
                                           error={!formInput.email.isValid} helperText={formInput.email.helperText}
                                           onChange={event => handleInput(event, inputKeys[0])}

                                />
                                <TextField className={classes.form} variant="outlined" margin="normal" required
                                           name={formInput.password.name} defaultValue={formInput.password.value}
                                           label="Password" type="password" id="password" autoComplete="current-password"
                                           onChange={event => handleInput(event, inputKeys[1])}
                                />
                                <Grid container>
                                    <Grid item xs={6} style={{width: "50%"}}>
                                        <FormControlLabel style={{paddingTop: "20px", marginLeft: "-10px", float: "left", width: "100%"}}
                                                          control={<Checkbox value="remember" color="primary" />}
                                                          label="Remember me"/>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button className={classes.loginSubmit}
                                                type="submit"  variant="contained" color="primary">
                                            Sign In
                                        </Button>
                                    </Grid>
                                </Grid>

                                <Grid container style={{marginBottom: '15px', marginTop: '15px'}}>
                                    <Grid item xs={6}>
                                        <Link href="#" variant="body2" style={{textAlign: "left", display: "block", textDecoration: 'none'}}>
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Link href="/signup" variant="body2" style={{textDecoration: 'none', textAlign: "right", display: "block"}}>
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}


export default Login;
