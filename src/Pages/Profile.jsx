import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import Header from '../components/Header'
import Plans from '../components/Plans'
import AvatarNetflix from '../images/AvatarNetflix.png'
import { NetflixButton } from '../style/styledComponents'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

    const classes = useStyles();
    const navigate = useNavigate(); 

    // Function to log out
    const signout = () => {
        auth.signOut()
        navigate('/login')
    }

    return (
        <div className={classes.root}>
            <Header />
            <Typography variant='h3'>Edit Profile</Typography>
            <div className={classes.info}>
                <img src={AvatarNetflix} alt='avatar'></img>
                <div className={classes.details}>
                    <div className={classes.plans}>
                        <Typography variant='h6'>User Email</Typography>
                        <Typography className={classes.subtitle} variant='h5' gutterBottom>Plans</Typography>
                        <Plans cost={7.99}>Netflix Basic</Plans>
                        <Plans cost={11.99}>Netflix Standard</Plans>
                        <Plans cost={15.99}>Netflix Premium</Plans>
                        <NetflixButton 
                            onClick={signout}
                            wide='fullWidth'>
                                Sign Out
                        </NetflixButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Constant with object to generate styles
const useStyles = makeStyles((theme) => ({
    root: {
        color: '#FFFFFFF',
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    info: {
        width: '60%',
        display: 'flex',
        '& img': {
            height: '100px',
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            }
        }
    },
    details: {
        width: '100%',
        marginLeft: theme.spacing(3),
        '& h6': {
            backgroundColor: '#564d4d',
            padding: theme.spacing(1),
            marginBottom: theme.spacing(1),
            fontSize: '18px',
            color: '#FFFFFF'
        }
    },
    plans: {
        width: '100%',
    },
    subtitle: {
        borderBottom: '1px solid #564d4d'
    }
}))

export default Profile