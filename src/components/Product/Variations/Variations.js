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

// checkbox
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

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

//  DROPDOWN 
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
  const baseunit = [
    {
        value: 'Selece base unit',
        label: 'Selece base unit',
      },
    {
      value: 'Pieces (Pc(s))',
      label: 'Pieces (Pc(s))',
    },
 
   
  ];
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
  
 //modal
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };
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

 
function Variations(){
  
  const [hidden, setHidden] = useState(true);

//Add modal
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

//Edit modal
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

  //  dropdown 
    const [currency, setCurrency] = useState('');

    const handleChange = (event) => {
      setCurrency(event.target.value);
    };
  
 return(

        <Box sx={ProductStyle.importProductsContainer}>
          <Typography  sx={ProductStyle.UnitHeaderText}>Variations <Typography  sx={ProductStyle.UnitSubHeaderText}>Manage your Variations</Typography></Typography>
            <Box sx={ProductStyle.ProductContainer}>
            <Grid container spacing={2}>
                  <Grid item xs={8}>
                      <Typography  sx={ProductStyle.boxheadertxt}>All Variations</Typography>
                  </Grid>
                  <Grid item xs={4}>
                      <Button variant="contained" onClick={handleClickOpen} sx={ProductStyle.boxAddButton} color="primary">Add</Button>
                  </Grid>
                    
              </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Typography  className=""></Typography>
                        </Grid>
                        <Grid item xs={7}>
                        <>
                            <Button variant="outlined" sx={ProductStyle.exportBtnText}>&ensp;<FaFileExcel/>Export to csv&ensp;</Button>
                            <Button variant="outlined" sx={ProductStyle.exportBtnText}>&ensp;<FaFileExcel/>Export to Excel&ensp;</Button>
                            <Button variant="outlined" sx={ProductStyle.exportBtnText}>&ensp;<FaPrint/>Print&ensp;</Button>
                            <Button variant="outlined" sx={ProductStyle.exportBtnText}>&ensp;<FaFilePdf/>Export to PDF&ensp;</Button>
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
                            <StyledTableCell>Variations</StyledTableCell>
                            <StyledTableCell align="left">Values</StyledTableCell>
                            <StyledTableCell align="left">Action</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                           <StyledTableRow>
                              <StyledTableCell component="th" scope="row"> Pieces </StyledTableCell>
                              <StyledTableCell align="left">Pc(s)</StyledTableCell>
                              <StyledTableCell align="left">                        
                                <Button variant="contained" onClick={edithandleClickOpen} size="small" sx={{ textTransform: 'Capitalize'}}><FaEdit></FaEdit>&ensp;Edit</Button>&ensp;
                                <Button variant="contained" color="error" size="small" sx={{ textTransform: 'Capitalize'}}><FaTrash></FaTrash>&ensp;Delete</Button>
                              </StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>

                    </Box>
            </Box>
           
      {/* Addmodal      */}
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
          Add Variations
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
          label="Variation Name:"
          size="small"
        />
        
<ToDoListall></ToDoListall>
              </div>
     
    
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
        
  {/* Editmodal      */}
  <BootstrapDialog PaperProps={{
              style: {
                borderRadius:"10px"
              }
            }}
        onClose={edithandleClose}
        open={editopen}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={edithandleClose}>
          Edit Unit
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

        <TextField
          required
          id="outlined-required"
          label="Name:"
          size="small"
        />
          <TextField
          required
          id="outlined-required"
          label="Time base unit"
          size="small"
        />

        <TextField
         required
          id="outlined-select-currency"
          select
          label="Allow Decimal"
          size="small"
          value={currency}
          onChange={handleChange}
        
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    
      <FormGroup>
      <FormControlLabel onClick={() => setHidden(s => !s)} control={<Checkbox  />} label="Add as multiple of other unit " />
    </FormGroup><br />
    {!hidden ?
    <Grid container spacing={2}>
        <Grid item xs={2}><br />
        <label htmlFor="">1 Unit :</label>
        </Grid>
        <Grid item xs={5}>
          <TextField
            required
            id="outlined-required"
            label="Short name:"
            size="small"
          /> 
        </Grid>
        <Grid item xs={4}>
            <TextField
            required
              id=""
              select
              label="Base Unit"
              size="small"
              value={baseunit}
          
            
            >
              {baseunit.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>
        </Grid>
      </Grid>
          : null }
  
    </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" autoFocus onClick={edithandleClose}>
            Save
          </Button>
          <Button  variant="outlined" sx={ProductStyle.modalclosebtn} autoFocus onClick={edithandleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>

        </Box>


 );
              }
export default Variations;

