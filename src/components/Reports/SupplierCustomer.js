import React, { useState } from "react";
import { Box, AccordionSummary, Typography,Button, Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,
     Grid,TableFooter, InputLabel, Accordion,AccordionDetails,FormControl, MenuItem, Select } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {reportStyles} from './reportStyles';
import { FaFileCsv, FaPrint, FaFilePdf, } from "react-icons/fa";
import { FcInfo } from "react-icons/fc";
import { AiFillFileExcel } from "react-icons/ai";

//jquery
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';


 //  JQUERY
 $(document).ready(function () {
    setTimeout(function(){
    $('#CustomerGroup').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});



function SupplierCustomer() {


// Accordion
const [expanded, setExpanded] = useState('panel1');

const handleChange = (panel) => (event, newExpanded) => {
setExpanded(newExpanded ? panel : false);
};

    return (
      <>
        <Box>
          <Typography sx={reportStyles.UnitHeaderText}>Customers & Suppliers Reports</Typography>
           
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={reportStyles.filtercontainer}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{color:'#7009ab !IMPORTANT',boxShadow:'0px 0px 2px #00000047',}}><Typography sx={{fontSize:'20px'}}><FilterAltIcon /> Filter</Typography></AccordionSummary>
                    <AccordionDetails >
                        <br /> 
                        <Grid container spacing={2}>
                            <Grid item sm={12} xs={12} md={6} lg={3}>
                                <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                                    <InputLabel id="demo-select-small">Customer Group Name</InputLabel>
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
                            <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                                <InputLabel id="demo-select-small">Type</InputLabel>
                                    <Select
                                            labelId="demo-select-small"
                                            sx={{borderRadius:'0px !important',
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                border: '1px solid #B97DF0',
                                                borderRadius:'0px !important',
                                            },}}
                                            id="demo-select-small"
                                            label='Type'
                                            // value={ProfitLoss.ProfitAddLocation}
                                            // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
                                            fullWidth
                                        >
                                        
                                            <MenuItem value={1}>All</MenuItem>
                                            <MenuItem value={2}>xxx</MenuItem>
                                        </Select>   
                                    </FormControl>
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
                                <Table aria-label="customized table" id="CustomerGroup">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Contact</TableCell>
                                        <TableCell align="left">Total Purchase</TableCell>
                                        <TableCell align="left">Total Purchase Return</TableCell>
                                        <TableCell align="left">Total Sale</TableCell>
                                        <TableCell align="left">Total sell Return</TableCell>
                                        <TableCell align="left">Opening Balance Due</TableCell>
                                        <TableCell align="left">Due &ensp; <FcInfo/></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="left">xyz</TableCell>
                                        <TableCell align="left"></TableCell>
                                        <TableCell align="left"></TableCell>
                                        <TableCell align="left"></TableCell>
                                        <TableCell align="left"></TableCell>
                                        <TableCell align="left"></TableCell>
                                        <TableCell align="left"></TableCell>
                                    </TableRow>
                                </TableBody>
                                <TableFooter sx={{height:'50px',backgroundColor:'#8080806e',}}>
                                    <TableRow>
                                        <TableCell sx={reportStyles.footerStyle}> Total </TableCell>
                                        <TableCell sx={reportStyles.footerStyle} align="left"> ₹781.25</TableCell>
                                        <TableCell sx={reportStyles.footerStyle} align="left"> ₹ 0.00</TableCell>
                                        <TableCell sx={reportStyles.footerStyle} align="left"> ₹ 0.00</TableCell>
                                        <TableCell sx={reportStyles.footerStyle} align="left"> ₹ 0.00</TableCell>
                                        <TableCell sx={reportStyles.footerStyle} align="left"> ₹ 0.00</TableCell>
                                        <TableCell sx={reportStyles.footerStyle} align="left"> ₹ 0.00</TableCell>
                                    </TableRow>
                            </TableFooter>
                                </Table>
                            </TableContainer>                      
            </Box>

  </>
    
    );
}


export default SupplierCustomer;