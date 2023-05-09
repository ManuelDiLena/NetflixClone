import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import { NetflixButton } from '../style/styledComponents';
import { useDispatch } from 'react-redux';
import { setPrice } from '../features/PriceSlice';
import { useNavigate } from 'react-router-dom';

const Plans = ({cost, children, wide}) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Function that will take the payment gateway with the plan price data
    const handleClick = (cost) => {
        dispatch(setPrice(cost))
        navigate('/checkout')
    }

    return (
        <div className={classes.root}>
            <Typography className={classes.standard} variant='h5'>
                { children }
            </Typography>
            <NetflixButton onClick={ () => handleClick(cost) }>Subscribe</NetflixButton>
        </div>
    )
}

// Constant with object to generate styles
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& button': {
            marginBottom: theme.spacing(2)
        }
    }, 
    standard: {
        fontSize: '1.2rem'
    }
}))

export default Plans