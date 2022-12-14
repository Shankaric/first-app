import React,{ useState} from 'react';
import { Button, Grid ,Typography,FormControl,Select,TableContainer,Paper,Table,TableHead,TableRow,TableBody,TableCell,InputLabel,OutlinedInput,Tooltip,InputAdornment} from '@mui/material';
import {FcInfo} from 'react-icons/fc';
import {FaEdit} from 'react-icons/fa';

import { makeStyles,} from "@material-ui/core/styles";
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
//Style
import {SettingStyle} from './SettingStyle';



 
function UnitAddModal(){


 const [hidden, setHidden] = useState(true);

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
    <Button variant="contained" onClick={handleClickOpen} size='small' color="primary" sx={{textTransform: 'Capitalize',padding:'2PX'}}><FaEdit/>&ensp;Edit</Button>

    <Dialog fullWidth maxWidth="md" onClose={handleClose} open={open} keepMounted aria-describedby="alert-dialog-slide-description">
        <DialogTitle id="customized-dialog-title" onClose={handleClose}> Edit new business location     </DialogTitle>
             <DialogContent dividers>
                 <Box component="form" sx={{'& .MuiTextField-root': { m: 1,},'& .MuiOutlinedInput-notchedOutline': { border: '1px solid #B97DF0',}, }} noValidate autoComplete="off" >
                    
                    <Grid container>
                        <Grid item sm={12} md={12}>
                            <TextField required fullWidth id="outlined-required" label="Name" size="small" />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item sm={12} md={6}>
                            <TextField required id="outlined-required" fullWidth label="Location ID:" size="small"/>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <TextField required id="outlined-required" fullWidth label="Landmark" size="small"/>
                        </Grid>
                        </Grid>

                    <Grid container spacing={2}>
                        <Grid item sm={12} md={6}>
                            <TextField required id="outlined-required" fullWidth label="City" size="small" />
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <TextField required id="outlined-required" fullWidth label="Zip Code" size="small" />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item sm={12} md={6}>
                            <TextField required id="outlined-required" fullWidth label="State" size="small"/>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <TextField required id="outlined-required" fullWidth label="Country" size="small"/>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item sm={12} md={6}>
                            <TextField required id="outlined-required" fullWidth label="Mobile" size="small"/>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <TextField required id="outlined-required" fullWidth label="Alternate contact number:" size="small" />
                        </Grid>
                    </Grid>
                
                    <Grid container spacing={2}>
                        <Grid item sm={12} md={6}>
                            <TextField required id="outlined-required" fullWidth label="Email" size="small"/>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <TextField required id="outlined-required" fullWidth label="Website" size="small"/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{marginLeft:'-9px'}}>
                        <Grid item xs={12} sm={12} md={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Invoice scheme</InputLabel>
                                <Select labelId="demo-simple-select-label" id="demo-simple-select" label='Invoice scheme' size='small' sx={{borderRadius:'0px !important'}}
                                        endAdornment={
                                                       
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    edge="end" >
                                                    <FcInfo />
                                                </IconButton>
                                            </InputAdornment>
                                   
                                    }
                                >
                                    <MenuItem value={10}>Please Select</MenuItem>
                                </Select>
                            </FormControl> 
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Invoice layout for POS</InputLabel>
                                <Select labelId="demo-simple-select-label" id="demo-simple-select" size='small' label='Invoice layout for POS' sx={{borderRadius:'0px !important'}}
                                       endAdornment={
                                                       
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                edge="end" >
                                                <FcInfo />
                                            </IconButton>
                                        </InputAdornment>
                               
                                }
                               >
                                    <MenuItem value={10}>Please Select</MenuItem>
                                </Select>
                            </FormControl> 
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <FormControl fullWidth >
                                <InputLabel id="demo-simple-select-label">Invoice layout for sale</InputLabel>
                                <Select labelId="demo-simple-select-label" id="demo-simple-select" size='small' label='Invoice layout for sale' sx={{borderRadius:'0px !important'}}
                                        endAdornment={
                                                       
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    edge="end" >
                                                    <FcInfo />
                                                </IconButton>
                                            </InputAdornment>
                                   
                                    }
                                >
                                    <MenuItem value={10}>Please Select</MenuItem>
                                </Select>
                            </FormControl> 
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                             <FormControl fullWidth>
                                 <InputLabel id="demo-simple-select-label">Default Selling Price Group</InputLabel>
                                <Select labelId="demo-simple-select-label" id="demo-simple-select" size='small' label='Default Selling Price Group' sx={{borderRadius:'0px !important'}}
                                        endAdornment={
                                                       
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    edge="end" >
                                                    <FcInfo />
                                                </IconButton>
                                            </InputAdornment>
                                   
                                    }
                                >
                                    <MenuItem value={10}>Please Select</MenuItem>
                                </Select>
                            </FormControl> 
                        </Grid>
                    </Grid>
                   

                    <Grid container spacing={2}>
                        <Grid item sx={12} sm={6} md={3}>
                            <TextField id="outlined-required" fullWidth label="Custom field 1:" size="small" />
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <TextField id="outlined-required" fullWidth label="Custom field 2" size="small" />
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <TextField id="outlined-required" fullWidth label="Custom field 3" size="small" />
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <TextField id="outlined-required" fullWidth label="Custom field 4" size="small" />
                        </Grid>
                    </Grid>
                    <hr />
                        <br />
                        <Grid container>
                            <Grid item sm={12} md={12}>
                                {/* <TextField required id="outlined-required" fullWidth label="Name:" label='POS screen Featured Products' size="small" /> */}
                                <FormControl variant="outlined" size="small" fullWidth>
                                                <InputLabel htmlFor="outlined-adornment-password">Pay Term</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-password"
                                                    endAdornment={
                                                       
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    edge="end" >
                                                                    <FcInfo />
                                                                </IconButton>
                                                            </InputAdornment>
                                                   
                                                    }
                                                    label="Pay Term"
                                                />
                                            </FormControl>
                            </Grid>
                        </Grid>
                        <br />
                    <hr />
                   <Typography>Payment Options:<FcInfo size={16}/></Typography><br />
                    <TableContainer component={Paper} >
                                    <Table md={{ minWidth: 200,maxHeight:'5px',overflow: 'auto'}} aria-label="customized table">
                                    <TableHead >
                                        <TableRow>
                                            <TableCell sx={SettingStyle.tableHead}>Payment Method &ensp;<FcInfo size={16}/></TableCell>
                                            <TableCell sx={SettingStyle.tableHead} align="center">Enable</TableCell>
                                            <TableCell sx={SettingStyle.tableHead} align="center">Default Account&ensp;<FcInfo size={16}/></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>   
                                        <TableRow>
                                            <TableCell align="center">Cash</TableCell>
                                            <TableCell align="center"> <Checkbox defaultChecked /> </TableCell>
                                            <TableCell align="center">
                                                <FormControl fullWidth>
                                                        <Select labelId="demo-simple-select-label" id="demo-simple-select" size='small' sx={{borderRadius:'0px !important'}}>
                                                            <MenuItem value={10}>None</MenuItem>
                                                        </Select>
                                                </FormControl>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="center">Card</TableCell>
                                            <TableCell align="center"> <Checkbox defaultChecked /> </TableCell>
                                            <TableCell align="center">
                                                <FormControl fullWidth>
                                                        <Select labelId="demo-simple-select-label" id="demo-simple-select" size='small' sx={{borderRadius:'0px !important'}}>
                                                            <MenuItem value={10}>None</MenuItem>
                                                        </Select>
                                                </FormControl>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="center">Cheque</TableCell>
                                            <TableCell align="center"> <Checkbox defaultChecked /> </TableCell>
                                            <TableCell align="center">
                                                <FormControl fullWidth>
                                                        <Select labelId="demo-simple-select-label" id="demo-simple-select" size='small' sx={{borderRadius:'0px !important'}}>
                                                            <MenuItem value={10}>None</MenuItem>
                                                        </Select>
                                                </FormControl>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="center">Bank Transfer	</TableCell>
                                            <TableCell align="center"> <Checkbox defaultChecked /> </TableCell>
                                            <TableCell align="center">
                                                <FormControl fullWidth>
                                                        <Select labelId="demo-simple-select-label" id="demo-simple-select" size='small' sx={{borderRadius:'0px !important'}}>
                                                            <MenuItem value={10}>None</MenuItem>
                                                        </Select>
                                                </FormControl>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="center">Other</TableCell>
                                            <TableCell align="center"> <Checkbox defaultChecked /> </TableCell>
                                            <TableCell align="center">
                                                <FormControl fullWidth>
                                                        <Select labelId="demo-simple-select-label" id="demo-simple-select" size='small' sx={{borderRadius:'0px !important'}}>
                                                            <MenuItem value={10}>None</MenuItem>
                                                        </Select>
                                                </FormControl>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                             <TableCell align="center">Custom Payment 1</TableCell>
                                            <TableCell align="center"> <Checkbox defaultChecked /> </TableCell>
                                            <TableCell align="center">
                                                <FormControl fullWidth>
                                                        <Select labelId="demo-simple-select-label" id="demo-simple-select" size='small' sx={{borderRadius:'0px !important'}}>
                                                            <MenuItem value={10}>None</MenuItem>
                                                        </Select>
                                                </FormControl>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                             <TableCell align="center">Custom Payment 2</TableCell>
                                            <TableCell align="center"> <Checkbox defaultChecked /> </TableCell>
                                            <TableCell align="center">
                                                <FormControl fullWidth>
                                                        <Select labelId="demo-simple-select-label" id="demo-simple-select" size='small' sx={{borderRadius:'0px !important'}}>
                                                            <MenuItem value={10}>None</MenuItem>
                                                        </Select>
                                                </FormControl>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                             <TableCell align="center">Custom Payment 3</TableCell>
                                            <TableCell align="center"> <Checkbox defaultChecked /> </TableCell>
                                            <TableCell align="center">
                                                <FormControl fullWidth>
                                                        <Select labelId="demo-simple-select-label" id="demo-simple-select" size='small' sx={{borderRadius:'0px !important'}}>
                                                            <MenuItem value={10}>None</MenuItem>
                                                        </Select>
                                                </FormControl>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                             <TableCell align="center">Custom Payment 4</TableCell>
                                            <TableCell align="center"> <Checkbox defaultChecked /> </TableCell>
                                            <TableCell align="center">
                                                <FormControl fullWidth>
                                                        <Select labelId="demo-simple-select-label" id="demo-simple-select" size='small' sx={{borderRadius:'0px !important'}}>
                                                            <MenuItem value={10}>None</MenuItem>
                                                        </Select>
                                                </FormControl>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                             <TableCell align="center">Custom Payment 5</TableCell>
                                            <TableCell align="center"> <Checkbox defaultChecked /> </TableCell>
                                            <TableCell align="center">
                                                <FormControl fullWidth>
                                                        <Select labelId="demo-simple-select-label" id="demo-simple-select" size='small' sx={{borderRadius:'0px !important'}}>
                                                            <MenuItem value={10}>None</MenuItem>
                                                        </Select>
                                                </FormControl>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                             <TableCell align="center">Custom Payment 6</TableCell>
                                            <TableCell align="center"> <Checkbox defaultChecked /> </TableCell>
                                            <TableCell align="center">
                                                <FormControl fullWidth>
                                                        <Select labelId="demo-simple-select-label" id="demo-simple-select" size='small' sx={{borderRadius:'0px !important'}}>
                                                            <MenuItem value={10}>None</MenuItem>
                                                        </Select>
                                                </FormControl>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="center">Custom Payment 7</TableCell>
                                            <TableCell align="center"> <Checkbox defaultChecked /> </TableCell>
                                            <TableCell align="center">
                                                <FormControl fullWidth>
                                                        <Select labelId="demo-simple-select-label" id="demo-simple-select" size='small' sx={{borderRadius:'0px !important'}}>
                                                            <MenuItem value={10}>None</MenuItem>
                                                        </Select>
                                                </FormControl>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                        </TableContainer>
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
export default UnitAddModal;