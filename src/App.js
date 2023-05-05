import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Paypal from './Pages/Paypal';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/UserSlice';

function App() {

    const user = useSelector(selectUser);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                dispatch(login({
                    uid: userAuth.uid,
                    email: userAuth.email
                }))
            } else {
                dispatch(logout)
            }
        })
        return unsubscribe
    }, [dispatch])

    return (
        <div className={classes.root}>
            <HashRouter>
                <Routes>
                    <Route path='/login' element={<Login/>} />
                    <Route path='/profile' element={<Profile/>} />
                    <Route path='/checkout' element={<Paypal/>} />
                    <Route exact path='/' element={<Home/>} />
                </Routes>
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
