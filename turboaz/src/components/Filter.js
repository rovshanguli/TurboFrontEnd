import React, { useState } from 'react';
import '../assets/css/filter.scss';
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';







function Filter() {
    const skills = ["dasda"];
    const [personName, setPersonName] = React.useState([]);
    const [isSelect, setSelect] = useState(true)


    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
    ];

    const handleChange2 = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const [currency, setCurrency] = React.useState('AZN');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const moreFilter = () => {
        var element = document.getElementById("morefilter");
        if (element.classList.contains('more-filter')) {
            element.classList.remove("more-filter");
            element.style.height = "0px";

        }else{
            element.classList.add("more-filter");
            element.style.height = "250px";
            element.innerText('Daha az')
        }
    }

    return (
        <div className='filter'>
            <div className="container pt-2">
                <form>
                    <div className='row mt-2' >
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={skills}
                                sx={{ width: '100%' }}

                                renderInput={(params) => <TextField {...params} label="Marka" />}
                                onChange={() => setSelect(false)}
                            />
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <Autocomplete

                                disablePortal
                                id="combo-box-demo"
                                options={skills}
                                sx={{ width: '100%' }}
                                renderInput={(params) => <TextField {...params} label="Model" />}

                                readOnly={isSelect}

                            />
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={skills}
                                sx={{ width: '100%' }}
                                renderInput={(params) => <TextField {...params} label="İstifadə" />}
                            />
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={skills}
                                sx={{ width: '100%', color: 'white' }}
                                renderInput={(params) => <TextField {...params} label="Şəhər" />}
                            />
                        </div>
                    </div>
                    <div className='row mt-2' >
                        <div className="col-lg-3 col-md-6 col-sm-12" style={{ display: "flex" }}>
                            <TextField id="outlined-basic" label="Qiymət, min:" variant="outlined" />
                            <TextField id="outlined-basic" label="max:" variant="outlined" />
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 d-flex ">
                            <div className="row px-3">
                                <div className="col-4 m-0 p-0 overflow-hidden">
                                    <FormControl style={{ width: '100%' }}>
                                        <Select
                                            defaultValue={'AZN'}
                                            value={currency}
                                            labelId="demo-simple-select-autowidth-label"
                                            id="demo-simple-select-autowidth"
                                            onChange={handleChange}

                                            label={false}

                                        >

                                            <MenuItem value={'AZN'}>AZN</MenuItem>
                                            <MenuItem value={'USD'}>USD</MenuItem>
                                            <MenuItem value={'EUR'}>EUR</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="col-4 m-0 p-0 pl-1 mt-2">
                                    <FormControl component="fieldset">
                                        <FormGroup aria-label="position" row>
                                            <FormControlLabel
                                                value="end"
                                                control={<Checkbox />}
                                                label="Barter"
                                                labelPlacement="Barter"
                                            />
                                        </FormGroup>
                                    </FormControl>
                                </div>
                                <div className="col-4 m-0 p-0 mt-2">
                                    <FormControl component="fieldset">
                                        <FormGroup aria-label="position" row>
                                            <FormControlLabel
                                                value="end"
                                                control={<Checkbox />}
                                                label="Kredit"
                                                labelPlacement="Kredit"
                                            />
                                        </FormGroup>
                                    </FormControl>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <FormControl sx={{ width: '100%' }}>
                                <InputLabel id="demo-multiple-checkbox-label">Ban  Növü</InputLabel>
                                <Select
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    multiple
                                    value={personName}
                                    onChange={handleChange2}
                                    input={<OutlinedInput label="Ban Növü" />}
                                    renderValue={(selected) => selected.join(', ')}
                                    MenuProps={MenuProps}
                                >
                                    {names.map((name) => (
                                        <MenuItem key={name} value={name}>
                                            <Checkbox checked={personName.indexOf(name) > -1} />
                                            <ListItemText primary={name} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <Autocomplete
                                className=''
                                disablePortal
                                id="combo-box-demo"
                                options={skills}
                                sx={{ width: '100%', color: 'white' }}
                                renderInput={(params) => <TextField {...params} label="Şəhər" />}
                            />
                        </div>
                    </div>
                    <div className="more-filter row mt-2" >
                        <div className="morefilter col-12" id='morefilter'>

                        </div>
                        <div className="today col-lg-5 col-md-6 col-sm-12">
                            <span>Bu gün : </span>
                            <a href='/'>100 yeni elan</a>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12 ">
                            <a href='/'>Sifirla</a>
                        </div>
                        <div className="more col-lg-2 col-md-6 col-sm-12 ">
                            <Link onClick={() => moreFilter()}>Daha çox filter
                                <KeyboardArrowDownIcon className='moreicon' />
                            </Link>
                        </div>
                        <div className="d-flex justify-content-end col-lg-3 col-md-6 col-sm-12 ">
                            <Button variant="outlined">Elanları göstər</Button>
                        </div>
                    </div>

                </form>
            </div >

        </div >
    );
}

export default Filter