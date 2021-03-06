import { makeStyles } from '@mui/styles';

const registrationStyles = makeStyles(() => ({
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
        marginBottom: '35px',
        marginTop: '15px'
    },
    formInput: {
        width: '100%', // Fix IE 11 issue.
        minHeight: '8.5vh'
    },
    redirect: {
        width: "50%", marginTop: '3vh !important'
    },
    signIn: {
        width: "100%", textDecoration: 'none !important'
    },
    registrationSubmit: {
        marginTop: "2vh !important",
        float: "right"
    }
}));


export {registrationStyles};
