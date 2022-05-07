import React from 'react'
import '../../assets/css/layout/navbar.scss'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function Navbar() {
    return (
        <div className='navbar'>
            <div className="container">
                <div className='logo'>
                    <h3 className='mx-1'>Turbo.az</h3>
                    <a href='/' className='mt-2'><span>Bütün Elanlar</span></a>
                    <a href='/' className='mt-2'><span>Avtosalonlar</span></a>
                </div>
                <div className='newannouncement'>
                    <Box sx={{ '& button': { m: 1 } }}>
                        <div>
                            <Button variant="contained" size="medium">
                                Yeni Elan
                                <AddCircleIcon className='ml-2'/>
                            </Button>
                        </div>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Navbar