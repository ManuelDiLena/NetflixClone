import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
import { NetflixButton } from '../style/styledComponents'
import Header from '../components/Header';

const Paypal = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.btns}>
                <NetflixButton wide='mediumWidth'>PayPal</NetflixButton>
                <NetflixButton wide='mediumWidth'>MercadoPago</NetflixButton>
                <NetflixButton wide='mediumWidth'>Tarjeta de Debito o Credito</NetflixButton>
            </div>
        </div>
    )
}

// Constant with object to generate styles
const useStyles = makeStyles((theme) => ({
    root: {
        color: '#FFFFFFF',
        height: '100vh',
        width: '100vw'
    },
    btns: {
        display: 'flex',
        height: '50%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
}))

export default Paypal