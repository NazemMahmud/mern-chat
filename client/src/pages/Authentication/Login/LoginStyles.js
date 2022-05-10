import { makeStyles } from '@mui/styles';

const loginStyles = makeStyles((theme) => ({
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
        marginTop: "2vh !important",
        float: "right"
    },
    rememberMeWrapper: {
        width: '50%'
    },
    rememberMe: {
        paddingTop: "20px",
        marginLeft: "-10px",
        float: "left",
        width: "100%"
    },
    redirect: {
        marginBottom: '15px',
        marginTop: '15px'
    },
    forgetPassword: {
        textAlign: "left", display: "block", textDecoration: 'none'
    },
    signUp: {
        textDecoration: 'none', textAlign: "right", display: "block"
    }
}));


export {loginStyles};
