import React from 'react';
import Header from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';
import AnnouncementDetail from '../components/NewAnnouncement/AnnouncementDetail';
import MultipleImg from '../components/NewAnnouncement/MultipleImg';

function NewAnnouncement() {
    
    return (
        <div>
            <Header />
            <Navbar />
            <AnnouncementDetail/>
            <MultipleImg/>
           
        </div>
    )
}

export default NewAnnouncement