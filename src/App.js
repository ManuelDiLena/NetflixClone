import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Route, Routes, HashRouter } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Paypal from './Pages/Paypal';
import Header from './components/Header';

function App() {

    const user = 'Manu';
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <HashRouter>
            <Header />
                {
                    !user ? (<Login/>) : (
                        <Routes>
                            <Route path='/' element={<Home/>} />
                            <Route path='profile' element={<Profile/>} />
                            <Route path='checkout' element={<Paypal/>} />
                        </Routes>
                    )
                }
            </HashRouter>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#111',
        minHeight: '100vh',
        color: '#FFF'
    }
}))

export default App;
