import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import { NetflixButton } from '../style/styledComponents';

const Plans = ({cost, children, wide}) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.standard} variant='h5'>
                { children }
            </Typography>
            <NetflixButton>Subscribe</NetflixButton>
        </div>
    )
}

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