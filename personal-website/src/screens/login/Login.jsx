import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../shared/NavBar';
import LoginComponent from "./LoginComponent.jsx";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://wallpapercave.com/wp/GmIk0Cb.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
}));

// Login web page allows users to log into their account
export default function Login() {

    const classes = useStyles();

    return (
        <>
            <Navbar />
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <LoginComponent md={5}></LoginComponent>
            </Grid>
        </>
    );
}