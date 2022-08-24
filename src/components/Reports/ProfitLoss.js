import React,{ useState} from 'react';
import { Button, Grid,FormControl,InputLabel,Select } from '@mui/material';

// inputfield
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
// checkbox
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

//FONTAWESOME
import {FaMapMarker} from 'react-icons/fa';

//Table
import ProfitLossTable from './ProfitLossTable'

import ReportStyle from './ReportStyle'

function ProfitLoss(){

    const [ProfitLoss, setProfitLoss] = useState({
        addsupContactType: "", ProfitAddLocation: "", addsupBusinessName: "", addsupPrefix: "", addsupFistN: "",
    });

   return(
    <Box>
    <br /><br />
    <Grid container spacing={2}>
        <Grid item xs={8} md={8}>

        </Grid>
        <Grid item xs={4} md={4}>
                                    
        <Grid sx={{ display: 'flex' }}  >
            <Grid sx={{ fontSize: '20px', border: '1px solid #B97DF0', width: '33px', height: '40px', backgroundColor: '#B97DF0',paddingTop:'6px', color: '#fff',textAlign:'center', justfyContent:'center' }} ><FaMapMarker/></Grid>
                 <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                    <InputLabel id="demo-select-small">Unit *</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            sx={{borderRadius:'0 !important'}}
                            id="demo-select-small"
                            value={ProfitLoss.ProfitAddLocation}
                            onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
                            fullWidth
                        >
                            <MenuItem value="">
                                <em>Please Select</em>
                            </MenuItem>
                            <MenuItem value={1}>yyy</MenuItem>
                            <MenuItem value={2}>xxx</MenuItem>
                        </Select>   
                </FormControl>
            </Grid>
        </Grid>
    </Grid>
 <br /><br />
 {/* Table */}
 <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
            <Box sx={ReportStyle.tablecontainer}>
                <ProfitLossTable />
            </Box>
        </Grid>
        <Grid item xs={6} md={6}>
        </Grid>                           

</Grid>
</Box>




    );              
}
export default ProfitLoss;

