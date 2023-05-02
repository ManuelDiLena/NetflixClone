import React, { useState } from 'react'
import { Button, Typography, makeStyles } from '@material-ui/core'
import logo from '../images/LogoNetflix.png'
import HeroLogin from '../images/HeroLogin.png'
import { NetflixButton, NetflixInput } from '../style/styledComponents'
import SignUp from './SignUp'

const Login = () => {

    const classes = useStyles();
    const [signIn, setSignIn] = useState(false);

    return (
        <div className={classes.root}>
            <img src={logo} className={classes.logo} alt='logo'></img>
            <NetflixButton className={classes.btnLogIn}>Log In</NetflixButton>
            <div className={classes.info}>
                {
                    !signIn ? (<SignUp />) : (
                        <>
                        <Typography variant='h4' gutterBottom>
                            Unlimited films, TV programmes and more.
                        </Typography>
                        <Typography variant='h5'>
                            Watch anywhere. Cancel at any time.
                        </Typography>
                        <Typography variant='h6' gutterBottom>
                            Ready to watch? Enter your email to create or restart your membership.
                        </Typography>
                        <div className={classes.inputBlock}>
                            <NetflixInput placeholder='Email Address'/>
                            <NetflixButton>GET STARTED</NetflixButton>
                        </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

// Constant with object to generate styles
const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        height: '100vh',
        backgroundImage: `url(${HeroLogin})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        position: 'fixed',
        top: 0,
        left: 20,
        width: '150px',
        cursor: 'pointer'
    },
    btnLogIn: {
        position: 'fixed',
        zIndex: 15,
        right: 20,
        top: 20
    },
    info: {
        color: '#FFF',
        zIndex: 15,
        textAlign: 'center',
        '& h4': {
            fontWeight: 800
        },
        '& h5': {
            fontWeight: 400
        }
    }
}))

export default Login