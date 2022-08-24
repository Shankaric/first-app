import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

export default function Importcontacts() {
  return (
    <TableContainer component={Paper} sx={{
         padding:1,
      width:'100%',
      // height:400,
      margin:'auto',
      overflow:'auto',
       "&::-webkit-scrollbar":{
        width:20
      },
      "&::-webkit-scrollbar-track":{
        backgroundColor:'pink'
      },
      "&::-webkit-scrollbar-thumb":{
        backgroundColor:'blue'
      }
    }} >
        <Table md={{ minWidth: 200,maxHeight:'5px',overflow: 'auto'}} aria-label="customized table">
    
        <TableBody>
         
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">1</StyledTableCell>
                <StyledTableCell align="left">Available Options:<br /> <p className="importTableBoldText">1 = Customer,<br />2 = Supplier <br />3 = Both</p></StyledTableCell>
            
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">2</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">3</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">4</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">5</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">6</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">7</StyledTableCell>
                <StyledTableCell align="left"><p className="importTabledata">Leave blank to auto generate Contact ID</p></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">8</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">9</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">10</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">11</StyledTableCell>
                <StyledTableCell align="left"><p className="importTableBoldText">Available Options: days and months</p></StyledTableCell>
            </StyledTableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}
