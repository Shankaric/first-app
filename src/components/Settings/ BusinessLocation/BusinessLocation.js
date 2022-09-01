import React from 'react';
import { Button, Grid ,Box,Typography ,Table,TableRow,TableHead,TableContainer,TableBody,TableCell,Paper} from '@mui/material';

import {FaTrash,FaFileExcel,FaPrint,FaFilePdf} from 'react-icons/fa'
import {AiFillTool} from 'react-icons/ai'

//jquery
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';

import {SettingStyle} from '../SettingStyle';
import BusinessLocCreate from './Create';
import BusinessLocEdit from './Edit';



//  JQUERY 
  $(document).ready(function () {
    setTimeout(function(){
    $('#BusinessLocation').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});

 
function BusinessLocation(){
  
 return(

        <Box>
          <Typography  sx={SettingStyle.UnitHeaderText}>Business Locations <Typography  sx={SettingStyle.UnitSubHeaderText}>Manage your business locations</Typography></Typography>
            <Box sx={SettingStyle.container}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography  sx={SettingStyle.boxheadertxt}>All your business locations</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <BusinessLocCreate></BusinessLocCreate>
                    </Grid>
                </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Typography  className=""></Typography>
                        </Grid>
                        <Grid item xs={7}>
                             <>
                            <Button variant="outlined" sx={SettingStyle.exportBtnText}>&ensp;<FaFileExcel/> Export to csv&ensp;</Button>
                            <Button variant="outlined" sx={SettingStyle.exportBtnText}>&ensp;<FaFileExcel/> Export to Excel&ensp;</Button>
                            <Button variant="outlined" sx={SettingStyle.exportBtnText}>&ensp;<FaPrint/> Print&ensp;</Button>
                            <Button variant="outlined" sx={SettingStyle.exportBtnText}>&ensp;<FaFilePdf/> Export to PDF&ensp;</Button>
                             </>
                        </Grid>
                        <Grid item xs={2}>
                     
                        </Grid>
                    </Grid>
                    <br />
            <Box>
                <TableContainer component={Paper} sx={SettingStyle.tablecontainer}>
                      <Table aria-label="customized table" id="BusinessLocation" sx={{margin:'20px'}}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name:</TableCell>
                                <TableCell align="left">Location ID</TableCell>
                                <TableCell align="left">Landmark</TableCell>
                                <TableCell align="left">City</TableCell>
                                <TableCell align="left">Zip code</TableCell>
                                <TableCell align="left">State</TableCell>
                                <TableCell align="left">Country</TableCell>
                                <TableCell align="left">Price Group</TableCell>
                                <TableCell align="left">Invoice scheme</TableCell>
                                <TableCell align="left">Incoice layout for POS</TableCell>
                                <TableCell align="left">Incoice layout for Sale</TableCell>
                                <TableCell align="left">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row"> XYZ </TableCell>
                                <TableCell align="left">123</TableCell>
                                <TableCell align="left">CHENNAI</TableCell>
                                <TableCell align="left">123</TableCell>
                                <TableCell align="left">123</TableCell>
                                <TableCell align="left">123</TableCell>
                                <TableCell align="left">123</TableCell>
                                <TableCell align="left">123</TableCell>
                                <TableCell align="left">123</TableCell>
                                <TableCell align="left">123</TableCell>
                                <TableCell align="left">123</TableCell>
                                <TableCell align="left">    
                                <BusinessLocEdit></BusinessLocEdit>   &ensp;    
                                <Button variant="contained" color="success" size="small" sx={{ textTransform: 'Capitalize',padding:'2PX'}}><AiFillTool size={16}></AiFillTool>&ensp;Settings</Button>
                                <Button variant="contained" color="error" size="small" sx={{ textTransform: 'Capitalize',padding:'2px'}}><FaTrash></FaTrash>&ensp;Deactivate Location</Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                    </Box>
                 </Box>
            </Box>

     );
 }
export default BusinessLocation;

