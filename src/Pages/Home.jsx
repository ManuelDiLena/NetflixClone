import React from 'react'
import { makeStyles } from '@material-ui/core'
import Banner from '../components/Banner'
import Header from '../components/Header'

const Home = () => {

    const classes = useStyles();

    return (
        <div>
            <Header />
            <Banner />
        </div>
    )
}

// Constant with object to generate styles
const useStyles = makeStyles((theme) => ({
    
}))

export default Home