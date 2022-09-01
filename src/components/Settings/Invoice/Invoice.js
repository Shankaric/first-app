import React, { useState } from "react";
import { Box, AccordionSummary, Typography,Button, Table,TableBody,TableCell,TableContainer,Tabs,TableHead,TableRow,Paper,
    Grid, TableFooter, InputLabel,Badge,Checkbox,Dialog,DialogContent,DialogTitle,TextField,DialogActions,FormGroup,FormControlLabel, Accordion,AccordionDetails,FormControl, MenuItem, Select } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {SettingStyle} from '../SettingStyle';
import {FcInfo} from 'react-icons/fc';
import { styled } from '@mui/material/styles';
import { FaFileCsv, FaSearch,FaInfo,FaPrint, FaFilePdf,FaEdit,FaTrash,FaFileAlt} from "react-icons/fa";
import { AiFillFileExcel,AiFillTool } from "react-icons/ai";
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';

//jquery
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';
//Date RANGE
import "rsuite/dist/rsuite.css";
import { DateRangePicker } from 'rsuite';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
 //  JQUER
 $(document).ready(function () {
    setTimeout(function(){
    $('#invoice').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});
//Badge
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: -23,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


function Invoice() {
  const [hidden, setHidden] = useState(true);
// TABS
const [value, setValue] = useState(0);

const ProductSellChange = (event, newValue) => {
    setValue(newValue);
};

// accordian
const [expanded, setExpanded] = React.useState('panel1');

const handleChange = (panel) => (event, newExpanded) => {
setExpanded(newExpanded ? panel : false);
};

//Add modal
const [open, setOpen] = useState(false);
const handleClickOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};
//EDIT modal
const [editopen, seteditOpen] = useState(false);
const edithandleClickOpen = () => {
  setOpen(true);
};
const edithandleClose = () => {
  setOpen(false);
};
    return (
      <>
      <Box>
        <Typography sx={SettingStyle.UnitHeaderText}>Invoice Settings<Typography sx={SettingStyle.UnitSubHeaderText}>Manage your invoice settings</Typography></Typography> 
        </Box>
        <br />
  
        <Box sx={SettingStyle.container}>     
            <Box sx={{ borderBottom: 1, borderColor: 'divider',textTransform: 'CAPITALIZE', }}>
                <Tabs value={value} onChange={ProductSellChange} TabIndicatorProps={{style: {background:'none',borderTop:'5px solid #7009ab',borderLeft:'2px solid black',top:'0',borderRadius:'5px !important'}}}  aria-label="basic tabs example" scrollButtons variant="scrollable"  >
                <Tab iconPosition="start" label={<><div>&ensp;Invoice Schemes </div></>} {...a11yProps(0)}/>
                <Tab iconPosition="start" label={<><div>&ensp;Invoice Layouts</div></>} {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>          
                <TableContainer component={Paper} sx={{boxShadow:'none'}}>
                  <Typography>All your invoice schemes</Typography>
                    <Button sx={SettingStyle.boxAddButton} onClick={handleClickOpen} >Add</Button>
                        <Table aria-label="customized table" id="orders" sx={{margin:'20px'}}>
                        <TableHead>
                            <TableRow>
                              <TableCell align="left">Name&ensp;<FcInfo/></TableCell>
                              <TableCell align="left">Prrefix&ensp;<FcInfo/></TableCell>
                              <TableCell align="left">Start from&ensp;<FcInfo/></TableCell>
                              <TableCell align="left">Invoice count&ensp;<FcInfo/></TableCell>
                              <TableCell align="left">Number of digits&ensp;<FcInfo/></TableCell>
                              <TableCell align="left">Action&ensp;<FcInfo/></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                              <TableCell align="left">Defaut&ensp;&ensp;&ensp;&ensp;<Badge badgeContent={'Default'} color="success"/> </TableCell>
                              <TableCell align="left"></TableCell>
                              <TableCell align="left"></TableCell>
                              <TableCell align="left"></TableCell>
                              <TableCell align="left"></TableCell>
                              <TableCell align="left">
                                  <Button variant="contained" size='small' color="primary" sx={{textTransform: 'Capitalize',padding:'2PX'}} onClick={edithandleClickOpen}><FaEdit/>&ensp;Edit</Button>&ensp;
                                 <Button variant="contained" color="error" size="small" sx={{ textTransform: 'Capitalize',padding:'2px'}}><FaTrash></FaTrash>&ensp;Delete</Button>&ensp;
                                 <Button variant="contained" color="success" size="small" sx={{ textTransform: 'Capitalize',padding:'2px'}}>Default</Button>
                              </TableCell>
                           </TableRow>  
                        </TableBody>
                      </Table>
                    </TableContainer>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Box>
                <Typography sx={{float:'left'}}>All your invoice schemes</Typography>
                <Button sx={SettingStyle.boxAddButton} >Add</Button>
                <br />
                <Grid container>
                  <Grid item md={2} sx={{textAlign:'center'}}>
                      <FaFileAlt size={70} color='#3c8dbc'/>&ensp;&ensp;&ensp;<StyledBadge badgeContent={'Default'} color="success"/>
                  </Grid>
                </Grid>
                     <Typography sx={{fontWeight:'bold'}}>Used in locations:</Typography>
                      <Typography>XYZ ,   shreebalaji krishanarajan ,   Juiceria  </Typography>
              </Box>
            </TabPanel>
        </Box>
        {/* ADDMODAL */}
        <Dialog onClose={handleClose} open={open} keepMounted aria-describedby="alert-dialog-slide-description">
        <DialogTitle id="customized-dialog-title" onClose={handleClose}> Add new invoice scheme </DialogTitle>
        <DialogContent dividers>
        <Box component="form" sx={{'& .MuiOutlinedInput-notchedOutline': { border: '1px solid #B97DF0', }, }}  noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <Button variant='contained' sx={{backgroundColor:'grey !important', padding:'20px 30px'}}>FORMAT :  <br /> XXXX</Button>
            </Grid>
       
            <Grid item xs={12} md={4}>
                <Button variant='contained' sx={{backgroundColor:'grey !important', padding:'20px 30px'}}>FORMAT:  <br /> 2022-XXXX</Button>
            </Grid>
            <Grid item xs={12} md={4}>
                <Typography>Preview</Typography>
                <Typography>#0000</Typography>
                <Typography>#2022-0000</Typography>
            </Grid>
          </Grid>
          <br />
          <Grid container>
            <Grid item xs={12} md={12}>
            <TextField required id="outlined-required" label="Name:" size="small" fullWidth/>
            </Grid>
          </Grid>
          <br />
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
               <Grid sx={{ display: 'flex' }}  >
                            <Grid sx={SettingStyle.spanIcons}><FaInfo /></Grid>
                            <FormControl size="small" fullWidth sx={{ display: 'flex'}}>
                                <TextField size="small" label='search Product'  sx={{borderRadius:'0px !important',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: '1px solid #B97DF0',
                                        borderRadius:'0px !important',
                                    },}}>

                                </TextField>
                        </FormControl>
                    </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
                 <Grid sx={{ display: 'flex' }}  >
                            <Grid sx={SettingStyle.spanIcons}><FaInfo /></Grid>
                            <FormControl size="small" fullWidth sx={{ display: 'flex'}}>
                                <TextField size="small" label='search Product'  sx={{borderRadius:'0px !important',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: '1px solid #B97DF0',
                                        borderRadius:'0px !important',
                                    },}}>

                                </TextField>
                        </FormControl>
                    </Grid>
              </Grid>
          </Grid>
            <br />
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
            <Grid sx={{ display: 'flex' }}  >
                        <Grid sx={SettingStyle.spanIcons}><FaInfo /></Grid>
                            <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                            <InputLabel id="demo-select-small">Supplier</InputLabel>
                                <Select
                                        labelId="demo-select-small"
                                        sx={{borderRadius:'0px !important',
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: '1px solid #B97DF0',
                                            borderRadius:'0px !important',
                                        },}}
                                        id="demo-select-small"
                                        label='Customer'
                                        // value={ProfitLoss.ProfitAddLocation}
                                        // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
                                        fullWidth
                                         >
                                        <MenuItem value={1}>None</MenuItem>
                                        <MenuItem value={2}>xxx</MenuItem>
                                    </Select>   
                                </FormControl>
                            </Grid>
                    </Grid>
                <Grid item xs={12} md={6}>
                   <FormControlLabel  label="Set as default"control={ <Checkbox />} />
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

      {/* edit modal */}
   
     <Dialog onClose={edithandleClose} open={open} keepMounted aria-describedby="alert-dialog-slide-description">
        <DialogTitle id="customized-dialog-title" onClose={edithandleClose}> Edit new invoice scheme </DialogTitle>
          <DialogContent dividers>
          <Box component="form" sx={{'& .MuiOutlinedInput-notchedOutline': { border: '1px solid #B97DF0', }, }}  noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                  <Button variant='contained' sx={{backgroundColor:'grey !important', padding:'20px 30px'}}>FORMAT :  <br /> XXXX</Button>
              </Grid>
       
            <Grid item xs={12} md={4}>
                <Button variant='contained' sx={{backgroundColor:'grey !important', padding:'20px 30px'}}>FORMAT:  <br /> 2022-XXXX</Button>
            </Grid>
            <Grid item xs={12} md={4}>
                <Typography>Preview</Typography>
                <Typography>#0000</Typography>
                <Typography>#2022-0000</Typography>
            </Grid>
          </Grid>
          <br />
          <Grid container>
            <Grid item xs={12} md={12}>
            <TextField required id="outlined-required" label="Name:" size="small" fullWidth/>
            </Grid>
          </Grid>
          <br />
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
               <Grid sx={{ display: 'flex' }}  >
                            <Grid sx={SettingStyle.spanIcons}><FaInfo /></Grid>
                            <FormControl size="small" fullWidth sx={{ display: 'flex'}}>
                                <TextField size="small" label='search Product'  sx={{borderRadius:'0px !important',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: '1px solid #B97DF0',
                                        borderRadius:'0px !important',
                                    },}}>

                                </TextField>
                        </FormControl>
                    </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
                 <Grid sx={{ display: 'flex' }}  >
                            <Grid sx={SettingStyle.spanIcons}><FaInfo /></Grid>
                            <FormControl size="small" fullWidth sx={{ display: 'flex'}}>
                                <TextField size="small" label='search Product'  sx={{borderRadius:'0px !important',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: '1px solid #B97DF0',
                                        borderRadius:'0px !important',
                                    },}}>

                                </TextField>
                        </FormControl>
                    </Grid>
              </Grid>
          </Grid>
            <br />
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
            <Grid sx={{ display: 'flex' }}  >
                        <Grid sx={SettingStyle.spanIcons}><FaInfo /></Grid>
                            <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                            <InputLabel id="demo-select-small">Supplier</InputLabel>
                                <Select
                                        labelId="demo-select-small"
                                        sx={{borderRadius:'0px !important',
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: '1px solid #B97DF0',
                                            borderRadius:'0px !important',
                                        },}}
                                        id="demo-select-small"
                                        label='Customer'
                                        // value={ProfitLoss.ProfitAddLocation}
                                        // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
                                        fullWidth
                                         >
                                        <MenuItem value={1}>None</MenuItem>
                                        <MenuItem value={2}>xxx</MenuItem>
                                    </Select>   
                                </FormControl>
                            </Grid>
                    </Grid>
                <Grid item xs={12} md={6}>
                   <FormControlLabel  label="Set as default"control={ <Checkbox />} />
                </Grid>
          </Grid>
   
    <br />
    </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" autoFocus onClick={edithandleClose} >
            Save
          </Button>
          <Button  variant="contained" color="error" autoFocus onClick={edithandleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

  </>
 );
}
export default Invoice;