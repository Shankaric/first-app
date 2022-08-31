import React, { useState } from "react";
import { Box, AccordionSummary, Typography,Button, Table,TableBody,TableCell,TableContainer,Tabs,TableHead,TableRow,Paper,Grid, TableFooter, InputLabel, Accordion,AccordionDetails,FormControl, MenuItem, Select } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {reportStyles} from './reportStyles';
import { FaFileCsv, FaPrint, FaCog,FaFilePdf } from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
//jquery
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';
// DateRangePicker
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
    $('#saleAdd').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});

 $(document).ready(function () {
    setTimeout(function(){
    $('#SaleCommission').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});

 $(document).ready(function () {
    setTimeout(function(){
    $('#Expenses').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});


function SalesRepresentative() {

// TABS
const [value, setValue] = useState(0);

const ProductSellChange = (event, newValue) => {
    setValue(newValue);
};

// Accordion
const [expanded, setExpanded] = React.useState('panel1');

const handleChange = (panel) => (event, newExpanded) => {
setExpanded(newExpanded ? panel : false);
};

return (
      <>
    <Box>
    <Typography sx={reportStyles.UnitHeaderText}>Sales Representative Report</Typography> 
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={reportStyles.filtercontainer}>
            <AccordionSummary aria-controls="panel1d-content"  id="panel1d-header" sx={{color:'#7009ab !IMPORTANT',boxShadow:'0px 0px 2px #00000047',width:'100%'}}><Typography sx={{fontSize:'20px'}}><FilterAltIcon /> Filter</Typography></AccordionSummary>
                <AccordionDetails >
                    <br /> 
                    <Grid container spacing={2}>
                        <Grid item sm={12} xs={12} md={6} lg={3}>
                            <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                                <InputLabel id="demo-select-small">User</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    sx={{borderRadius:'0px !important',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: '1px solid #B97DF0',
                                        borderRadius:'0px !important',
                                    },}}
                                    id="demo-select-small"
                                    label='Customer Group Name'
                                    // value={ProfitLoss.ProfitAddLocation}
                                    // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
                                    fullWidth
                                >
                                 
                                    <MenuItem value={1}>All Users</MenuItem>
                                    <MenuItem value={2}>xxx</MenuItem>
                                </Select>   
                            </FormControl>
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={3}>
                        <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                            <InputLabel id="demo-select-small">Business Location</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    sx={{borderRadius:'0px !important',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: '1px solid #B97DF0',
                                        borderRadius:'0px !important',
                                    },}}
                                    id="demo-select-small"
                                    label='Business Location'
                                    // value={ProfitLoss.ProfitAddLocation}
                                    // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
                                        fullWidth
                                    >
                                    <MenuItem value={1}>All locations</MenuItem>
                                    <MenuItem value={2}>xxx</MenuItem>
                                </Select>   
                            </FormControl>
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={3}>
                        <DateRangePicker size="lg" fullWidth style={{width:'100%', border: '1px solid #B97DF0'}}  />
                    </Grid>
                  </Grid>
                  <br />
                </AccordionDetails> 
            </Accordion>
            </Box>
            <br /> 
            <Box sx={reportStyles.container}> 
                <Typography variant="h6" sx={{color:'#384460'}}>Summary</Typography>
                <br />
                <Typography variant="h5">Total Sale - Total Sales Return: ₹ 8,593.75 - ₹ 0.00 = ₹ 8,593.75</Typography>
                <Typography variant="h5">Total Expense: ₹ 0.00</Typography>

            </Box>
            <br />
            <Box sx={reportStyles.container}>     
                <Box sx={{ borderBottom: 1, borderColor: 'divider',textTransform: 'CAPITALIZE', }}>
                    <Tabs value={value} onChange={ProductSellChange} TabIndicatorProps={{style: {background:'none',borderTop:'5px solid #7009ab',borderLeft:'2px solid black',top:'0',borderRadius:'5px !important'}}}  aria-label="basic tabs example" scrollButtons variant="scrollable"  >
                    <Tab iconPosition="start" label={<><div><FaCog/>&ensp;Sales Added</div></>} {...a11yProps(0)}/>
                    <Tab iconPosition="start" label={<><div><FaCog/>&ensp;Sales With Commission</div></>} {...a11yProps(1)} />
                    <Tab iconPosition="start" label={<><div><FaCog/>&ensp;Expenses</div></>} {...a11yProps(2)} />
                    </Tabs>
            </Box>
            <TabPanel value={value} index={0}>          
                <TableContainer component={Paper} sx={{boxShadow:'none'}}>
                    <Grid container sx={reportStyles.grid_container}>    
                            <Grid>   
                                <Button sx={reportStyles.button_grp}><FaFileCsv />&ensp;Export to CSV</Button>
                                <Button sx={reportStyles.button_grp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                                <Button sx={reportStyles.button_grp}><FaPrint />&ensp;Print</Button>
                                <Button sx={reportStyles.button_grp}><FaFilePdf />&ensp;Export to PDF</Button>
                            </Grid>    
                        </Grid>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table" id="saleAdd">
                        <TableHead>
                            <TableRow>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Invoice No.</TableCell>
                            <TableCell align="left">Customer name</TableCell>
                            <TableCell align="left">Location</TableCell>
                            <TableCell align="left">Payment status</TableCell>
                            <TableCell align="left">Total amount</TableCell>
                            <TableCell align="left">Total paid</TableCell>
                            <TableCell align="left">Total remaining</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                            <TableCell align="left">XYZ</TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left">₹21.27</TableCell>
                           </TableRow>
                        </TableBody>
                        <TableFooter sx={{height:'50px',backgroundColor:'#8080806e',textAlign:'center !important'}}>
                            <TableRow> 
                            <TableCell align="left"sx={reportStyles.footerStyle} colspan={4}>Total</TableCell>
                            <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
                            <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
                            <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
                            <TableCell align="left"sx={reportStyles.footerSmlTxtStyle}>Sell Due - ₹ 0.00 <br /> Sell Return Due - ₹ 0.00</TableCell>
                        
                            </TableRow>
                        </TableFooter>
                        </Table>
                    </TableContainer>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <TableContainer component={Paper} sx={{boxShadow:'none'}}>
                        <Grid container sx={reportStyles.grid_container}>    
                                <Grid>   
                                    <Button sx={reportStyles.button_grp}><FaFileCsv />&ensp;Export to CSV</Button>
                                    <Button sx={reportStyles.button_grp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                                    <Button sx={reportStyles.button_grp}><FaPrint />&ensp;Print</Button>
                                    <Button sx={reportStyles.button_grp}><FaFilePdf />&ensp;Export to PDF</Button>
                                </Grid>    
                            </Grid>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table" id="saleCommission">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Date</TableCell>
                                    <TableCell align="left">Invoice No.</TableCell>
                                    <TableCell align="left">Customer name</TableCell>
                                    <TableCell align="left">Location</TableCell>
                                    <TableCell align="left">Payment status</TableCell>
                                    <TableCell align="left">Total amount</TableCell>
                                    <TableCell align="left">Total paid</TableCell>
                                    <TableCell align="left">Total remaining</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left">₹ 0.00</TableCell>
                                </TableRow>
                            </TableBody>
                            <TableFooter sx={{height:'50px',backgroundColor:'#8080806e',textAlign:'center !important'}}>
                                <TableRow> 
                                    <TableCell align="left"sx={reportStyles.footerStyle} colspan={4}>Total</TableCell>
                                    <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
                                    <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
                                    <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
                                    <TableCell align="left"sx={reportStyles.footerSmlTxtStyle}>Sell Due - ₹ 0.00 <br /> Sell Return Due - ₹ 0.00</TableCell>
                                </TableRow>
                            </TableFooter>
                            </Table>
                        </TableContainer>
                </TabPanel>
                <TabPanel value={value} index={2}>
                <TableContainer component={Paper} sx={{boxShadow:'none'}}>
                        <Grid container sx={reportStyles.grid_container}>    
                                <Grid>   
                                    <Button sx={reportStyles.button_grp}><FaFileCsv />&ensp;Export to CSV</Button>
                                    <Button sx={reportStyles.button_grp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                                    <Button sx={reportStyles.button_grp}><FaPrint />&ensp;Print</Button>
                                    <Button sx={reportStyles.button_grp}><FaFilePdf />&ensp;Export to PDF</Button>
                                </Grid>    
                            </Grid>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table" id="Expenses">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Date</TableCell>
                                    <TableCell align="left">Reference No.</TableCell>
                                    <TableCell align="left">Expense Category</TableCell>
                                    <TableCell align="left">Location</TableCell>
                                    <TableCell align="left">Payment status</TableCell>
                                    <TableCell align="left">Total amount</TableCell>
                                    <TableCell align="left">Expense for</TableCell>
                                    <TableCell align="left">Expense note</TableCell>
                                  </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="left">xyz</TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"> </TableCell>
                                    <TableCell align="left"></TableCell>
                                    
                                </TableRow>
                            </TableBody>
                            <TableFooter sx={{height:'50px',backgroundColor:'#8080806e',textAlign:'center !important'}}>
                                <TableRow> 
                                    <TableCell align="left"sx={reportStyles.footerStyle} colspan={4}>Total</TableCell>
                                    <TableCell align="left"sx={reportStyles.footerStyle}></TableCell>
                                    <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
                                   <TableCell align="left"sx={reportStyles.footerStyle} colspan={2}></TableCell>
                               
                                </TableRow>
                            </TableFooter>
                            </Table>
                        </TableContainer>
                </TabPanel>
                </Box>
            <br />
  </>   
);
}
export default SalesRepresentative;