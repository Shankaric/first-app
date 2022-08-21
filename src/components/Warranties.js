import React,{useEffect, useState } from 'react';
import '../css/unit.css';
import {ImportContainer} from './component-styles'
import { Button, Grid,MenuItem} from '@mui/material';
// import UnitTable  from "./UnitTable";
// import Importcontacts from '../components/import-contacts';
// import { Input } from '@mui/material';
// dialogbox
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// import Typography from '@mui/material/Typography';
// inputfield
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// animation
import Zoom from '@mui/material/Zoom';
// import Stack from '@mui/material/Stack';
// import Slide from '@mui/material/Slide';
// Datatable
// import DataTable from './CDBDataTable'
// import BrandTable from './BrandTable'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {FaEdit,FaTrash} from 'react-icons/fa'

//jquery
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';



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
  
//   function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
//   }
  
//   const rows = [
   
//   ];
    //  dropdown 
 
  
const currencies = [
  {
      value: 'Please Select',
      label: 'Please Select',
    },
  {
    value: 'Yes',
    label: 'Yes',
  },
  {
    value: 'No',
    label: 'No',
  },
 
];



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
    $('#BrandTable').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});


const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

//  modal 
function Warranties(){

  const [currency, setCurrency] = useState(0);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
    // ADD MODAL
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    // EDIT MODAL
    const [editopen, seteditOpen] = useState(false);

    const edithandleClickOpen = () => {
        seteditOpen(true);
    };
    const edithandleClose = () => {
        seteditOpen(false);
    };

    useEffect(() => {
        document.body.classList.add('unitbody');
    });

 
  


    return(
        <div className='import-products-container'>
          <p className="UnitHeaderText">Warranties <span className="UnitSubHeaderText"></span></p>
            <ImportContainer>
            <Grid container spacing={2}>
                  <Grid item xs={8}>
                      <p className="boxheadertxt">All your Warranties</p>
                  </Grid>
                  <Grid item xs={4}>
                      <Button variant="contained" onClick={handleClickOpen} className="boxAddButton" color="primary">Add</Button>
                  </Grid>
                    
              </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <p className=""></p>
                        </Grid>
                        <Grid item xs={7}>
                        <>
                            <Button variant="outlined" size="small" className="exportBtnText">Export to csv</Button>
                            <Button variant="outlined" size="small"className="exportBtnText">Export to Excel</Button>
                            <Button variant="outlined" size="small" className="exportBtnText">Print</Button>
                            <Button variant="outlined" size="small" className="exportBtnText">Column visibility</Button>
                            <Button variant="outlined" size="small" className="exportBtnText">Export to PDF</Button>
                        </>
                        </Grid>
                        <Grid item xs={2}>
                     
                        </Grid>
                    </Grid>
                    <br />
                    <div className="tablecontainer">
                    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table" id="BrandTable">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
             <StyledTableCell align="left">Description</StyledTableCell>
            <StyledTableCell align="left">Duration</StyledTableCell>
            <StyledTableCell align="left">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
               <StyledTableRow>
              <StyledTableCell component="th" scope="row">  </StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="left">
                
              <Button variant="contained"  onClick={edithandleClickOpen} size="small" sx={{ textTransform: 'Capitalize'}}><FaEdit></FaEdit>&ensp;Edit</Button>&ensp;
              <Button variant="contained" color="error" size="small" sx={{ textTransform: 'Capitalize'}}><FaTrash></FaTrash>&ensp;Delete</Button>

              </StyledTableCell>
             
            </StyledTableRow>
             
          
        </TableBody>
      </Table>
    </TableContainer>
                    </div>
            </ImportContainer>
            <div>
           
      <BootstrapDialog PaperProps={{
              style: {
                borderRadius:"10px"
              }
            }}
        onClose={handleClose}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add Warranty
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, maxWidth: '95%', minWidth:'95%',width:'400px' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          size="small"
        />
    
        <TextField
            placeholder="Description"
            label="Description"
            multiline
            rows={2}
            maxRows={4}
            />
            <br />
     <Grid container spacing={0}>
        <Grid item xs={5}>
             <TextField
                placeholder="Description"
                label="Description"
              
                />
          </Grid>
          <Grid item xs={7}>
          <TextField
                required
                  id="outlined-select-currency"
                  select
                  label="Allow Decimal"
                  value={currency}
                  onChange={handleChange}
                 
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
            </Grid>
          
          </Grid>
        
      </div>
    
      <br />
    </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" autoFocus onClick={handleClose}>
            Save
          </Button>
          <Button  variant="outlined" className="modalclosebtn" autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
      <BootstrapDialog PaperProps={{
              style: {
                borderRadius:"10px"
              }
            }}
        onClose={handleClose}
        open={editopen}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <BootstrapDialogTitle id="edit-customized-dialog-title" onClose={edithandleClose}>
          Edit Warranty
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, maxWidth: '95%', minWidth:'95%',width:'400px' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
          required
          id="outlined-required"
          label="Name"
          size="small"
        />
      
        <TextField
            placeholder="Description"
            label="Description"
            multiline
            rows={2}
            maxRows={4}
            />
    <Grid container spacing={0}>
        <Grid item xs={5}>
             <TextField
                placeholder="Description"
                label="Description"
              
                />
          </Grid>
          <Grid item xs={7}>
          <TextField
                required
                  id="outlined-select-currency"
                  select
                  label="Allow Decimal"
                  value={currency}
                  onChange={handleChange}
                 
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
            </Grid>
          
          </Grid>
      </div>
    
      <br />
    </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" autoFocus onClick={edithandleClose}>
            Save
          </Button>
          <Button  variant="outlined" className="modalclosebtn" autoFocus onClick={edithandleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
 
        


        </div>
    );
              
}
export default Warranties;

