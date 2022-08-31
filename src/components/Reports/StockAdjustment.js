import React from 'react';
import {Typography,Select,FormControl,MenuItem, Grid, InputLabel, Box, Button,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

//FONTAWESOME
import { FaFileCsv, FaPrint,FaMapMarker,FaFilePdf } from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";

import {reportStyles} from './reportStyles'
//jquery
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
  
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.action.hover,
    },
    
    root: {
  
      overflowX: "auto"
    },
    table: {
      minWidth: 700
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
 //  JQUERY
 $(document).ready(function () {
    setTimeout(function(){
    $('#StockAdjust').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});

function StockAdjustment(){
    
 return(

    <Box>
        <br /><br />
        <Typography sx={reportStyles.UnitHeaderText}>Stock Adjustment Report </Typography>
            <Grid container spacing={2}>
                <Grid item xs={5} md={5}>

                </Grid>
                <Grid item xs={4} md={4}>                        
                    <Grid sx={{ display: 'flex' }}  >
                        <Grid sx={{ fontSize: '20px', border: '1px solid #B97DF0', width: '33px', height: '40px', backgroundColor: '#B97DF0',paddingTop:'6px', color: '#fff',textAlign:'center', justfyContent:'center' }} ><FaMapMarker/></Grid>
                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                <InputLabel id="demo-select-small">All locations</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        sx={{borderRadius:'0 !important'}}
                                        id="demo-select-small"
                                        label='All locations'
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
                <Grid item xs={3} md={3}>
                {/* <DateRangePickers></DateRangePickers> */}
                </Grid>
            </Grid>   
        <br /><br />  
        {/* Table */}
        <Grid container spacing={1}>
                <Grid item xs={6} md={6}>
                    <Box sx={reportStyles.container}>
                        <TableContainer component={Paper} sx={{ padding:1, width:'100%',minHeight:'180px', margin:'auto', overflow:'auto',  boxShadow:'none',  "&::-webkit-scrollbar":{ width:20  }, }} >
                            <Table aria-label="customized table">
                            <TableBody>    
                                <StyledTableRow>
                                    <StyledTableCell><Typography sx={reportStyles.reportTableBoldtxt}>Total Normal:	</Typography></StyledTableCell>
                                    <StyledTableCell align="left">₹ 0.00</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell><Typography sx={reportStyles.reportTableBoldtxt}>Total Abnormal:</Typography></StyledTableCell>
                                    <StyledTableCell align="left">₹ 0.00</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell><Typography sx={reportStyles.reportTableBoldtxt}>Total Stock Adjustment:</Typography></StyledTableCell>
                                    <StyledTableCell align="left">₹ 0.00</StyledTableCell>
                                </StyledTableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Grid>
                <Grid item xs={6} md={6}>
                    <Box sx={reportStyles.container}>
                        <TableContainer component={Paper} sx={{ padding:1, width:'100%',minHeight:'180px',  margin:'auto', overflow:'auto',  boxShadow:'none',  "&::-webkit-scrollbar":{ width:20  }, }} >
                                <Table aria-label="customized table">
                                <TableBody>        
                                    <StyledTableRow>
                                        <StyledTableCell><Typography sx={reportStyles.reportTableBoldtxt}>Total Amount Recovered:	</Typography></StyledTableCell>
                                        <StyledTableCell align="left">₹ 0.00</StyledTableCell>
                                    </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </Box>
                </Grid>
            </Grid>
        <br />
        {/* profit containers      */}

            <Box sx= {reportStyles.container}>
                    <TableContainer component={Paper} sx={{boxShadow:'none'}}>
                        <Grid container sx={reportStyles.grid_container}>    
                                <Grid>   
                                    <Button sx={reportStyles.button_grp}><FaFileCsv />&ensp;Export to CSV</Button>
                                    <Button sx={reportStyles.button_grp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                                    <Button sx={reportStyles.button_grp}><FaPrint />&ensp;Print</Button>
                                    <Button sx={reportStyles.button_grp}><FaFilePdf />&ensp;Export to PDF</Button>
                                </Grid>    
                            </Grid>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table" id="StockAdjust">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Action</TableCell>
                                    <TableCell align="left">Date</TableCell>
                                    <TableCell align="left">Reference No</TableCell>
                                    <TableCell align="left">Location</TableCell>
                                    <TableCell align="left">Adjustment Type</TableCell>
                                    <TableCell align="left">Total Amount</TableCell>
                                    <TableCell align="left">Total amount recovered</TableCell>
                                    <TableCell align="left">Reason</TableCell>
                                    <TableCell align="left">Added By</TableCell>
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

                                </TableRow>
                            </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                    <br />
                    <br />
                    <br />
        </Box>
 
    );              
}
export default StockAdjustment;

