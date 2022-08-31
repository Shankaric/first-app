import React, { useState } from "react";
import { Box, AccordionSummary, Typography,Button, Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,
 Grid, TableFooter, InputLabel, Accordion,AccordionDetails,FormControl, MenuItem, Select } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {reportStyles} from './reportStyles';
import { FaMapMarker,FaUser,FaUsers,FaMoneyBill,FaFileCsv, FaPrint, FaFilePdf,} from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";

//jquery
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';
// DateRangePicker
import "rsuite/dist/rsuite.css";
import { DateRangePicker } from 'rsuite';

 //  JQUERY
 $(document).ready(function () {
    setTimeout(function(){
    $('#sellPayment').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});



function SellPayment() {


// AccordionS
const [expanded, setExpanded] = useState('panel1');

const handleChange = (panel) => (event, newExpanded) => {
setExpanded(newExpanded ? panel : false);
};

return (
    <>
  <Box>
            <Typography sx={reportStyles.UnitHeaderText}>Sell Payment Report</Typography>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={reportStyles.filtercontainer}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{color:'#7009ab !IMPORTANT',boxShadow:'0px 0px 2px #00000047',}}><Typography sx={{fontSize:'20px'}}><FilterAltIcon /> Filter</Typography></AccordionSummary>
                        <AccordionDetails >
                            <br /> 
                        <Grid container spacing={2}>
                            <Grid item sm={12} xs={12} md={6} lg={3}>
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={reportStyles.spanIcons}><FaUser /></Grid>
                                        <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                                            <InputLabel id="demo-select-small">Customer</InputLabel>
                                                <Select
                                                    labelId="demo-select-small"
                                                    sx={{borderRadius:'0px !important',
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        border: '1px solid #B97DF0',
                                                        borderRadius:'0px !important',
                                                    },}}
                                                    id="demo-select-small"
                                                    label='Customer'
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
                            <Grid item sm={12} xs={12} md={6} lg={3}>
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={reportStyles.spanIcons}><FaMapMarker /></Grid>
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
                                                    label='Customer'
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
                                    <Grid item sm={12} xs={12} md={6} lg={3}>
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={reportStyles.spanIcons}><FaMoneyBill /></Grid>
                                                <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                                                <InputLabel id="demo-select-small">Payment Method</InputLabel>
                                                    <Select
                                                            labelId="demo-select-small"
                                                            sx={{borderRadius:'0px !important',
                                                            '& .MuiOutlinedInput-notchedOutline': {
                                                                border: '1px solid #B97DF0',
                                                                borderRadius:'0px !important',
                                                            },}}
                                                            id="demo-select-small"
                                                            label='Payment Method'
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
                                        <Grid item sm={12} xs={12} md={6} lg={3}>
                                            <Grid sx={{ display: 'flex' }}  >
                                                <Grid sx={reportStyles.spanIcons}><FaUsers /></Grid>
                                                    <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                                                        <InputLabel id="demo-select-small">Customer Group</InputLabel>
                                                            <Select
                                                                    labelId="demo-select-small"
                                                                    sx={{borderRadius:'0px !important',
                                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                                        border: '1px solid #B97DF0',
                                                                        borderRadius:'0px !important',
                                                                    },}}
                                                                    id="demo-select-small"
                                                                    label='Customer Group'
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
                                            </Grid>
                                        <br />
                                        <Grid container spacing={2}>
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
                                    <Table aria-label="customized table" id="sellPayment">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left">Reference No</TableCell>
                                            <TableCell align="left">Paid on</TableCell>
                                            <TableCell align="left">Amount</TableCell>
                                            <TableCell align="left">Customer</TableCell>
                                            <TableCell align="left">Customer Group</TableCell>
                                            <TableCell align="left">Payment Method</TableCell>
                                            <TableCell align="left">Sell</TableCell>
                                            <TableCell align="left">Action</TableCell>
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
                                            <TableCell align="left"></TableCell>
                                        </TableRow>
                                    </TableBody>
                                    <TableFooter sx={{height:'50px',backgroundColor:'#8080806e',textAlign:'center !important'}}>
                                        <TableRow> 
                                            <TableCell align="left"sx={reportStyles.footerStyle} colspan={3}>Total</TableCell>
                                            <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
                                            <TableCell align="left"sx={reportStyles.footerStyle} colspan={4}></TableCell>
                                        
                                        </TableRow>
                                    </TableFooter>
                                    </Table>
                                </TableContainer>                                 
                        </Box>
                </>
                
    );
}


export default SellPayment;