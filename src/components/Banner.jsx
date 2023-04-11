import React from 'react'
import { Button, Typography, makeStyles } from '@material-ui/core'
import BannerNetflix from '../images/HeroLogin.png'

const Banner = () => {

    const classes = useStyles();

    // Function to cut description text
    const truncate = (string, n) => string?.length > n ? `${string.substr(0, n-1)} ...` : string

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <Typography variant='h2' component='h1'>
                    Movie Title
                </Typography>
                <div className={classes.btns}>
                    <Button>Play</Button>
                    <Button>My List</Button>
                </div>
                <Typography variant='h6' className={classes.description} style={{ wordWrap: 'break-word' }}>
                    {
                        truncate('Movie Description', 150)
                    }
                </Typography>
                <div className={classes.fadeBtn}></div>
            </div>
        </div>
    )
}

// Constant with object to generate styles
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${BannerNetflix})`,
        position: 'relative',
        height: '440px',
        objectFit: 'contain',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
        padding: theme.spacing(5,5,5,5),
        height: '50%',
        width: '50%'
    },
    btns: {
        '& button': {
            cursor: 'pointer',
            color: '#FFF',
            fontWeight: 700,
            borderRadius: '5px',
            padding: theme.spacing(1,4,1,4),
            marginRight: '1rem',
            backgroundColor: 'rgba(51,51,51,0.5)'
        },
        '& button:hover': {
            color: '#000',
            backgroundColor: '#E6E6E6'
        }
    },
    fadeBtn: {
        position: 'absolute',
        top: '30vh',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 99,
        backgroundImage: 'linear-gradient(180deg, transparent, rgba(37,37,37,0.61), #111)'
    }
}))

export default Banner