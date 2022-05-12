import { makeStyles } from '@mui/styles';

const loginStyles = makeStyles(() => ({
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
        textAlign: "left", display: "block", textDecoration: 'none !important'
    },
    signUp: {
        textDecoration: 'none !important', textAlign: "right", display: "block"
    }
}));


export {loginStyles};
