import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import { NetflixInput, NetflixButton } from '../style/styledComponents';
import { useState } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Function to login with existing user
    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then((authUser) => navigate('/'))
            .catch((err) => alert(err.message))
    }

    // Function to register for the first time in the app
    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
            .then((authUser) => navigate('/'))
            .catch((err) => alert(err.message))
    }

    return (
        <div className={classes.root}>
            <Typography variant='h5' align='left'>Sign In</Typography>
            <form className={classes.form}>
                <NetflixInput 
                    className={classes.email} 
                    placeholder='Email' 
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <NetflixInput 
                    className={classes.password} 
                    placeholder='Password' 
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <NetflixButton onClick={signIn} type='submit' wide='medium'>Sign In</NetflixButton>
                <Typography variant='subtitle2'>
                    New to Netflix?{'  '}
                    <span onClick={register} className={classes.signUpLink}>
                        Sign Up now.{' '}
                    </span>
                </Typography>
            </form>
        </div>
    )
}

// Constant with object to generate styles
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '350px',
        width: '20rem',
        height: '25rem',
        background: 'rgba(0,0,0,0.65)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    form: {
        width: '90%'
    },
    email: {
        marginBottom: theme.spacing(2)
    },
    password: {
        marginBottom: theme.spacing(4)
    },
    signUpLink: {
        color: '#FFF',
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline'
        }
    }
}))

export default SignUp