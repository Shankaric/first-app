import React, { useState } from "react";
import { Box, AccordionSummary, Typography,Button, Grid,IconButton, InputLabel,InputAdornment, Tooltip,OutlinedInput,Accordion,AccordionDetails,FormControl, MenuItem, Select } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {reportStyles} from './reportStyles';
import {FcInfo} from 'react-icons/fc';
import { makeStyles,} from "@material-ui/core/styles";

//jquery
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';

import "rsuite/dist/rsuite.css";
import TrendingBarChart from './Barchart';

import { DateRangePicker } from 'rsuite';



 //  JQUERY
 $(document).ready(function () {
    setTimeout(function(){
    $('#tablereport').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});



function TrendingProducts() {

// Tooltip function
const useStyles = makeStyles(theme => ({
    arrow: {
        fontSize: 25,
        color: "7009AB !important",
        "&::before": {
            backgroundColor: "7009AB !important",
            boxShadow: '6px 6px 6px 9px #dedbdbae',
        }
    },
    tooltip: {
        fontSize: "17px !important",
        color: "#7009AB !important",
        backgroundColor: "white !important",
        boxShadow: '6px 6px 6px 9px #dedbdbae',
        padding: "20px",
    }
}));
const classes = useStyles();

// Accordion
const [expanded, setExpanded] = useState('panel1');

const handleChange = (panel) => (event, newExpanded) => {
setExpanded(newExpanded ? panel : false);
};

    return (
      <>
        <Box>
          <Typography sx={reportStyles.UnitHeaderText}>Trending Products</Typography>
           
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={reportStyles.filtercontainer}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{color:'#7009ab !IMPORTANT',boxShadow:'0px 0px 2px #00000047',}}><Typography sx={{fontSize:'20px'}}><FilterAltIcon /> Filter</Typography></AccordionSummary>
                <AccordionDetails >
                <br /> 
                <Grid container spacing={2}>
                  <Grid item sm={12} xs={12} md={6} lg={3}>
                    <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                        <InputLabel id="demo-select-small">Business Location</InputLabel>
                            <Select
                                    labelId="demo-select-small"
                                    sx={{borderRadius:'0px !important',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: '1px solid #B97DF0',
                                        borderRadius:'0px !important',
                                    },}}
                                    id="demo-select-small"
                                    label='Customer Group Name'
                                    // value={ProfitLoss.ProfitAddLocation}
                                    // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
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
                  <Grid item sm={12} xs={12} md={6} lg={3}>
                    <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                        <InputLabel id="demo-select-small">Category</InputLabel>
                            <Select
                                    labelId="demo-select-small"
                                    sx={{borderRadius:'0px !important',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: '1px solid #B97DF0',
                                        borderRadius:'0px !important',
                                    },}}
                                    id="demo-select-small"
                                    label='Category'
                                    // value={ProfitLoss.ProfitAddLocation}
                                    // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
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
                  <Grid item sm={12} xs={12} md={6} lg={3}>
                    <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                        <InputLabel id="demo-select-small">Sub Category</InputLabel>
                            <Select
                                    labelId="demo-select-small"
                                    sx={{borderRadius:'0px !important',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: '1px solid #B97DF0',
                                        borderRadius:'0px !important',
                                    },}}
                                    id="demo-select-small"
                                    label='Sub Category'
                                    // value={ProfitLoss.ProfitAddLocation}
                                    // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
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
                  
                  <Grid item sm={12} xs={12} md={6} lg={3}>
                  <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                        <InputLabel id="demo-select-small">Brand</InputLabel>
                            <Select
                                    labelId="demo-select-small"
                                    sx={{borderRadius:'0px !important',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: '1px solid #B97DF0',
                                        borderRadius:'0px !important',
                                    },}}
                                    id="demo-select-small"
                                    label='Sub Category'
                                    // value={ProfitLoss.ProfitAddLocation}
                                    // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
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
                  <br />
                  <Grid container spacing={2}>
                  <Grid item sm={12} xs={12} md={6} lg={3}>
                    <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                        <InputLabel id="demo-select-small">Unit</InputLabel>
                            <Select
                                    labelId="demo-select-small"
                                    sx={{borderRadius:'0px !important',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: '1px solid #B97DF0',
                                        borderRadius:'0px !important',
                                    },}}
                                    id="demo-select-small"
                                    label='Customer Group Name'
                                    // value={ProfitLoss.ProfitAddLocation}
                                    // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
                                    fullWidth
                                >
                                   
                                    <MenuItem value={1}>All</MenuItem>
                                    <MenuItem value={2}>xxx</MenuItem>
                                </Select>   
                            </FormControl>
                  </Grid>
                  <Grid item sm={12} xs={12} md={6} lg={3}>
                       <DateRangePicker size="lg" fullWidth style={{width:'100%', border: '1px solid #B97DF0'}}  />

                  </Grid>
                  <Grid item sm={12} xs={12} md={6} lg={3}>
               
                        {/* <TextField size='small' fullWidth   
                                    label='Number of Products'
                                     sx={{borderRadius:'0px !important',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: '1px solid #B97DF0',
                                        borderRadius:'0px !important',
                                    },}}>

                                    
                        </TextField> */}
                        <FormControl variant="outlined" size="small" fullWidth>
                                                <InputLabel htmlFor="outlined-adornment-password">Number of products:</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-password"
                                                     endAdornment={
                                                        <Tooltip title="Payment to be paid for purchases/sales within the given time period. All upcoming
                                                         or due payments will be displayed in dashboard - Payment Due section" classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} arrow>
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    edge="end"
                                                                        // value={productEdit.producteditsku}
                                                                        // onChange={(e) => { setProductEdit({ ...productEdit, Producteditsku: e.target.value }) }}
                                                                        >
                                                                    <FcInfo />
                                                                </IconButton>
                                                            </InputAdornment>
                                                        </Tooltip>
                                                    }
                                                    label="Number of products"
                                                />
                                            </FormControl>
                        
                  </Grid>
                  
                  <Grid item sm={12} xs={12} md={6} lg={3}>
                     <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                        <InputLabel id="demo-select-small">Sub Category</InputLabel>
                            <Select
                                    labelId="demo-select-small"
                                    sx={{borderRadius:'0px !important',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: '1px solid #B97DF0',
                                        borderRadius:'0px !important',
                                    },}}
                                    id="demo-select-small"
                                    label='Sub Category'
                                    // value={ProfitLoss.ProfitAddLocation}
                                    // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
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
                  <Box sx={{float:'right',margin:'10px',}}>
                        <Button size='small' variant='contained' color='primary' sx={{textTransform:'capitalize'}}>Apply Filters</Button>
                    </Box>
                </AccordionDetails> 
            </Accordion>
            </Box>
        <br />
  
    <Box sx={reportStyles.container}>     
         <TrendingBarChart></TrendingBarChart>                           
    </Box>

  </>
    
    );
}


export default TrendingProducts;