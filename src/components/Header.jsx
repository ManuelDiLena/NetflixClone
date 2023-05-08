import React, { useEffect, useState } from 'react'
import { AppBar, Avatar, Toolbar, makeStyles } from '@material-ui/core'
import logo from '../images/LogoNetflix.png'
import { Link } from 'react-router-dom'

const Header = () => {

    const classes = useStyles();
    const [show, setShow] = useState(false);

    // Function to make the header transparent
    const hideHeader = () => {
        if (window.scrollY > 100) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    // useEffect with a listener to know when scrolling is done
    useEffect(() => {
        window.addEventListener('scroll', hideHeader)
        return () => window.removeEventListener('scroll', hideHeader)
    }, [])

    return (
        <AppBar position='sticky' elevation={0} className={`${classes.root} ${show && classes.transparent}`}>
            <Toolbar className={classes.toolbar}>
                <Link to={`/`}>
                    <img src={logo} alt='logo' className={classes.logo}></img>
                </Link>
                <Link to={`/profile`}>
                    <Avatar variant='square' style={{cursor: 'pointer'}}/>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

// Constant with object to generate styles
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'rgba(51,51,51,0.5)',
        top: 0,
        left: 0,
        right: 0
    },
    transparent: {
        backgroundColor: 'transparent'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        width: '100px',
        cursor: 'pointer'
    }
}))

export default Header