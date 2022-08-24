import React,{useEffect} from 'react';
import { Button, Grid ,Typography } from '@mui/material';

// dialogbox
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';


// inputfield
import Box from '@mui/material/Box';

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
import { FaFileCsv, FaPrint, FaFilePdf, FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";

//jquery
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';

//Style
import { userStyle } from '../UserStyle';
import { Link } from '@mui/material';




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
    $('#usertable').DataTable({
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

  function createData(username, name, role, email, action) {
    return { username, name, role, email, action };
}

const rows = [
    createData('sample', 'hilife', 'admin', 'admin@gmail.com'),
];

function Userslist(){
  

    useEffect(() => {
        document.body.classList.add('unitbody');
    });

  
  
 return(

        <Box sx={userStyle.importProductsContainer}>
          <Typography  sx={userStyle.UnitHeaderText}>Users <Typography  sx={userStyle.UnitSubHeaderText}>Manage Users</Typography></Typography>
            <Box sx={userStyle.Container}>
            <Grid container spacing={2}>
                  <Grid item xs={8}>
                      <Typography  sx={userStyle.boxheadertxt}>All your units</Typography>
                  </Grid>
                  <Grid item xs={4}>
                  <Button sx={userStyle.button_add} ><Link to="/usercreate"  style={{textDecoration:'none', color: 'white'}}> Add</Link></Button>

                  </Grid>
                    
              </Grid>
              <Grid container sx={userStyle.grid_container}>
                        <Grid >
                            <Button sx={userStyle.button_grp}><FaFileCsv />&ensp;Export to CSV</Button>
                            <Button sx={userStyle.button_grp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                            <Button sx={userStyle.button_grp}><FaPrint />&ensp;Print</Button>
                            <Button sx={userStyle.button_grp}><FaFilePdf />&ensp;Export to PDF</Button>
                        </Grid>
                    </Grid>
                    <br />
                    <Box>
                    <TableContainer component={Paper} sx={userStyle.tablecontainer}>
                      <Table sx={{ minWidth: 700 }} aria-label="customized table" id="usertable">
                        <TableHead>
                          <TableRow>
                          <StyledTableCell>Username</StyledTableCell>
                                <StyledTableCell >Name</StyledTableCell>
                                <StyledTableCell >Role</StyledTableCell>
                                <StyledTableCell >Email</StyledTableCell>
                                <StyledTableCell >Action</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody align="left">
                            {rows.map((row) => (
                                <StyledTableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <StyledTableCell component="th" scope="row">
                                     Styled   {row.username}
                                    </StyledTableCell>
                                    <StyledTableCell >{row.name}</StyledTableCell>
                                    <StyledTableCell >{row.role}</StyledTableCell>
                                    <StyledTableCell >{row.email}</StyledTableCell>
                                    <StyledTableCell >
                                        <Grid>
                                            <Button sx={userStyle.button_edit}><Link to="/useredit" style={{textDecoration:'none', color:'white','&:hover':{color:'red', backgroundColor:'yellow'}}}><FaEdit />&ensp;Edit</Link></Button>
                                            <Button sx={userStyle.button_view}><FaEye />&ensp;View</Button>
                                            <Button sx={userStyle.button_delete}><FaTrash />&ensp;Delete</Button>
                                        </Grid>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                      </Table>
                    </TableContainer>

                    </Box>
            </Box>

 
        </Box>


 );
              }
export default Userslist;

