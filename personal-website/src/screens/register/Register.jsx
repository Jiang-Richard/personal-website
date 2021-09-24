import React, { useRef, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link, useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Navbar from '../shared/NavBar';
import { useAuth } from '../../Auth';
import { Alert } from "react-bootstrap";


/* Set the Copyright to be displayed at the bottom of the page */
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © Richard Jiang '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    error: {
        marginTop: theme.spacing(2),
        color: "white",
        backgroundColor: theme.palette.error.dark,
        borderColor: theme.palette.secondary.dark,
        border: 5,
        borderRadius: 4,
        width: '100%',
        padding: '15px 0 0 0',
        height: 48,
        textAlign: 'center',
    }
}));


export default function Register() {

    var uid;
    const classes = useStyles();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    // const displayNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confpasswordRef = useRef();
    const [error, setError] = useState("")
    const { signup } = useAuth()
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    /* Function to error check before registering new user */
    async function handleSubmit(event) {
        event.preventDefault();

        /* If the confirm password value does not match password value, display error */
        if (passwordRef.current.value !== confpasswordRef.current.value) {
            return setError("Passwords do not match")
        }

        /* If the password length is less than 6 characters */
        if (passwordRef.current.value.length < 6) {
            return setError("Password must be at least 6 characters!")
        }

        try {
            setError("")
            setLoading(true)

            /* Await registering new user with email & password to Firebase */
            await signup(emailRef.current.value, passwordRef.current.value)
                .then(function (result) {
                    uid = result.user.uid;
                    // return result.user.updateProfile({
                    //     displayName: displayNameRef.current.value
                    // })
                })

            /* Set all the fields to create the new user */
            // const details = {
            //     id: uid,
            //     firstName: firstNameRef.current.value,
            //     lastName: lastNameRef.current.value,
            //     // displayName: displayNameRef.current.value,
            //     email: emailRef.current.value,
            // }

            // /* Create the new user, i.e. send to the backend then reroute to the home page */
            // fetch('/register', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(details),
            // })
            //     .then(response => response.json())
            //     .then(details => {
            //         console.log('Success:', details);
            //     })
            //     .catch((error) => {
            //         console.log(details);
            //         console.error('Error:', error);
            //     });

            history.push("/")
        } catch {
            setError("Email address already exists!")
        }

        setLoading(false)
    }

    return (
        <>
            <Navbar />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Register your account!
                    </Typography>
                    {error && <Alert variant="danger" className={classes.error}>{error}</Alert>}
                    <form onSubmit={handleSubmit} className={classes.form}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="first-name"
                                    label="First Name"
                                    name="first-name"
                                    autoComplete="first-name"
                                    inputRef={firstNameRef}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="last-name"
                                    label="Last Name"
                                    name="last-name"
                                    inputRef={lastNameRef}
                                />
                            </Grid>
                            {/* <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="display-name"
                                    label="Display Name"
                                    name="display-name"
                                    inputRef={displayNameRef}
                                />
                            </Grid> */}
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    inputRef={emailRef}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    helperText="Must be at least 6 characters long"
                                    inputRef={passwordRef}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="confirmpassword"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirmpassword"
                                    inputRef={confpasswordRef}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            disabled={loading}
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link to="/login">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        </>
    );
}