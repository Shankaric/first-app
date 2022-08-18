import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import {FaEdit,FaTrash} from 'react-icons/fa';


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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
 
];

export default function VariationTablestriped() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table" id="example1">
        <TableHead>
          <TableRow>
            <StyledTableCell>Variations</StyledTableCell>
            <StyledTableCell align="left">Values</StyledTableCell>
            <StyledTableCell align="left">Action</StyledTableCell>
    
          </TableRow>
        </TableHead>
        <TableBody>
               <StyledTableRow>
              <StyledTableCell component="th" scope="row"> test </StyledTableCell>
              <StyledTableCell align="left">one</StyledTableCell>
               <StyledTableCell align="left">
                
              <Button variant="contained" size="small" sx={{ textTransform: 'Capitalize'}}><FaEdit></FaEdit>&ensp;Edit</Button>&ensp;
              <Button variant="contained" color="error" size="small" sx={{ textTransform: 'Capitalize'}}><FaTrash></FaTrash>&ensp;Delete</Button>

              </StyledTableCell>
             
            </StyledTableRow>
             
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}
