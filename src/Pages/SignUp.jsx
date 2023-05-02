import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import { NetflixInput, NetflixButton } from '../style/styledComponents';

const SignUp = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant='h5' align='left'>Sign In</Typography>
            <form className={classes.form}>
                <NetflixInput className={classes.email} placeholder='Email'/>
                <NetflixInput className={classes.password} placeholder='Password'/>
                <NetflixButton wide='medium'>Sign In</NetflixButton>
                <Typography variant='subtitle2'>
                    New to Netflix?{'  '}
                    <span className={classes.signUpLink}>
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