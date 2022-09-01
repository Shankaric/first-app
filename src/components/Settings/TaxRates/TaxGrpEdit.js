import React,{useState} from 'react';
import { Button, Grid ,Box,Typography ,InputLabel,FormControl,OutlinedInput,InputAdornment,Table,FormControlLabel,Checkbox,FormGroup,TableRow,TableHead,TableContainer,TableBody,TableCell,Paper} from '@mui/material';
import {FcInfo} from 'react-icons/fc';
import {FaTrash,FaFileExcel,FaPrint,FaEdit,FaFilePdf} from 'react-icons/fa'
import {AiFillTool} from 'react-icons/ai'
// dialogbox
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
//jquery
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';

import {SettingStyle} from '../SettingStyle';


function TaxGrpEdit(){
    const [hidden, setHidden] = useState(true);

    //  dropdown 
    const [currency, setCurrency] = useState('');

    const handleChange = (event) => {
      setCurrency(event.target.value);
    };

    //Add modal
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

return(
<>
<Button variant="contained" onClick={handleClickOpen} sx={{padding:'2px'}} color="primary"><FaEdit/>&ensp;Edit</Button>

    <Dialog PaperProps={{
              style: {
                borderRadius:"10px"
              }
            }}
        onClose={handleClose}
        open={open}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Edit tax group
        </DialogTitle>
        <DialogContent dividers>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, maxWidth: '95%', minWidth:'95%',width:'400px' },
        '& .MuiOutlinedInput-notchedOutline': {
          border: '1px solid #B97DF0',
      },
      }}
      noValidate
      autoComplete="off"
    >
                <Grid container>
                        <Grid item sm={12} md={12}>
                                <TextField id="outlined-required" fullWidth label="Name" size="small" />

                            </Grid>
                        </Grid>
        
                <Grid container>
                     <Grid item sm={12} md={12}>
                            <TextField id="outlined-required" fullWidth label="Sub taxes" size="small" />
                            </Grid>
                        </Grid>
                        <br />
             
                 

    </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" autoFocus onClick={handleClose} >
            Save
          </Button>
          <Button  variant="contained" color="error" autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

</>


);

}
export default TaxGrpEdit;