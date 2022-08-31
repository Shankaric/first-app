import React, { useState } from "react";
// import "./App.css";
import { styled } from '@mui/material/styles';
import { Box, AccordionSummary, Typography, Container, Grid, Checkbox, InputLabel, Accordion,AccordionDetails,FormControl, MenuItem, Select } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { PurchaseStyle } from './PurchaseStyle';
import PurchaseTable from './PurchaseTable';
import "rsuite/dist/rsuite.css";
// import Sidebar from '../../../header/Sidebar';
import { DateRangePicker } from 'rsuite';






function PurchaseList() {

// ***Filter Text Field****//
const [filtersupForm, setFiltersupForm] = useState({
status: "",
});

// accordian
const [expanded, setExpanded] = React.useState('panel1');

const handleChange = (panel) => (event, newExpanded) => {
setExpanded(newExpanded ? panel : false);
};

const [purchaseSelect, setpurchaseSelect] = useState({
  businessLocation: "", supplier: "", purchasestatus: "", paymentstatus: "",
});
    return (
      <>
        <Box>
          <Typography sx={PurchaseStyle.UnitHeaderText}>Purchases</Typography>
           
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={PurchaseStyle.filtercontainer}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{color:'#384460'}}><Typography sx={{fontSize:'20px'}}><FilterAltIcon /> Filter</Typography></AccordionSummary>
                <AccordionDetails sx={{padding:'20px'}}> 
                <Grid container spacing={2}>
                  <Grid item sm={12} xs={12} md={6} lg={3}>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-helper-label">Business Location</InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={purchaseSelect.ProfitAddLocation}
                      onChange={(event) => { setpurchaseSelect({ ...purchaseSelect, businessLocation: event.target.value }) }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  </Grid>
                  <Grid item sm={12} xs={12} md={6} lg={3}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-helper-label">Supplier</InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={purchaseSelect.ProfitAddLocation}
                        onChange={(event) => { setpurchaseSelect({ ...purchaseSelect, businessLocation: event.target.value }) }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item sm={12} xs={12} md={6} lg={3}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-helper-label">Purchase status</InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={purchaseSelect.ProfitAddLocation}
                        onChange={(event) => { setpurchaseSelect({ ...purchaseSelect, businessLocation: event.target.value }) }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item sm={12} xs={12} md={6} lg={3}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-helper-label">Payment status</InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={purchaseSelect.ProfitAddLocation}
                        onChange={(event) => { setpurchaseSelect({ ...purchaseSelect, businessLocation: event.target.value }) }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <br />
                <Grid container spacing={2}>
                    <Grid item sm={12} xs={12} md={6} lg={3}>
                        <DateRangePicker size="lg" fullWidth />
                    </Grid>
                  
                  </Grid>
                </AccordionDetails> 
            </Accordion>
            </Box>
        <br />
  
        <Box sx={PurchaseStyle.container}>     
            <PurchaseTable/>
        </Box>
  </>
       
       
    );
}


export default PurchaseList;