import React, { useState } from "react";
// import "./App.css";
import { styled } from '@mui/material/styles';
import { Box, AccordionSummary, Typography, Container, Grid, Checkbox, InputLabel, FormControl, MenuItem, Select } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { contactstyle } from '../CotactStyle';
import Supptable from './ListTable';
// import Sidebar from '../../../header/Sidebar';
import Customeredit from "./Edit";
import Customercreate from "./Create";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));
  


function Customerlist() {

  // ***Filter Text Field****//
  const [filtersupForm, setFiltersupForm] = useState({
    status: "",
});

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

    return (
        <Box sx={contactstyle.importProductsContainer}>
          <Typography  sx={contactstyle.UnitHeaderText}>Customers  <Typography  sx={contactstyle.UnitSubHeaderText}>Manage your Customers</Typography></Typography>
           
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={contactstyle.filtercontainer}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography><FilterAltIcon /> Filter</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{padding:'20px'}}>
                <Typography><br />
                <Grid container spacing={2}>
                        <Grid md={3} sm={4} sx={{marginBottom:'10px'}}>

                            <Checkbox {...label} defaultChecked />Purchase Due

                        </Grid>
                        <Grid md={3} sm={4} sx={{marginBottom:'10px'}}>

                            <Checkbox {...label} defaultChecked />Purchase Return

                        </Grid>
                        <Grid md={3} sm={4} sx={{marginBottom:'10px'}}>

                            <Checkbox {...label} defaultChecked />Purchase Balance

                        </Grid>
                        <Grid md={3} sm={4} sx={{marginBottom:'10px'}}>

                            <Checkbox {...label} defaultChecked />Opening Balance

                            </Grid>
              
                                <Grid md={3} sm={4}>
                        
                                            <FormControl sx={{ m: 1, minWidth: 160, paddingLeft: '5px' }} size="small" fullWidth >
                                                <InputLabel id="demo-select-small">Status</InputLabel>
                                                <Select
                                                    labelId="demo-select-small"
                                                    id="demo-select-small"
                                                    value={filtersupForm.status}
                                                    onChange={(event) => { setFiltersupForm({ ...filtersupForm, Status: event.target.value }) }}
                                                >

                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={10}> Active </MenuItem>
                                                    <MenuItem value={20}> Inactive </MenuItem>

                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                
                </Typography>
                </AccordionDetails> 
            </Accordion>
        <br />
  
            <Supptable />
     

 
        </Box>
       
    );
}


export default PurchaseList;