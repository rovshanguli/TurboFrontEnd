import React from 'react';
import Header from '../components/layout/Header';
import Navbar from '../components/Filter';
import Filter from '../components/layout/Navbar';

function Home() {
    return (
        <div>
            <Header />
            <Filter />
            <Navbar />
        </div>
    )
}

export default Home