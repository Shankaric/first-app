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


//  JQUERY 
  $(document).ready(function () {
    setTimeout(function(){
    $('#barcode').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});


 
function Barcode(){

  
 return(

        <Box sx={ProductStyle.importProductsContainer}>
          <Typography  sx={ProductStyle.UnitHeaderText}>Units <Typography  sx={ProductStyle.UnitSubHeaderText}>Manage your units</Typography></Typography>
            <Box sx={ProductStyle.ProductContainer}>
            <Grid container spacing={2}>
                  <Grid item xs={8}>
                      <Typography  sx={ProductStyle.boxheadertxt}>All your units</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <UnitAddModal></UnitAddModal>
                  </Grid>
                    
              </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Typography  className=""></Typography>
                        </Grid>
                        <Grid item xs={7}>
                        <>
                            <Button variant="outlined" sx={ProductStyle.exportBtnText}>&ensp;<FaFileExcel/> Export to csv&ensp;</Button>
                            <Button variant="outlined" sx={ProductStyle.exportBtnText}>&ensp;<FaFileExcel/> Export to Excel&ensp;</Button>
                            <Button variant="outlined" sx={ProductStyle.exportBtnText}>&ensp;<FaPrint/> Print&ensp;</Button>
                            <Button variant="outlined" sx={ProductStyle.exportBtnText}>&ensp;<FaFilePdf/> Export to PDF&ensp;</Button>
                        </>
                        </Grid>
                        <Grid item xs={2}>
                     
                        </Grid>
                    </Grid>
                    <br />
                    <Box>
                    <TableContainer component={Paper} sx={{boxShadow:'none'}}>
                  <Typography>All your invoice schemes</Typography>
                    <Button sx={SettingStyle.boxAddButton} onClick={handleClickOpen} >Add</Button>
                        <Table aria-label="customized table" id="orders" sx={{margin:'20px'}}>
                        <TableHead>
                            <TableRow>
                              <TableCell align="left">Name&ensp;<FcInfo/></TableCell>
                              <TableCell align="left">Prrefix&ensp;<FcInfo/></TableCell>
                              <TableCell align="left">Start from&ensp;<FcInfo/></TableCell>
                              <TableCell align="left">Invoice count&ensp;<FcInfo/></TableCell>
                              <TableCell align="left">Number of digits&ensp;<FcInfo/></TableCell>
                              <TableCell align="left">Action&ensp;<FcInfo/></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                              <TableCell align="left">Defaut&ensp;&ensp;&ensp;&ensp;<Badge badgeContent={'Default'} color="success"/> </TableCell>
                              <TableCell align="left"></TableCell>
                              <TableCell align="left"></TableCell>
                              <TableCell align="left"></TableCell>
                              <TableCell align="left"></TableCell>
                              <TableCell align="left">
                                  <Button variant="contained" size='small' color="primary" sx={{textTransform: 'Capitalize',padding:'2PX'}}><FaEdit/>&ensp;Edit</Button>&ensp;
                                 <Button variant="contained" color="error" size="small" sx={{ textTransform: 'Capitalize',padding:'2px'}}><FaTrash></FaTrash>&ensp;Delete</Button>&ensp;
                                 <Button variant="contained" color="success" size="small" sx={{ textTransform: 'Capitalize',padding:'2px'}}>Default</Button>
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
export default Barcode;

