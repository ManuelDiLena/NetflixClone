import React from 'react';
import { makeStyles } from '@material-ui/core';
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Paypal from './Pages/Paypal';

function App() {

    const user = 'Manu';
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <BrowserRouter>
                {
                    !user ? (<Login/>) : (
                        <Routes>
                            <Route path='/profile' element={<Profile/>} />
                            <Route path='/checkout' element={<Paypal/>} />
                            <Route exact path='/' element={<Home/>} />
                        </Routes>
                    )
                }
            </BrowserRouter>
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
