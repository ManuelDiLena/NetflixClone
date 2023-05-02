import React from 'react';
import { makeStyles } from '@material-ui/core';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Paypal from './Pages/Paypal';

function App() {

    const user = null;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <HashRouter>
                {
                    !user ? (<Login/>) : (
                        <Routes>
                            <Route path='/profile' element={<Profile/>} />
                            <Route path='/checkout' element={<Paypal/>} />
                            <Route exact path='/' element={<Home/>} />
                        </Routes>
                    )
                }
            </HashRouter>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#111111',
        minHeight: '100vh',
        color: '#FFFFFF'
    }
}))

export default App;
