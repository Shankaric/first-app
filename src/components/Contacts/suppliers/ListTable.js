import React,{useEffect,useState} from 'react';
import { Button, Grid ,Typography } from '@mui/material';

// dialogbox
import Dialog from '@mui/material/Dialog';


// inputfield
import Box from '@mui/material/Box';

// animation
import Zoom from '@mui/material/Zoom';

//Table
import Table from '@mui/material/Table';
import {TableFooter,MenuItem,Divider,Menu} from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {FaFileCsv, FaPrint, FaFilePdf } from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DeleteIcon from '@mui/icons-material/Delete';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

//jquery
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';

//Style
import { contactstyle } from '../CotactStyle';
import { styled, alpha } from '@mui/material/styles';

import Supplieredit from "./Edit";
import Suppliercreate from "./Create";


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

//table data
function createData(
    sr_actions, sr_contact_id, sr_business_name, sr_name, sr_email, sr_tax_no, sr_pay_term, sr_opening_balance, sr_advance_balance,
    sr_added_on, sr_address, sr_mobile, sr_totalpurchasedue, sr_totalpurchasereturndue, sr_custom1, sr_custom2, sr_custom3, sr_custom4,
    sr_custom5, sr_custom6, sr_custom7, sr_custom8) {
    return {
        sr_actions, sr_contact_id, sr_business_name, sr_name, sr_email, sr_tax_no, sr_pay_term, sr_opening_balance, sr_advance_balance,
        sr_added_on, sr_address, sr_mobile, sr_totalpurchasedue, sr_totalpurchasereturndue, sr_custom1, sr_custom2, sr_custom3, sr_custom4,
        sr_custom5, sr_custom6, sr_custom7, sr_custom8

    };
}

const rows = [createData("pdf", 159, "aa", "zzz", "jav@gmail.com", 55, 159, 6.0, 24, 4.0, "kk", 123),];

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
     
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
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


 
function ProductTable(){
  
   //*****Action button*****//
   const [anchorEl, setAnchorEl] =useState(0);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
       setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
       setAnchorEl(null);
   };

    useEffect(() => {
        document.body.classList.add('unitbody');
    });

  
  
 return(

            <Box sx={contactstyle.container}>
            <Grid container>
                  <Grid item xs={8}>
                      <Typography  sx={contactstyle.boxheadertxt}>All your Suppliers</Typography>
                  </Grid>
                  <Grid item xs={4} sx={{textAlign:'right !important'}}>
                    <Suppliercreate/>
                 </Grid>
                   
              </Grid>
              <Grid container sx={contactstyle.grid_container}>
                        <Grid >
                            <Button sx={contactstyle.button_grp}><FaFileCsv />&ensp;Export to CSV</Button>
                            <Button sx={contactstyle.button_grp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                            <Button sx={contactstyle.button_grp}><FaPrint />&ensp;Print</Button>
                            <Button sx={contactstyle.button_grp}><FaFilePdf />&ensp;Export to PDF</Button>
                        </Grid>
                    </Grid>
                 
                    <br />
                    <Box>
                    <TableContainer component={Paper} sx={contactstyle.tablecontainer}>
                      <Table sx={{ minWidth: 700 }} aria-label="customized table" id="example">
                        <TableHead>
                          <TableRow>
                                <StyledTableCell> ACTIONS </StyledTableCell>
                                <StyledTableCell> CONTACT ID </StyledTableCell>
                                <StyledTableCell>BUSINESS NAME</StyledTableCell>
                                <StyledTableCell> NAME </StyledTableCell>
                                <StyledTableCell> E-MAIL </StyledTableCell>
                                <StyledTableCell> TAX NO</StyledTableCell>
                                <StyledTableCell> PAY TERM </StyledTableCell>
                                <StyledTableCell> OPENING BALANCE</StyledTableCell>
                                <StyledTableCell> ADVANCE BALANCE </StyledTableCell>
                                <StyledTableCell> ADDED ON </StyledTableCell>
                                <StyledTableCell> ADDRESS </StyledTableCell>
                                <StyledTableCell> MOBILE  </StyledTableCell>
                                <StyledTableCell> TOTAL PURCHASE DUE</StyledTableCell>
                                <StyledTableCell> TOTAL PURCHASE RETURNDUE </StyledTableCell>
                                <StyledTableCell> Custom1 </StyledTableCell>
                                <StyledTableCell> CUSTOM2 </StyledTableCell>
                                <StyledTableCell> CUSTOM3 </StyledTableCell>
                                <StyledTableCell> CUSTOM4 </StyledTableCell>
                                <StyledTableCell> CUSTOM5 </StyledTableCell>
                                <StyledTableCell> CUSTOM6 </StyledTableCell>
                                <StyledTableCell> CUSTOM7 </StyledTableCell>
                                <StyledTableCell> CUSTOM8 </StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.sr_sku} >
                                    <StyledTableCell component="th" scope="row" colSpan={1}>
                                        <div>
                                            <Button
                                                sx={{backgroundColor:'#B97DF0 !important'}}
                                                id="demo-customized-button"
                                                aria-controls={open ? 'demo-customized-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                variant="contained"
                                                disableElevation
                                                onClick={handleClick}
                                                endIcon={<KeyboardArrowDownIcon />}
                                                size="small"
                                            >
                                                Actions
                                            </Button>
                                            <StyledMenu
                                                id="demo-customized-menu"
                                                MenuListProps={{
                                                    'aria-labelledby': 'demo-customized-button',
                                                }}
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                            >
                                                <Supplieredit />
                                                <MenuItem onClick={handleClose} disableRipple>
                                                    <DeleteIcon />
                                                    Delete
                                                </MenuItem>
                                                <Divider sx={{ my: 0.5 }} />
                                                <MenuItem onClick={handleClose} disableRipple>
                                                    <PictureAsPdfIcon />
                                                    PDF
                                                </MenuItem>
                                            </StyledMenu>
                                        </div>
                                    </StyledTableCell>
                                    <StyledTableCell colSpan={1}>{row.sr_contact_id}</StyledTableCell>
                                    <StyledTableCell colSpan={1}>{row.sr_business_name}</StyledTableCell>
                                    <StyledTableCell >
                                        {row.sr_name}
                                        {/* <CustomizedDialogs /> */}
                                    </StyledTableCell >
                                    <StyledTableCell colSpan={1}> {row.sr_email}</StyledTableCell>
                                    <StyledTableCell colSpan={1}>{row.sr_tax_no}</StyledTableCell>
                                    <StyledTableCell colSpan={1}>{row.sr_pay_term}</StyledTableCell>
                                    <StyledTableCell colSpan={1}>{row.sr_opening_balance}</StyledTableCell>
                                    <StyledTableCell colSpan={1}>{row.sr_advance_balance}</StyledTableCell>
                                    <StyledTableCell colSpan={1}>{row.sr_added_on}</StyledTableCell>
                                    <StyledTableCell colSpan={1}>{row.sr_address}</StyledTableCell>
                                    <StyledTableCell colSpan={1}>{row.sr_mobile}</StyledTableCell>
                                    <StyledTableCell colSpan={1}>{row.sr_totalpurchasedue}</StyledTableCell>
                                    <TableCell colSpan={1}>{row.sr_totalpurchasereturndue}</TableCell>
                                    <StyledTableCell colSpan={1}>{row.sr_custom1}</StyledTableCell>
                                    <StyledTableCell colSpan={1}>{row.sr_custom2}</StyledTableCell>
                                    <StyledTableCell colSpan={1}>{row.sr_custom3}</StyledTableCell>
                                    <StyledTableCell colSpan={1}>{row.sr_custom4}</StyledTableCell>
                                    <StyledTableCell colSpan={1}>{row.sr_custom5}</StyledTableCell>
                                    <StyledTableCell colSpan={1}>{row.sr_custom6}</StyledTableCell>
                                    <StyledTableCell colSpan={1}>{row.sr_custom7}</StyledTableCell>
                                    <StyledTableCell colSpan={1}>{row.sr_custom8}</StyledTableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow className="table2_total">
                                <StyledTableCell colSpan={1}></StyledTableCell>
                                <StyledTableCell colSpan={1}></StyledTableCell>
                                <StyledTableCell colSpan={1}></StyledTableCell>
                                <StyledTableCell colSpan={1}></StyledTableCell>
                                <StyledTableCell colSpan={1}></StyledTableCell>
                                <StyledTableCell colSpan={1}></StyledTableCell>
                                <StyledTableCell
                                    colSpan={6}
                                    align="right"
                                    padding="250px"
                                    sx={{ fontWeight: 700, fontSize: 18, color: "black", alignItems: 'center', justifyContent: 'center', paddingRight: '192px' }}
                                >
                                    Total:{" "}
                                </StyledTableCell>
                                <StyledTableCell align="center" colSpan={1}>0.00</StyledTableCell>
                                <StyledTableCell align="center" colSpan={1}>0.00</StyledTableCell>
                                <StyledTableCell colSpan={1}></StyledTableCell>
                                <StyledTableCell colSpan={1}></StyledTableCell>
                                <StyledTableCell colSpan={1}></StyledTableCell>
                                <StyledTableCell colSpan={1}></StyledTableCell>
                                <StyledTableCell colSpan={1}></StyledTableCell>
                                <StyledTableCell colSpan={1}></StyledTableCell>
                                <StyledTableCell colSpan={1}></StyledTableCell>
                                <StyledTableCell colSpan={1}></StyledTableCell>
                                <StyledTableCell colSpan={1}></StyledTableCell>
                                <StyledTableCell colSpan={1}></StyledTableCell>
                                <StyledTableCell colSpan={1}></StyledTableCell>
                                <StyledTableCell colSpan={1}></StyledTableCell>
                                <StyledTableCell colSpan={1}></StyledTableCell>
                            </TableRow>
                        </TableFooter>
                      </Table>
                    </TableContainer>

                    </Box>
            </Box>

 


 );
              }
export default Supptable;

