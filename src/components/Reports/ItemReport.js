import React, { useState } from "react";
import { Box, AccordionSummary, Typography,Button, Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,
     Grid,TableFooter, InputLabel, Accordion,AccordionDetails,FormControl, MenuItem, Select } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {reportStyles} from './reportStyles';
import { FaMapMarker,FaUser,FaFileCsv, FaPrint, FaFilePdf,} from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";

//jquery
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';

// import PurchaseTable from './PurchaseTable';
import "rsuite/dist/rsuite.css";
// import Sidebar from '../../../header/Sidebar';

import { DateRangePicker } from 'rsuite';

 //  JQUERY
 $(document).ready(function () {
    setTimeout(function(){
    $('#ItemReport').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});



function ItemReport() {


// accordian
const [expanded, setExpanded] = useState('panel1');

const handleChange = (panel) => (event, newExpanded) => {
setExpanded(newExpanded ? panel : false);
};

return (
<>
<Box>
<Typography sx={reportStyles.UnitHeaderText}>Product Purchase Report</Typography>
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={reportStyles.filtercontainer}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{color:'#7009ab !IMPORTANT',boxShadow:'0px 0px 2px #00000047',}}><Typography sx={{fontSize:'20px'}}><FilterAltIcon /> Filter</Typography></AccordionSummary>
            <AccordionDetails >
                        <br /> 
                <Grid container spacing={2}>
                    <Grid item sm={12} xs={12} md={6} lg={3}>
                        <Grid sx={{ display: 'flex' }}  >
                            <Grid sx={reportStyles.spanIcons}><FaUser /></Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                                <InputLabel id="demo-select-small">Supplier</InputLabel>
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
                                        
                                            <MenuItem value={1}>None</MenuItem>
                                            <MenuItem value={2}>xxx</MenuItem>
                                        </Select>   
                                    </FormControl>
                                </Grid>
                         </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={3}>
                         <DateRangePicker size="lg" fullWidth style={{width:'100%', border: '1px solid #B97DF0'}}  />
                    </Grid>
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
                                        
                                            <MenuItem value={1}>Please Select</MenuItem>
                                            <MenuItem value={2}>xxx</MenuItem>
                                        </Select>   
                                    </FormControl>
                                </Grid>
                        </Grid>
                        <Grid item sm={12} xs={12} md={6} lg={3}>
                            <DateRangePicker size="lg" fullWidth style={{width:'100%', border: '1px solid #B97DF0'}}  />
                        </Grid>
                  </Grid> 
                  <br />
                  <Grid container spacing={2}>
                    <Grid item sm={12} xs={12} md={6} lg={3}>
                        <Grid sx={{ display: 'flex' }}  >
                            <Grid sx={reportStyles.spanIcons}><FaMapMarker /></Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                                <InputLabel id="demo-select-small">Business Location</InputLabel>
                                    <Select labelId="demo-select-small" sx={{borderRadius:'0px !important', '& .MuiOutlinedInput-notchedOutline': { border: '1px solid #B97DF0', borderRadius:'0px !important', },}}
                                            id="demo-select-small"
                                            label='Customer'
                                            // value={ProfitLoss.ProfitAddLocation}
                                            // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
                                            fullWidth >
                                            <MenuItem value={1}>Please Select</MenuItem>
                                            <MenuItem value={2}>xxx</MenuItem>
                                        </Select>   
                                    </FormControl>
                                </Grid>
                        </Grid>
                    </Grid> 
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
                                <Table aria-label="customized table" id="ItemReport">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Product</TableCell>
                                        <TableCell align="left">SKU</TableCell>
                                        <TableCell align="left">Description</TableCell>
                                        <TableCell align="left">Purchase Date</TableCell>
                                        <TableCell align="left">Purchase</TableCell>
                                        <TableCell align="left">Supplier</TableCell>
                                        <TableCell align="left">Purchase Price</TableCell>
                                        <TableCell align="left">Sell Date</TableCell>
                                        <TableCell align="left">Sale</TableCell>
                                        <TableCell align="left">Customer</TableCell>
                                        <TableCell align="left">Location</TableCell>
                                        <TableCell align="left">Quantity</TableCell>
                                        <TableCell align="left">Selling Price</TableCell>
                                        <TableCell align="left">Subtotal</TableCell>
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
                                        <TableCell sx={reportStyles.footerStyle} colspan={6}>Total</TableCell>
                                        <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
                                        <TableCell align="left"sx={reportStyles.footerStyle} colspan={4}></TableCell>
                                        <TableCell align="left"sx={reportStyles.footerStyle}></TableCell>
                                        <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
                                        <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
                                    </TableRow>
                                </TableFooter>
                                </Table>
                            </TableContainer>                                                      
                        </Box>

            </>
    
    );
}
export default ItemReport;