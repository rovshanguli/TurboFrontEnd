import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';
import Filter from '../components/Filter';
import MyCard from '../components/MyCard';
import { Button } from 'antd';


function Home() {

    debugger
    const [imgs, setImgs] = useState([])
    const handleImgs = () => {
        debugger
        // imgs: [...imgs, 'new value']
    }

    imgs.useState()
    return (

        <div>
            <Header />
            <Navbar />
            <Filter />
            <Button onClick={() => handleImgs()}>Data</Button>
            <MyCard propImg={imgs}/>
        </div>
    )
}

export default Home