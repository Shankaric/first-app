import React,{useEffect, useState} from 'react';
import { Button, Grid ,Typography } from '@mui/material';

// dialogbox
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

// inputfield
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


// animation
import Zoom from '@mui/material/Zoom';

//Table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {FaEdit,FaTrash,FaFileExcel,FaPrint,FaFilePdf} from 'react-icons/fa'

//jquery
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';

//Style
import {ProductStyle} from '../ProductStyle';
import WarrentyEditModal from './Edit';
import WarrentyAddModal from './Create';

// TABLE THEME
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

// ZOOM ANIMATION
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Zoom timeout={500} ref={ref} {...props} />;
  });


 
//  JQUERY 
  $(document).ready(function () {
    setTimeout(function(){
    $('#example').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});


  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
     
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

 
function Warranties(){
  


 return(

        <Box sx={ProductStyle.importProductsContainer}>
          <Typography  sx={ProductStyle.UnitHeaderText}>Warranties <Typography  sx={ProductStyle.UnitSubHeaderText}></Typography></Typography>
            <Box sx={ProductStyle.ProductContainer}>
            <Grid container spacing={2}>
                  <Grid item xs={8}>
                      <Typography  sx={ProductStyle.boxheadertxt}>All Warranties</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <WarrentyAddModal></WarrentyAddModal>
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
                    <TableContainer component={Paper} sx={ProductStyle.tablecontainer}>
                      <Table sx={{ minWidth: 700 }} aria-label="customized table" id="example">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="left">Discription</StyledTableCell>
                            <StyledTableCell align="left">Duration</StyledTableCell>
                            <StyledTableCell align="left">Action</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                           <StyledTableRow>
                              <StyledTableCell component="th" scope="row"> Pieces </StyledTableCell>
                              <StyledTableCell align="left">Pc(s)</StyledTableCell>
                              <StyledTableCell align="left">No</StyledTableCell>
                              <StyledTableCell align="left">      
                                <WarrentyEditModal></WarrentyEditModal>    &ensp;              
                                <Button variant="contained" color="error" size="small" sx={{ textTransform: 'Capitalize'}}><FaTrash></FaTrash>&ensp;Delete</Button>
                              </StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>

                    </Box>
            </Box>
 
  
        </Box>


 );
              }
export default Warranties;

