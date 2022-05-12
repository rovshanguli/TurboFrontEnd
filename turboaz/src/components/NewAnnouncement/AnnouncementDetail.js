import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import React from 'react'
import '../../assets/css/newannouncement/announcementdetail.scss';

function AnnouncementDetail() {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
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
                <div className='col-lg-6 col-md-8 col-sm-12 mt-5'>
                    <div className='space'>
                        <label className='marka'>Ban Növü</label>
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
                        <label className='marka'>Sürət Qutusu</label>
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
                        <label className='marka'>Yürüş</label>
                        <div className='radiobut'>
                        <FormControl>
                          
                          <RadioGroup
                              aria-labelledby="demo-controlled-radio-buttons-group"
                              name="controlled-radio-buttons-group"
                              value={value}
                              onChange={handleChange}
                            
                          >
                              <FormControlLabel value="Km" control={<Radio />} label="Km" />
                              <FormControlLabel value="Mi" control={<Radio />} label="Mi" />
                          </RadioGroup>
                      </FormControl>
                        </div>
                      
                    </div>

                </div>
                <div className='col-lg-6 col-md-8 col-sm-12 mt-5'>
                    <div className='space'>
                        <label className='marka'>Buraxılış İli</label>
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