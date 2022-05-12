import React from 'react'
import '../../assets/css/layout/navbar.scss'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar'>
            <div className="container">
                <div className='logo'>
                    <Link className='p-0 m-0' to='/'><h3 className='mx-1 logo' >Turbo.az</h3></Link>
                    <a href='/' className='mt-2'><span>Bütün Elanlar</span></a>
                    <a href='/' className='mt-2'><span>Avtosalonlar</span></a>
                </div>
                <div className='newannouncement'>
                    <Link to="/newannouncement">
                        <Box sx={{ '& button': { m: 1 } }}>
                            <div>
                                <Button variant="contained" size="medium" >
                                    Yeni Elan
                                    <AddCircleIcon className='ml-2' />
                                </Button>
                            </div>
                        </Box>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar