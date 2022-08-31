import React,{ useState} from 'react';
import {Typography,Select,FormControl,MenuItem, Grid, InputLabel, Box, Button,Table,TableBody,TableCell,TableContainer,Tabs,TableHead,TableRow,Paper, TableFooter } from '@mui/material';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

//FONTAWESOME
import { FaFileCsv, FaPrint,FaMapMarker,FaFileAlt, FaUser,FaFilePdf,FaCalendar,FaCubes,FaTags } from "react-icons/fa";
import { FcInfo } from "react-icons/fc";

import { AiFillFileExcel } from "react-icons/ai";

import {reportStyles} from './reportStyles'


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
  


function PurchasesSale(){


   return(

    <Box>

    <br /><br />
    <Typography sx={reportStyles.UnitHeaderText}>Stock Adjustment Report</Typography>

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
                <TableContainer component={Paper} sx={{ padding:1, width:'100%',  margin:'auto', overflow:'auto',  boxShadow:'none',  "&::-webkit-scrollbar":{ width:20  }, }} >
                    <Table aria-label="customized table">
                    <Typography variant='h6'>Purchases</Typography>  <br />  
                    <TableBody>    
                        <StyledTableRow>
                            <StyledTableCell><Typography sx={reportStyles.reportTableBoldtxt}>Total Normal:	</Typography></StyledTableCell>
                            <StyledTableCell align="left">₹ 0.00</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell><Typography sx={reportStyles.reportTableBoldtxt}>Total Abnormal:	</Typography></StyledTableCell>
                            <StyledTableCell align="left">₹ 0.00</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell><Typography sx={reportStyles.reportTableBoldtxt}>Total Stock Adjustment:	</Typography></StyledTableCell>
                            <StyledTableCell align="left">₹ 0.00</StyledTableCell>
                        </StyledTableRow>
                    
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
</Grid>
        <Grid item xs={6} md={6}>
             <Box sx={reportStyles.container}>
                <TableContainer component={Paper} sx={{ padding:1, width:'100%',  margin:'auto', overflow:'auto',  boxShadow:'none',  "&::-webkit-scrollbar":{ width:20  }, }} >
                        <Table aria-label="customized table">
                        <Typography variant='h6'>Sales</Typography>  <br />  
                        <TableBody>        
                            <StyledTableRow>
                                <StyledTableCell><Typography sx={reportStyles.reportTableBoldtxt}>Total Amount Recovered:	</Typography></StyledTableCell>
                                <StyledTableCell align="left">₹ 0.00</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell><Typography sx={reportStyles.reportTableBoldtxt}></Typography></StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell><Typography sx={reportStyles.reportTableBoldtxt}></Typography></StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
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
        <Typography variant='h6'> Overall (Sale - Sale Return - Purchase - Purchase Return) &ensp;<FcInfo></FcInfo></Typography>
       
        <br />    <br />
        <Typography variant='h5' sx={{display:'flex'}}>Sale - Purchase:<Typography variant='h5' sx={{color:'green'}}>₹ 8,593.75</Typography></Typography>
        <Typography variant='h5'>Due amount: ₹ 0.00</Typography>
    </Box>

    <br />
    <Box sx={{float:'right'}}>
        <Button color='primary' variant='contained'><FaPrint></FaPrint>&ensp;Print</Button>
    </Box>
    <br />
    <br />
    <br />
</Box>
 
    );              
}
export default PurchasesSale;

