import { Autocomplete, Checkbox } from '@mui/material';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import React, { useState } from 'react'
import '../../assets/css/newannouncement/announcementdetail.scss';

function AnnouncementDetail() {
    const [value, setValue] = useState('female');
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
                            onChange={(event, value) => console.log(value)}
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

                        <div className='radiobut d-flex'>
                            <TextField className='mb-2 mr-2' id="outlined-basic" label="Yürüş" variant="outlined" sx={{ width: 255 }} type='number' min='0' value={'0'} />
                            <FormControl style={{ display: 'flex' }} className='d-flex'>

                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={value}
                                    defaultValue='Km'
                                    defaultChecked='Km'
                                    onChange={handleChange}
                                    style={{ display: 'flex', flexDirection: 'row' }}

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
                            onChange={(event, value) => console.log(value)}
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
                        <label className='marka'>Qiymət</label>

                        <div className='radiobut d-flex'>
                            <TextField className='mb-2 mr-2' id="outlined-basic" label="Qiymət" variant="outlined" sx={{ width: 150 }} type='number' min='0' value={'0'} />
                            <FormControl style={{ display: 'flex' }} className='d-flex'>

                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={value}
                                    defaultValue='Km'
                                    defaultChecked='Km'
                                    onChange={handleChange}
                                    style={{ display: 'flex', flexDirection: 'row' }}

                                >
                                    <FormControlLabel value="AZN" control={<Radio />} label="AZN" />
                                    <FormControlLabel value="USD" control={<Radio />} label="USD" />
                                    <FormControlLabel value="EUR" control={<Radio />} label="EUR" />
                                </RadioGroup>
                            </FormControl>
                        </div>

                    </div>

                </div>
                <div className='col-lg-6 col-md-8 col-sm-12 mt-5'>
                    <div className='space'>
                        <label className='marka'>Qiymət</label>

                        <div className='radiobut'>
                            <TextField className='' id="outlined-basic" label="Qiymət" variant="outlined" sx={{ width: 400 }} type='number' min='0' value={'0'} />
                        </div>

                    </div>

                </div>
                <div className='col-lg-6 col-md-8 col-sm-12 mt-5'>
                    <FormControlLabel control={<Checkbox />} label="Kreditdədir" />
                    <FormControlLabel control={<Checkbox />} label="Barter Mümkündür" />
                </div>
                <div className='col-lg-6 col-md-8 col-sm-12 mt-5'>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={3}
                        placeholder="Əlavə Məlumat"
                        style={{ width: '100%' }}
                    />
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