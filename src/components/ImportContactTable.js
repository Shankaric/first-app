import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../css/import.css';

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
        <TableHead>
          <TableRow>
            <StyledTableCell className="firstcolumn">Column Number</StyledTableCell>
            <StyledTableCell className="secondcolumn" align="left">Column Name</StyledTableCell>
            <StyledTableCell className="thirdcolumn" align="left">Instruction</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
         
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">1</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Contact type</span> <span>(Required)</span>	</StyledTableCell>
                <StyledTableCell align="left">Available Options:<br /> <p className="importTableBoldText">1 = Customer,<br />2 = Supplier <br />3 = Both</p></StyledTableCell>
            
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">2</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Prefix </span> <span>(Required)</span>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">3</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">First Name </span> <span>(Required)</span>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">4</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Middle Name </span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">5</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Last Name </span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">6</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Business Name </span> <span>(Required if contact type is supplier or both)</span>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">7</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">	Contact ID</span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"><p className="importTabledata">Leave blank to auto generate Contact ID</p></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">8</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Tax number</span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">9</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">	Opening Balance</span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">10</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Pay term</span> <span>(Required if contact type is supplier or both)</span>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">11</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Pay term period</span> <span>(Required if contact type is supplier or both)</span>	</StyledTableCell>
                <StyledTableCell align="left"><p className="importTableBoldText">Available Options: days and months</p></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">12</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Credit Limit </span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">13</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Email </span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">14</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Mobile </span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">15</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Alternate contact number </span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">16</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Landline </span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">17</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">City </span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">18</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">State </span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">19</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Country  </span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">20</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Address line 1 </span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">21</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Address line 2 </span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">22</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Zip Code </span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">23</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Date of birth </span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"><p className="importTabledata">Format Y-m-d (2022-08-13)</p></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">24</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Custom Field 1 </span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">25</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Custom Field 2 </span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">26</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Custom Field 3 </span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">27</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Custom Field 4 </span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
