import React, {useEffect} from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { FaDownload } from 'react-icons/fa';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Box from '@mui/material/Box';

import {ProductStyle} from './ProductStyle';

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

function ImportContactFinal() {
    useEffect(() => {
        document.body.classList.add('importbody');
    });
    return (
        <Box>
            <Typography sx={ProductStyle.UnitHeaderText}>Import Contacts</Typography>
            <Box sx={ProductStyle.ImportContainer}>
            <h3>File to import</h3>
            
            <Grid container spacing={2}>
                <Grid item md={8}>
                <Button variant="contained" component="label" sx={{ textTransform: 'Capitalize', backgroundColor: '#7009ab !important',color:'white'}}>
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                    </Button>
                </Grid>
                <Grid item md={4}>
                    <Button variant="contained" color="primary" sx={{ textTransform: 'Capitalize', backgroundColor: '#7009ab !important',color:'white'}}>Submit</Button>
                </Grid>   
            </Grid>
            <br /><br />    
            <Button variant="contained" color="success" sx={{ textTransform: 'Capitalize'}}><FaDownload/>&ensp;Download template file</Button>
            
        </Box><br />
        <Box sx={ProductStyle.ImportContainer}>
        <Typography sx={ProductStyle.importheadtext}>Instructions</Typography>
        <br />
        <Typography sx={ProductStyle.importsubheadtex}>Follow the instructions carefully before importing the file</Typography>
        <Typography sx={ProductStyle.importsubheadtext}>The columns of the file should be in the following order.</Typography>
        <br /><br />
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
        <TableHead >
          <TableRow>
            <StyledTableCell sx={ProductStyle.tableHead}>Column Number</StyledTableCell>
            <StyledTableCell sx={ProductStyle.tableHead} align="left">Column Name</StyledTableCell>
            <StyledTableCell sx={ProductStyle.tableHead} align="left">Instruction</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">1</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Contact type </Typography> <Typography>(Required)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left">Available Options:<br /> <Typography sx={ProductStyle.importTableBoldText}>1 = Customer,<br />2 = Supplier <br />3 = Both</Typography></StyledTableCell>    
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">2</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Prefix  </Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                <StyledTableCell></StyledTableCell>            
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">3</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>First Name </Typography> <Typography>(Required)</Typography></Box>	</StyledTableCell>
                <StyledTableCell></StyledTableCell>                      
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">4</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Middle name   </Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                <StyledTableCell></StyledTableCell>            
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">5</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Last Name</Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                <StyledTableCell></StyledTableCell>            
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">6</StyledTableCell>
                <StyledTableCell  align="left"><Typography sx={ProductStyle.importTabledata}>Business Name </Typography> <Typography>(Required if contact type is supplier or both)</Typography></StyledTableCell>
                <StyledTableCell></StyledTableCell>            
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">7</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Contact ID</Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"><Typography sx={ProductStyle.importTabledata}>	Leave blank to auto generate Contact ID</Typography></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">8</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Tax number  </Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                <StyledTableCell></StyledTableCell>  
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">9</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Opening Balance</Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                <StyledTableCell></StyledTableCell>  
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">10</StyledTableCell>
                <StyledTableCell  align="left"><Typography sx={ProductStyle.importTabledata}>Pay term</Typography> <Typography>(Required if contact type is supplier or both)</Typography></StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">11</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>	Pay term period</Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                <StyledTableCell><Typography  sx={ProductStyle.importTableBoldText}>Available Options: days and months</Typography></StyledTableCell>  
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">12</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Credit Limit</Typography> <Typography>(Optional)</Typography>	</Box></StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">13</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Email </Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">14</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Mobile </Typography> <Typography>(Required)</Typography>	</Box></StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">15</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Alternate contact number</Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">16</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Landline  </Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                 <StyledTableCell  component="th" scope="row">17</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>City </Typography> <Typography>(Optional)</Typography></Box></StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                 <StyledTableCell  component="th" scope="row">18</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>State  </Typography> <Typography>(Optional)</Typography></Box></StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                 <StyledTableCell  component="th" scope="row">19</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>Country  </Typography> <Typography>(Optional)</Typography></Box></StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                 <StyledTableCell  component="th" scope="row">20</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>	Address line 1 </Typography> <Typography>(Optional)</Typography></Box></StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                 <StyledTableCell  component="th" scope="row">21</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>	Address line 2 </Typography> <Typography>(Optional)</Typography></Box></StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                 <StyledTableCell  component="th" scope="row">22</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>	Zip Code </Typography> <Typography>(Optional)</Typography></Box></StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                 <StyledTableCell  component="th" scope="row">23</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>	Date of birth  </Typography> <Typography>(Optional)</Typography></Box></StyledTableCell>
                <StyledTableCell  align="left"><Typography sx={ProductStyle.importTabledata}>	Format Y-m-d (2022-08-22)</Typography></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                 <StyledTableCell  component="th" scope="row">24</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>	Custom Field 1 </Typography> <Typography>(Optional)</Typography></Box></StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                 <StyledTableCell  component="th" scope="row">25</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>	Custom Field 2 </Typography> <Typography>(Optional)</Typography></Box></StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                 <StyledTableCell  component="th" scope="row">26</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>	Custom Field 3 </Typography> <Typography>(Optional)</Typography></Box></StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                 <StyledTableCell  component="th" scope="row">27</StyledTableCell>
                <StyledTableCell  align="left"><Box sx={{display:'flex',gap:'2px'}}><Typography sx={ProductStyle.importTabledata}>	Custom Field 4 </Typography> <Typography>(Optional)</Typography></Box></StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
    
    </Box>
    </Box>
    );
    
}
export default ImportContactFinal;