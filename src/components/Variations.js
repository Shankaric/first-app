import React,{useEffect} from 'react';
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
// import MenuItem from '@mui/material/MenuItem';

// animation
import Zoom from '@mui/material/Zoom';
// import Stack from '@mui/material/Stack';
// import Slide from '@mui/material/Slide';
// todolist
import ToDoListall from './ToDoListall';
// import DataTable from './CDBDataTable';
//table
import VariationTablestriped from './VariationTablestriped';
//jquery
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
$(document).ready(function () {
  setTimeout(function(){
  $('#example1').DataTable({
    language: {search: '', searchPlaceholder: "Search..."},
    lengthMenu: [25, 50, 100, 200, 500, 1000],
    // overflow-X: true
  });
   } ,1000);
});
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Zoom timeout={500} ref={ref} {...props} />;
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

function Variations(){
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    useEffect(() => {
        document.body.classList.add('unitbody');
    });
  
    return(
        <div className='import-products-container'>
          <p className="UnitHeaderText">Variations <span className="UnitSubHeaderText">Manage your Variations</span></p>
            <ImportContainer>
            <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <p className="boxheadertxt">All your Variations</p>
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
                 <VariationTablestriped></VariationTablestriped>
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
     
    </div>
 
        


        </div>
    );

}
export default Variations;

