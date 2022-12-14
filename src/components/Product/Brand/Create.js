import React,{ useState} from 'react';
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


// animation
import Zoom from '@mui/material/Zoom';



//Style
import {ProductStyle} from '../ProductStyle';


// Dialog THEME
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


 
function BrandAddModal(){

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
    <Button variant="contained" onClick={handleClickOpen} sx={ProductStyle.boxAddButton} color="primary">Add</Button>

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
Add
</BootstrapDialogTitle>
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

<TextField
required
id="outlined-required"
label="Name"
size="small"
/>
<TextField
required
id="outlined-required"
label="Short Description"
size="small"
/>


</Box>
</DialogContent>
<DialogActions>
<Button variant="contained" color="success" autoFocus onClick={handleClose}>
  Save
</Button>
<Button  variant="contained" color="error" autoFocus onClick={handleClose}>
  Close
</Button>
</DialogActions>
</BootstrapDialog>
</>


);

}
export default BrandAddModal;