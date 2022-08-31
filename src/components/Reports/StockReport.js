import React, { useState } from "react";
import { Box, AccordionSummary, Typography,Button, Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper, Grid,TableFooter, InputLabel,Accordion,AccordionDetails,FormControl, MenuItem, Select } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {reportStyles} from './reportStyles';
import {FaFileCsv, FaPrint, FaFilePdf, } from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";
//jquery
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';

 //  JQUERY
 $(document).ready(function () {
    setTimeout(function(){
    $('#StockReport').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});

function StockReport() {

// Accordion
const [expanded, setExpanded] = useState('panel1');

const handleChange = (panel) => (event, newExpanded) => {
setExpanded(newExpanded ? panel : false);
};

    return (
      <>
        <Box>
          <Typography sx={reportStyles.UnitHeaderText}>Stock Report</Typography>
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
                  </Grid>
                  <Box sx={{float:'right',margin:'10px',}}>
                        <Button size='small' variant='contained' color='primary' sx={{textTransform:'capitalize'}}>Apply Filters</Button>
                    </Box>
                </AccordionDetails> 
            </Accordion>
            </Box>
        <br />
  
            <Box sx={reportStyles.container}>     
                <Grid container spacing={2}>
                        <Grid item sm={12} xs={12} md={6} lg={3}>
                            <Typography>Closing stock (By purchase price)    </Typography><br />
                            <Typography variant='h5'>  ₹ 30,078.16  </Typography>

                        </Grid>
                        <Grid item sm={12} xs={12} md={6} lg={3}>
                            <Typography>Closing stock (By sale price)</Typography><br />
                            <Typography variant='h5'>  ₹ 30,078.16  </Typography>
                        </Grid>
                        <Grid item sm={12} xs={12} md={6} lg={3}>
                            <Typography> Potential profit</Typography><br />
                            <Typography variant='h5'>  ₹ 30,078.16  </Typography>
                        </Grid>
                        <Grid item sm={12} xs={12} md={6} lg={3}>
                            <Typography>Profit Margin % </Typography><br />
                            <Typography variant='h5'>  ₹ 30,078.16  </Typography>
                        </Grid>
                    </Grid>
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
                            <Table sx={{ minWidth: 700 }} aria-label="customized table" id="StockReport">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">SKU</TableCell>
                                    <TableCell align="left">Product</TableCell>
                                    <TableCell align="left">Location</TableCell>
                                    <TableCell align="left">Unit price</TableCell>
                                    <TableCell align="left">Current Stock</TableCell>
                                    <TableCell align="left">Current stock value(By purchase price)</TableCell>
                                    <TableCell align="left">Current stock value(By sale price)</TableCell>
                                    <TableCell align="left">Potential profit</TableCell>
                                    <TableCell align="left">Total unit sold</TableCell>
                                    <TableCell align="left">Total unit Transfered</TableCell>
                                    <TableCell align="left">Total unit Adjusted</TableCell> 
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
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
                            <TableFooter sx={{height:'50px',backgroundColor:'#8080806e',}}>
                                <TableRow>
                                    <TableCell sx={reportStyles.footerStyle} colspan={4}> Total </TableCell>
                                    <TableCell sx={reportStyles.footerStyle} align="left"> ₹ 0.00</TableCell>
                                    <TableCell sx={reportStyles.footerStyle} align="left"> ₹ 0.00</TableCell>
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


export default StockReport;