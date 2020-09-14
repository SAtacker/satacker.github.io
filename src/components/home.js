import { CssBaseline } from '@material-ui/core';
import React from 'react';
import Header from './header';
import Navbar from './navbar'
const Home = ()=>{
    return(
        <CssBaseline>
            <Navbar />
            <Header />
        </CssBaseline>
    );
}

export default Home;