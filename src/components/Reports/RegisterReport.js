import React, { useState } from "react";
// import "./App.css";
import { Box, AccordionSummary, Typography,Button, Table,TableBody,TableCell,TableContainer,Tabs,TableHead,TableRow,Paper,
     Grid,TableFooter, InputLabel, Accordion,AccordionDetails,FormControl, MenuItem, Select } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {reportStyles} from './reportStyles';
import { FaMapMarker,FaBars,FaList,FaFileCsv, FaPrint, FaFilePdf, } from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
//jquery
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';

import "rsuite/dist/rsuite.css";
// import Sidebar from '../../../header/Sidebar';

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



function RegisterReport() {


// accordian
const [expanded, setExpanded] = React.useState('panel1');

const handleChange = (panel) => (event, newExpanded) => {
setExpanded(newExpanded ? panel : false);
};

    return (
      <>
        <Box>
          <Typography sx={reportStyles.UnitHeaderText}>Table Report</Typography>
           
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={reportStyles.filtercontainer}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{color:'#7009ab !IMPORTANT',boxShadow:'0px 0px 2px #00000047',}}><Typography sx={{fontSize:'20px'}}><FilterAltIcon /> Filter</Typography></AccordionSummary>
                <AccordionDetails >
                <br /> 
                <Grid container spacing={2}>
                  <Grid item sm={12} xs={12} md={6} lg={3}>
                    <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                        <InputLabel id="demo-select-small">User</InputLabel>
                            <Select
                                    labelId="demo-select-small"
                                    sx={{borderRadius:'0px !important',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: '1px solid #B97DF0',
                                        borderRadius:'0px !important',
                                    },}}
                                    id="demo-select-small"
                                    label='User'
                                    // value={ProfitLoss.ProfitAddLocation}
                                    // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
                                    fullWidth
                                >
                                  
                                    <MenuItem value={1}>All Users</MenuItem>
                                    <MenuItem value={2}>MR Admin Admin</MenuItem>
                                </Select>   
                            </FormControl>
                  </Grid>
                  <Grid item sm={12} xs={12} md={6} lg={3}>
                    <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                        <InputLabel id="demo-select-small">Status</InputLabel>
                            <Select
                                    labelId="demo-select-small"
                                    sx={{borderRadius:'0px !important',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: '1px solid #B97DF0',
                                        borderRadius:'0px !important',
                                    },}}
                                    id="demo-select-small"
                                    label='Status'
                                    // value={ProfitLoss.ProfitAddLocation}
                                    // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
                                    fullWidth
                                >
                                    
                                    <MenuItem value={1}>All</MenuItem>
                                    <MenuItem value={2}>Open</MenuItem>
                                    <MenuItem value={2}>Close</MenuItem>

                                </Select>   
                            </FormControl>
                  </Grid>
                  <Grid item sm={12} xs={12} md={6} lg={3}>
                    <DateRangePicker size="lg" fullWidth style={{width:'100%', border: '1px solid #B97DF0'}}  />
                  </Grid>
                
                  </Grid>
                  <br />
             
                </AccordionDetails> 
            </Accordion>
            </Box>
        <br />
  
    <Box sx={reportStyles.container}>     
    <TableContainer component={Paper} sx={{boxShadow:'none'}}>
                    <Grid container sx={reportStyles.grid_container}>    
                            <Grid>   
                                <Button sx={reportStyles.button_grp}><FaFileCsv />&ensp;Export to CSV</Button>
                                <Button sx={reportStyles.button_grp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                                <Button sx={reportStyles.button_grp}><FaPrint />&ensp;Print</Button>
                                <Button sx={reportStyles.button_grp}><FaFilePdf />&ensp;Export to PDF</Button>
                            </Grid>    
                        </Grid>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table" id="tablereport">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Open Time</TableCell>
                                <TableCell align="left">Close Time</TableCell>
                                <TableCell align="left">Location</TableCell>
                                <TableCell align="left">User</TableCell>
                                <TableCell align="left">Total Card Slips</TableCell>
                                <TableCell align="left">Total cheques</TableCell>
                                <TableCell align="left">Total Cash</TableCell>
                                <TableCell align="left">Total bank transfer</TableCell>
                                <TableCell align="left">Total advance payment</TableCell>
                                <TableCell align="left">Custom Payment 1</TableCell>
                                <TableCell align="left">Custom Payment 2</TableCell>
                                <TableCell align="left">Custom Payment 3</TableCell>
                                <TableCell align="left">Custom Payment 4</TableCell>
                                <TableCell align="left">Custom Payment 5</TableCell>
                                <TableCell align="left">Custom Payment 6</TableCell>
                                <TableCell align="left">Custom Payment 7</TableCell>
                                <TableCell align="left">Other payments</TableCell>
                                <TableCell align="left">Total</TableCell>
                                <TableCell align="left">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                            <TableCell align="left">₹ 0.00</TableCell>
                                <TableCell align="left">₹ 0.00</TableCell>
                                <TableCell align="left">₹ 0.00</TableCell>
                                <TableCell align="left">₹ 0.00</TableCell>
                                <TableCell align="left">₹ 0.00</TableCell>
                                <TableCell align="left">₹ 0.00</TableCell>
                                <TableCell align="left">₹ 0.00</TableCell>
                                <TableCell align="left">₹ 0.00</TableCell>
                                <TableCell align="left">₹ 0.00</TableCell>
                                <TableCell align="left">₹ 0.00</TableCell>
                                <TableCell align="left">₹ 0.00</TableCell>
                                <TableCell align="left">₹ 0.00</TableCell>
                                <TableCell align="left">₹ 0.00</TableCell>
                                <TableCell align="left">₹ 0.00</TableCell>
                                <TableCell align="left">₹ 0.00</TableCell>
                                <TableCell align="left">₹ 0.00</TableCell>
                                <TableCell align="left">₹ 0.00</TableCell>
                                <TableCell align="left">₹ 0.00</TableCell>
                                <TableCell align="left"></TableCell>
                               
                            </TableRow>
                        </TableBody>
                        <TableFooter sx={{height:'50px',backgroundColor:'#8080806e',textAlign:'center !important'}}>
                            <TableRow> 
                            <TableCell align="left"sx={reportStyles.footerStyle} colspan={4}>Total</TableCell>
                            <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
                            <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
                            <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
                            <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
                            <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
                            <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
                            <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
                            <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
                            <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
                            <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
                            <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
                            <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
                            <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
                            <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
                            <TableCell align="left"sx={reportStyles.footerStyle}></TableCell>
                        </TableRow>
                    </TableFooter>       
                        </Table>
                        
                    </TableContainer> 
                                
    </Box>

  </>
    
    );
}


export default RegisterReport;