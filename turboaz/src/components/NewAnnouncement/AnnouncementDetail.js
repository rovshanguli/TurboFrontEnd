import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';
import React from 'react'
import '../../assets/css/newannouncement/announcementdetail.scss';

function AnnouncementDetail() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-md-8 col-sm-12 mt-5'>
                    <div className='space'>
                        <label className='marka'>Marka</label>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}
                            sx={{ width: 400 }}
                            renderInput={(params) => <TextField {...params} label="Movie" />}
                        />
                    </div>

                </div>
                <div className='col-lg-6 col-md-8 col-sm-12 mt-5'>
                    <div className='space'>
                    <label className='marka'>Yanacaq Növü</label>
                    <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}
                            sx={{ width: 400 }}
                            renderInput={(params) => <TextField {...params} label="Movie" />}
                        />
                    </div>

                </div>
                <div className='col-lg-6 col-md-8 col-sm-12 mt-5'>
                    <div className='space'>
                        <label className='marka'>Model</label>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}
                            sx={{ width: 400 }}
                            renderInput={(params) => <TextField {...params} label="Movie" />}
                        />
                    </div>

                </div>
                <div className='col-lg-6 col-md-8 col-sm-12 mt-5'>
                    <div className='space'>
                        <label className='marka'>Ötürücü</label>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}
                            sx={{ width: 400 }}
                            renderInput={(params) => <TextField {...params} label="Movie" />}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AnnouncementDetail


const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
      label: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
]