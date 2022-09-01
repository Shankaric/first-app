import React from 'react';
import { Button, Grid ,Box,Typography ,Table,TableRow,TableHead,TableContainer,TableBody,TableCell,Paper} from '@mui/material';
import {FcInfo} from 'react-icons/fc';
import {FaTrash,FaFileExcel,FaPrint,FaFilePdf} from 'react-icons/fa'
import {AiFillTool} from 'react-icons/ai'

//jquery
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';

import {SettingStyle} from '../SettingStyle';
import TaxCreate from './Create';
import TaxEdit from './Edit';
import TaxGrpCreate from './TaxGrpCreate';
import TaxGrpEdit from './TaxGrpEdit';




//  JQUERY 
  $(document).ready(function () {
    setTimeout(function(){
    $('#taxGrp').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});


//  JQUERY 
$(document).ready(function () {
  setTimeout(function(){
  $('#taxUnit').DataTable({
    language: {search: '', searchPlaceholder: "Search..."},
    lengthMenu: [25, 50, 100, 200, 500, 1000],
    // overflow-X: true
  });
   } ,1000);
});



 
function TaxRates(){
  
 
 return(
  <>
        <Box sx={SettingStyle.importProductsContainer}>
          <Typography  sx={SettingStyle.UnitHeaderText}>Tax Rates  <Typography  sx={SettingStyle.UnitSubHeaderText}>Manage your tax rates</Typography></Typography>
            <Box sx={SettingStyle.container}>
            <Grid container spacing={2}>
                  <Grid item xs={8}>
                      <Typography  sx={SettingStyle.boxheadertxt}>All your tax rates</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TaxCreate></TaxCreate>
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
                      <Table sx={{ margin:'20px'}} aria-label="customized table" id="taxUnit">
                        <TableHead>
                          <TableRow>
                            <TableCell>Name:</TableCell>
                            <TableCell align="left">Tax Rate %</TableCell>
                            <TableCell align="left">Action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                           <TableRow>
                              <TableCell component="th" scope="row"> Pieces </TableCell>
                              <TableCell align="left">No</TableCell>
                              <TableCell align="left">    
                                   <TaxEdit></TaxEdit>&ensp;                 
                                <Button variant="contained" color="error" size="small" sx={{ textTransform: 'Capitalize'}}><FaTrash></FaTrash>&ensp;Delete</Button>
                              </TableCell>
                            </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>

                    </Box>
            </Box>

 
        </Box>
        <br />
            <Box sx={SettingStyle.container}>
            <Grid container spacing={2}>
                  <Grid item xs={8}>
                      <Typography  sx={SettingStyle.boxheadertxt}>Tax groups ( Combination of multiple taxes ) &ensp; <FcInfo/></Typography>
                  </Grid>
                  <Grid item xs={4}>
                        <TaxGrpCreate></TaxGrpCreate>
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
                      <Table sx={{ margin:"20px" }} aria-label="customized table" id="taxGrp">
                        <TableHead>
                          <TableRow>
                            <TableCell>Name:</TableCell>
                            <TableCell align="left">Tax rate %</TableCell>
                            <TableCell align="left">Sub taxes</TableCell>
                            <TableCell align="left">Action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                           <TableRow>
                              <TableCell component="th" scope="row"> Pieces </TableCell>
                              <TableCell align="left">Pc(s)</TableCell>
                              <TableCell align="left">No</TableCell>
                              <TableCell align="left">    
                              <TaxGrpEdit></TaxGrpEdit>   &ensp;                 
                                <Button variant="contained" color="error" size="small" sx={{ textTransform: 'Capitalize'}}><FaTrash></FaTrash>&ensp;Delete</Button>
                              </TableCell>
                            </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>

                    </Box>
            </Box>

</>
   );
 }
export default TaxRates;

