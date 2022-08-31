import React, { useState } from "react";
import { Box, AccordionSummary, Typography,Button, Table,TableBody,TableCell,TableContainer,Tabs,TableHead,TableRow,Paper, Grid, TableFooter, InputLabel, Accordion,AccordionDetails,FormControl, MenuItem, Select } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {reportStyles} from './reportStyles';
import { FaFileCsv, FaPrint,FaFilePdf,FaArrowCircleDown,FaArrowCircleUp,FaMinusCircle} from "react-icons/fa";
import { FcInfo } from "react-icons/fc";
import { AiFillFileExcel } from "react-icons/ai";
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
//jquery
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';
//DateRange PICKER
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
  
 //  JQUERY
 $(document).ready(function () {
    setTimeout(function(){
    $('#inputtax').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});
$(document).ready(function () {
    setTimeout(function(){
    $('#outputtax').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});
$(document).ready(function () {
    setTimeout(function(){
    $('#expensetax').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});

function TaxReport() {

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
        <Typography sx={reportStyles.UnitHeaderText}>Tax Report</Typography>   <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={reportStyles.filtercontainer}>
             <AccordionSummary aria-controls="panel1d-content"  id="panel1d-header" sx={{color:'#7009ab !IMPORTANT',boxShadow:'0px 0px 2px #00000047',width:'100%'}}><Typography sx={{fontSize:'20px'}}><FilterAltIcon /> Filter</Typography></AccordionSummary>
                <AccordionDetails >
                  <br /> 
                    <Grid container spacing={2}>
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
                                    fullWidth  >
                                
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
                <Typography variant="h6" sx={{color:'#384460'}}>Overall (Input - Output - Expense) &ensp;<FcInfo/></Typography>
                <br /><br />
                <Typography variant="h5">Output Tax - Input Tax - Expense Tax: ₹ 0.00</Typography>
            </Box>
            <br />
            <Box sx={reportStyles.container}>     
                <Box sx={{ borderBottom: 1, borderColor: 'divider',textTransform: 'CAPITALIZE', }}>
                    <Tabs value={value} onChange={ProductSellChange} TabIndicatorProps={{style: {background:'none',borderTop:'5px solid #7009ab',borderLeft:'2px solid black',top:'0',borderRadius:'5px !important'}}}  aria-label="basic tabs example" scrollButtons variant="scrollable"  >
                    <Tab iconPosition="start" label={<><div><FaArrowCircleDown/>&ensp;Input Tax</div></>} {...a11yProps(0)}/>
                    <Tab iconPosition="start" label={<><div><FaArrowCircleUp/>&ensp;Output Tax</div></>} {...a11yProps(1)} />
                    <Tab iconPosition="start" label={<><div><FaMinusCircle/>&ensp;Expense Tax</div></>} {...a11yProps(2)} />
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
                                <Table sx={{ minWidth: 700 }} aria-label="customized table" id="inputtax">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left">Date</TableCell>
                                            <TableCell align="left">Reference No</TableCell>
                                            <TableCell align="left">Supplier</TableCell>
                                            <TableCell align="left">Tax number</TableCell>
                                            <TableCell align="left">Total amount</TableCell>
                                            <TableCell align="left">Pyament method</TableCell>
                                            <TableCell align="left">Discount</TableCell>
                                            <TableCell align="left">GST</TableCell>
                                            <TableCell align="left">CGST</TableCell>
                                            <TableCell align="left">TAX</TableCell>
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
                                            <TableCell align="left"sx={reportStyles.footerStyle}></TableCell>
                                            <TableCell align="left"sx={reportStyles.footerStyle}></TableCell>
                                            <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
                                            <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
                                            <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
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
                                    <Table sx={{ minWidth: 700 }} aria-label="customized table" id="outputtax">
                                        <TableHead>
                                        <TableRow>
                                            <TableCell align="left">Date</TableCell>
                                            <TableCell align="left">Reference No</TableCell>
                                            <TableCell align="left">Customer</TableCell>
                                            <TableCell align="left">Tax number</TableCell>
                                            <TableCell align="left">Total amount</TableCell>
                                            <TableCell align="left">Pyament method</TableCell>
                                            <TableCell align="left">Discount</TableCell>
                                            <TableCell align="left">GST</TableCell>
                                            <TableCell align="left">CGST</TableCell>
                                            <TableCell align="left">TAX</TableCell>
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
                                            <TableCell align="left"sx={reportStyles.footerStyle}></TableCell>
                                            <TableCell align="left"sx={reportStyles.footerStyle}></TableCell>
                                            <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
                                            <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
                                            <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
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
                                    <Table sx={{ minWidth: 700 }} aria-label="customized table" id="exptensetax">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="left">Date</TableCell>
                                                <TableCell align="left">Reference No</TableCell>
                                                <TableCell align="left">Tax number</TableCell>
                                                <TableCell align="left">Total amount</TableCell>
                                                <TableCell align="left">Pyament method</TableCell>
                                                <TableCell align="left">Discount</TableCell>
                                                <TableCell align="left">GST</TableCell>
                                                <TableCell align="left">CGST</TableCell>
                                                <TableCell align="left">TAX</TableCell>
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
                                                <TableCell align="left">₹21.27</TableCell>
                                            </TableRow>
                                        </TableBody>
                                        <TableFooter sx={{height:'50px',backgroundColor:'#8080806e',textAlign:'center !important'}}>
                                            <TableRow> 
                                                <TableCell align="left"sx={reportStyles.footerStyle} colspan={4}>Total</TableCell>
                                                <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
                                                <TableCell align="left"sx={reportStyles.footerStyle}></TableCell>
                                                <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
                                                <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
                                                <TableCell align="left"sx={reportStyles.footerStyle}>₹ 0.00</TableCell>
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


export default TaxReport;