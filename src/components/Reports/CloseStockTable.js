import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
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

export default function CloseStockTable() {
  return (
    <TableContainer component={Paper} sx={{
         padding:1,
      width:'100%',
      margin:'auto',
      overflow:'auto',
      boxShadow:'none',
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
        <Table style={{ minWidth: 200}} aria-label="customized table">
          <TableBody>        
              <StyledTableRow>
                  <StyledTableCell><Typography sx={reportStyles.reportTableBoldtxt}>Opening  stock</Typography><Typography sx={reportStyles.reportTabletxt}>(By purchase price):</Typography></StyledTableCell>
                  <StyledTableCell align="left">₹ 37,109.42</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                  <StyledTableCell><Typography sx={reportStyles.reportTableBoldtxt}>Opening stock</Typography><Typography sx={reportStyles.reportTabletxt}>(By sale price):</Typography></StyledTableCell>
                  <StyledTableCell align="left">₹ 37,109.42</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                  <StyledTableCell><Typography sx={reportStyles.reportTableBoldtxt}>Total Sales:</Typography><Typography sx={reportStyles.reportTabletxt}>(Exc. tax, Discount)</Typography></StyledTableCell>
                  <StyledTableCell align="left">₹ 8,593.75</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                  <StyledTableCell><Typography sx={reportStyles.reportTableBoldtxt}>Total sell shipping charge:	</Typography></StyledTableCell>
                  <StyledTableCell align="left">₹ 8,593.75</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                  <StyledTableCell><Typography sx={reportStyles.reportTableBoldtxt}>Total Stock Recovered:</Typography></StyledTableCell>
                  <StyledTableCell align="left">₹ 0.00</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                  <StyledTableCell><Typography sx={reportStyles.reportTableBoldtxt}>Total Purchase Return:	</Typography></StyledTableCell>
                  <StyledTableCell align="left">₹ 0.00</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                  <StyledTableCell><Typography sx={reportStyles.reportTableBoldtxt}>Total Purchase discount:	</Typography></StyledTableCell>
                  <StyledTableCell align="left">₹ 0.00</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                  <StyledTableCell><Typography sx={reportStyles.reportTableBoldtxt}>Total sell round off:	</Typography></StyledTableCell>
                  <StyledTableCell align="left">₹ 0.00</StyledTableCell>
              </StyledTableRow>
          </TableBody>
      </Table>
    </TableContainer>
  );
}
