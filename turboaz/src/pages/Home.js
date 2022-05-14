import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';
import Filter from '../components/Filter';
import MyCard from '../components/MyCard';


function Home() {

    const [imgs ,setImgs] = useState([])
    return (

        <div>
            <Header />
            <Navbar />
            <Filter />
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <MyCard/>
                    </div>
                    <div className="col-3">
                        <MyCard/>
                    </div>
                    <div className="col-3">
                        <MyCard/>
                    </div>
                    <div className="col-3">
                        <MyCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home