import React from 'react';
import { Button, Grid ,Typography,Box } from '@mui/material';

// animation
import Zoom from '@mui/material/Zoom';

//Table
import Table from '@mui/material/Table';
import {TableFooter,Menu} from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {FaFileCsv, FaPrint, FaFilePdf } from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";


//jquery
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';

import { PurchaseStyle } from './PurchaseStyle';
import { styled, alpha } from '@mui/material/styles';


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

  const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
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


  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
     
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
 
  }));
 
function PurchaseTable(){
  
 return(

    <>
            <Grid container>
                  <Grid item xs={8}>
                      <Typography  sx={PurchaseStyle.boxheadertxt}>All your Purchases</Typography>
                  </Grid>
                  <Grid item xs={4} sx={{textAlign:'right !important'}}>
                     <Button sx={PurchaseStyle.button_add}>Add</Button>
                 </Grid>
                   
              </Grid>
              <Grid container sx={PurchaseStyle.grid_container}>
                    
                            <Button sx={PurchaseStyle.button_grp}><FaFileCsv />&ensp;Export to CSV</Button>
                            <Button sx={PurchaseStyle.button_grp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                            <Button sx={PurchaseStyle.button_grp}><FaPrint />&ensp;Print</Button>
                            <Button sx={PurchaseStyle.button_grp}><FaFilePdf />&ensp;Export to PDF</Button>
                       
                    </Grid>
                 
                    <br />
                    <Box>
                    <TableContainer component={Paper} sx={PurchaseStyle.tablecontainer}>
                      <Table aria-label="customized table" id="example">
                        <TableHead>
                          <StyledTableRow>
                                <StyledTableCell> Action </StyledTableCell>
                                <StyledTableCell> Date</StyledTableCell>
                                <StyledTableCell>Reference No</StyledTableCell>
                                <StyledTableCell> Location </StyledTableCell>
                                <StyledTableCell> Supplier </StyledTableCell>
                                <StyledTableCell> Purchase Status</StyledTableCell>
                                <StyledTableCell> Payment status</StyledTableCell>
                                <StyledTableCell> Grand Total</StyledTableCell>
                                <StyledTableCell> Payment Due</StyledTableCell>
                                <StyledTableCell> Added By</StyledTableCell>
                            </StyledTableRow>
                            </TableHead>
                        <TableBody>
                        <StyledTableRow>
                                <StyledTableCell>sample </StyledTableCell>
                                <StyledTableCell> xyz</StyledTableCell>
                                <StyledTableCell> </StyledTableCell>
                                <StyledTableCell> </StyledTableCell>
                                <StyledTableCell> </StyledTableCell>
                                <StyledTableCell> </StyledTableCell>
                                <StyledTableCell> </StyledTableCell>
                                <StyledTableCell> </StyledTableCell>
                                <StyledTableCell> </StyledTableCell>
                                <StyledTableCell> </StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                        <TableFooter sx={{height: '70px',backgroundColor: '#cdc7c7',textAlign:'center',justifyContent:'center'}}>
                            <StyledTableRow sx={{fontSize:'30px !important'}}>
                                <StyledTableCell colspan={4} >Total </StyledTableCell>
                                <StyledTableCell> </StyledTableCell>
                                <StyledTableCell> </StyledTableCell>
                                <StyledTableCell> </StyledTableCell>
                                <StyledTableCell> </StyledTableCell>
                                <StyledTableCell><Typography>Purchase Due - <br /> Purchase Return -</Typography> </StyledTableCell>
                                <StyledTableCell> </StyledTableCell>
                            </StyledTableRow>
                        </TableFooter>
                      </Table>
                    </TableContainer>

                    </Box>
          </>
 );
}
export default PurchaseTable;

