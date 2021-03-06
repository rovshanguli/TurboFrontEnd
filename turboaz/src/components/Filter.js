import React, { useState, useEffect } from 'react';
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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';






function Filter() {
    
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        loadBrands();

    }, []);

    //get Books
    const loadBrands = async () => {

        const brands = await axios.get("https://localhost:44351/api/Brand/GetAll");
        setBrands(brands.data);

    }


    const [models, setModels] = useState([]);
    useEffect(() => {
        loadModels();

    }, []);
    const loadModels = async () => {
        
        const models = await axios.get("https://localhost:44351/api/Brand/GetAll");
        setModels(models.data);

    }
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

    const [currency, setCurrency] = useState('AZN');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };




    return (
        <div className='filter'>
            <div className="container pt-2">
                <form>
                    <div className='row mt-2' >
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <Autocomplete
                                disablePortal

                                options={brands}
                                sx={{ width: '100%' }}
                                renderInput={(params) => <TextField {...params} label="Marka" />}
                                isOptionEqualToValue={(option, obj) => option.name === obj.name}
                                onChange={() => setSelect(false)}
                                getOptionLabel={(option) => option.name}
                                getOptionValue={(option) => option.id}
                            />
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <FormControl sx={{ width: '100%' }}>
                                
                                <InputLabel id="demo-multiple-checkbox-label">Model</InputLabel>
                                <Select
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    multiple
                                    value={personName}
                                    options={models}
                                    onChange={handleChange2}
                                    getOptionLabel={(option) => option.name}
                                    getOptionValue={(option) => option.id}
                                    input={<OutlinedInput label="Model" />}
                                    renderValue={(selected) => selected.join(', ')}
                                    MenuProps={MenuProps}
                                >
                                    {models.map((name) => (
                                        
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
                                disablePortal
                                id="combo-box-demo"
                                options={skills}
                                sx={{ width: '100%' }}
                                renderInput={(params) => <TextField {...params} label="??stifad??" />}
                            />
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={skills}
                                sx={{ width: '100%', color: 'white' }}
                                renderInput={(params) => <TextField {...params} label="????h??r" />}
                            />
                        </div>
                    </div>
                    <div className='row mt-2' >
                        <div className="col-lg-3 col-md-6 col-sm-12" style={{ display: "flex" }}>
                            <TextField id="outlined-basic" label="Qiym??t, min:" variant="outlined" />
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

                                            />
                                        </FormGroup>
                                    </FormControl>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <FormControl sx={{ width: '100%' }}>
                                <InputLabel id="demo-multiple-checkbox-label">Ban  N??v??</InputLabel>
                                <Select
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    multiple
                                    value={personName}
                                    onChange={handleChange2}
                                    input={<OutlinedInput label="Ban N??v??" />}
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
                                renderInput={(params) => <TextField {...params} label="????h??r" />}
                            />
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-12">
                            <Accordion className=''>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{}} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ bgcolor: 'aliceblue', width: '100%' }}
                                    aria-label="Expand"
                                >
                                    <Typography> Bu g??n :<a href='/'> 100 yeni elan</a>
                                        <button className='btn btn-primary mx-3' style={{ right: '0', top: '0' }}>Elanlar?? G??st??r</button>
                                    </Typography>

                                </AccordionSummary>

                                <AccordionDetails sx={{ bgcolor: 'aliceblue' }}>
                                    <Typography component={'span'} sx={{ bgcolor: 'aliceblue' }}>
                                        <div className="row mt-2" id='more-filter' >
                                            <div className="morefilterbody col-12 overflow-hidden">
                                                <div className='row mt-2' >
                                                    <div className="col-lg-3 col-md-6 col-sm-12" style={{ display: "flex" }}>
                                                        <FormControl sx={{ width: '100%' }}>
                                                            <InputLabel id="demo-multiple-checkbox-label">Ban  N??v??</InputLabel>
                                                            <Select
                                                                labelId="demo-multiple-checkbox-label"
                                                                id="demo-multiple-checkbox"
                                                                multiple
                                                                value={personName}
                                                                onChange={handleChange2}
                                                                input={<OutlinedInput label="Ban N??v??" />}
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
                                                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex ">

                                                        <FormControl sx={{ width: '100%' }}>
                                                            <InputLabel id="demo-multiple-checkbox-label">Ban  N??v??</InputLabel>
                                                            <Select
                                                                labelId="demo-multiple-checkbox-label"
                                                                id="demo-multiple-checkbox"
                                                                multiple
                                                                value={personName}
                                                                onChange={handleChange2}
                                                                input={<OutlinedInput label="Ban N??v??" />}
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
                                                        <FormControl sx={{ width: '100%' }}>
                                                            <InputLabel id="demo-multiple-checkbox-label">Ban  N??v??</InputLabel>
                                                            <Select
                                                                labelId="demo-multiple-checkbox-label"
                                                                id="demo-multiple-checkbox"
                                                                multiple
                                                                value={personName}
                                                                onChange={handleChange2}
                                                                input={<OutlinedInput label="Ban N??v??" />}
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
                                                        <FormControl sx={{ width: '100%' }}>
                                                            <InputLabel id="demo-multiple-checkbox-label">Ban  N??v??</InputLabel>
                                                            <Select
                                                                labelId="demo-multiple-checkbox-label"
                                                                id="demo-multiple-checkbox"
                                                                multiple
                                                                value={personName}
                                                                onChange={handleChange2}
                                                                input={<OutlinedInput label="Ban N??v??" />}
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
                                                </div>
                                                <div className='row mt-2' >
                                                    <div className="col-lg-3 col-md-6 col-sm-12" style={{ display: "flex" }}>
                                                        <div className="row m-0" style={{ width: '100%' }}>
                                                            <div className="col-7 p-0">
                                                                <FormControl sx={{ width: '100%' }}>
                                                                    <InputLabel id="demo-multiple-checkbox-label">H??cm min</InputLabel>
                                                                    <Select
                                                                        labelId="demo-multiple-checkbox-label"
                                                                        id="demo-multiple-checkbox"
                                                                        multiple
                                                                        value={personName}
                                                                        onChange={handleChange2}
                                                                        input={<OutlinedInput label="Ban N??v??" />}
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
                                                            <div className="col-5 p-0">
                                                                <FormControl sx={{ width: '100%' }}>
                                                                    <InputLabel id="demo-multiple-checkbox-label">Max</InputLabel>
                                                                    <Select
                                                                        labelId="demo-multiple-checkbox-label"
                                                                        id="demo-multiple-checkbox"
                                                                        multiple
                                                                        value={personName}
                                                                        onChange={handleChange2}
                                                                        input={<OutlinedInput label="Ban N??v??" />}
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
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex ">

                                                        <FormControl sx={{ width: '100%' }}>
                                                            <InputLabel id="demo-multiple-checkbox-label">Ban  N??v??</InputLabel>
                                                            <Select
                                                                labelId="demo-multiple-checkbox-label"
                                                                id="demo-multiple-checkbox"
                                                                multiple
                                                                value={personName}
                                                                onChange={handleChange2}
                                                                input={<OutlinedInput label="Ban N??v??" />}
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
                                                        <FormControl sx={{ width: '100%' }}>
                                                            <InputLabel id="demo-multiple-checkbox-label">Ban  N??v??</InputLabel>
                                                            <Select
                                                                labelId="demo-multiple-checkbox-label"
                                                                id="demo-multiple-checkbox"
                                                                multiple
                                                                value={personName}
                                                                onChange={handleChange2}
                                                                input={<OutlinedInput label="Ban N??v??" />}
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
                                                        <FormControl sx={{ width: '100%' }}>
                                                            <InputLabel id="demo-multiple-checkbox-label">Ban  N??v??</InputLabel>
                                                            <Select
                                                                labelId="demo-multiple-checkbox-label"
                                                                id="demo-multiple-checkbox"
                                                                multiple
                                                                value={personName}
                                                                onChange={handleChange2}
                                                                input={<OutlinedInput label="Ban N??v??" />}
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
                                                </div>
                                            </div>
                                        </div>
                                    </Typography>

                                </AccordionDetails>

                            </Accordion>

                        </div>


                    </div>


                </form>
            </div >

        </div >
    );
}

export default Filter