import React,{useEffect, useState} from 'react';
import '../css/unit.css';
import {ImportContainer} from './component-styles'
import { Button, Grid } from '@mui/material';
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
import MenuItem from '@mui/material/MenuItem';
// checkbox
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// animation
import Zoom from '@mui/material/Zoom';
// import Stack from '@mui/material/Stack';
// import Slide from '@mui/material/Slide';
// Datatable
// import DataTable from './CDBDataTable'
import UnitsTablestriped from './UnitsTablestriped'
//jquery
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';

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
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

//  modal 
function Units(){
  const [hidden, setHidden] = useState(true);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
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
        <div className='import-products-container'>
          <p className="UnitHeaderText">Units <span className="UnitSubHeaderText">Manage your units</span></p>
            <ImportContainer>
            <Grid container spacing={2}>
                  <Grid item xs={8}>
                      <p className="boxheadertxt">All your units</p>
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
                    <UnitsTablestriped></UnitsTablestriped>
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
          Add Unit
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
      </div>
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
          <Button variant="contained" autoFocus onClick={handleClose}>
            Save
          </Button>
          <Button  variant="outlined" className="modalclosebtn" autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
     
    </div>
 
        


        </div>
    );
              
}
export default Units;

