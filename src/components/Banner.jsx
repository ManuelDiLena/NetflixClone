import React, { useEffect, useState } from 'react'
import { Button, Typography, makeStyles } from '@material-ui/core'
import BannerNetflix from '../images/HeroLogin.png'
import instance from '../axios'
import requests from '../Requests'

const Banner = () => {

    const classes = useStyles();
    const [movie, setMovie] = useState([]);

    // Function to cut description text
    const truncate = (string, n) => string?.length > n ? `${string.substr(0, n-1)} ...` : string

    // Function to show random movie image in the banner
    useEffect(() => {
        const fetchData = async () => {
            const request = await instance.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request
        }
        fetchData()
    }, [])

    return (
        <div className={classes.root} style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
        }}>
            <div className={classes.content}>
                <Typography variant='h2' component='h1'>
                    { movie?.title || movie?.name || movie?.original_name }
                </Typography>
                <div className={classes.btns}>
                    <Button>Play</Button>
                    <Button>My List</Button>
                </div>
                <Typography variant='h6' className={classes.description} style={{ wordWrap: 'break-word' }}>
                    {
                        truncate(movie?.overview, 150)
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
        position: 'relative',
        height: '500px',
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