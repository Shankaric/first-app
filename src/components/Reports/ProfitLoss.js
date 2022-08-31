import React,{ useState} from 'react';
import {Typography,Select,FormControl,MenuItem, Grid, InputLabel, Box, Button,
    Table,TableBody,
    TableCell,TableContainer,Tabs,TableHead,TableRow,Paper,
    TableFooter } from '@mui/material';
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';

import "rsuite/dist/rsuite.css";
import { DateRangePicker } from 'rsuite';

//jquery
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';

//FONTAWESOME
import { FaFileCsv, FaPrint,FaMapMarker,FaFileAlt, FaUser,FaFilePdf,FaCalendar,FaCubes,FaTags } from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";

//Table
import ProfitLossTable from './ProfitLossTable';
import CloseStockTable from './CloseStockTable';

import {reportStyles} from './reportStyles'

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
    $('#ByProduct').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});
 



function ProfitLoss(){
    // TABS
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const [ProfitLoss, setProfitLoss] = useState({
        addsupContactType: "", ProfitAddLocation: "", addsupBusinessName: "", addsupPrefix: "", addsupFistN: "",
    });

   return(
    <Box>
    <Typography sx={reportStyles.UnitHeaderText}>Profit & Loss Report </Typography>
        <br /><br />
    <Grid container spacing={2}>
        <Grid item xs={7} md={7} sm={6}>
        </Grid>
        <Grid item xs={3} md={3} sm={12}>                             
            <Grid sx={{ display: 'flex' }}  >
                <Grid sx={{ fontSize: '20px', border: '1px solid #B97DF0', width: '33px', height: '40px', backgroundColor: '#B97DF0',paddingTop:'6px', color: '#fff',textAlign:'center', justfyContent:'center' }} ><FaMapMarker/></Grid>
                    <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                        <InputLabel id="demo-select-small">All locations</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                sx={{borderRadius:'0 !important'}}
                                id="demo-select-small"
                                label='All locations'
                                value={ProfitLoss.ProfitAddLocation}
                                onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
                                fullWidth
                            >
                                <MenuItem value="">
                                    <em>Please Select</em>
                                </MenuItem>
                                <MenuItem value={1}>yyy</MenuItem>
                                <MenuItem value={2}>xxx</MenuItem>
                            </Select>   
                    </FormControl>
                </Grid>
            </Grid>
            <Grid item xs={2} md={2} sm={12}>
                <DateRangePicker sx={{width:'100%'}}></DateRangePicker>
            </Grid>
         </Grid>   
        <br /><br />  
        {/* Table */}
        <Grid container spacing={1}>
                <Grid item xs={6} md={6}>
                    <Box sx={reportStyles.container}>
                        <ProfitLossTable />
                    </Box>
                </Grid>
                <Grid item xs={6} md={6}>
                    <Box sx={reportStyles.container}>
                        <CloseStockTable />
                    </Box>
                </Grid>
            </Grid>
        <br />
        {/* profit containers      */}

            <Box sx= {reportStyles.container}>
                <Typography variant='h5'> Gross Profit: ₹ 1,562.49</Typography>
                <Typography>(Total sell price - Total purchase price)</Typography>
                <br />
                <Typography variant='h5'> Net Profit: ₹ 1,562.49</Typography>
                <Typography>Gross Profit + (Total sell shipping charge + Total Stock Recovered + Total Purchase discount + Total sell round off )
        - ( Total Stock Adjustment + Total Expense + Total purchase shipping charge + Total transfer shipping charge + Purchase additional expenses + Total Sell discount + Total customer reward )</Typography>
            </Box>
        <br />
            <Box sx={reportStyles.container}>

            <Box sx={{ borderBottom: 1, borderColor: 'divider',textTransform: 'CAPITALIZE', }}>
                <Tabs value={value} onChange={handleChange} TabIndicatorProps={{style: {background:'none',borderTop:'5px solid #7009ab',borderLeft:'2px solid black',top:'0',borderRadius:'5px !important'}}}  aria-label="basic tabs example" scrollButtons variant="scrollable"  >
                <Tab iconPosition="start" label={<><div><FaCubes/>&ensp;Profit by products</div></>} {...a11yProps(0)}/>
                <Tab iconPosition="start" label={<><div><FaTags/>&ensp;Profit by categories</div></>} {...a11yProps(1)} />
                <Tab iconPosition="start" label={<><div>&ensp;Profit by brands</div></>}  {...a11yProps(2)} />
                <Tab iconPosition="start" label={<><div><FaMapMarker/>&ensp;Profit by locations</div></>} {...a11yProps(3)} />
                <Tab iconPosition="start" label={<><div><FaFileAlt/>&ensp;Profit by invoice</div></>} {...a11yProps(4)} />
                <Tab iconPosition="start" label={<><div><FaCalendar/>&ensp;Profit by date</div></>}{...a11yProps(5)} />
                <Tab iconPosition="start" label={<><div><FaUser/>&ensp;Profit by customer</div></>} {...a11yProps(6)} />
                <Tab iconPosition="start" label={<><div><FaCalendar/>&ensp;Profit by day</div></>} {...a11yProps(7)} />
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
                            <Table sx={{ minWidth: 700 }} aria-label="customized table" id="ByProduct">
                            <TableHead>
                                <TableRow>
                                <TableCell align="left">Product</TableCell>
                                <TableCell align="left">Gross Profit</TableCell>
                        
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell> Pieces </TableCell>
                                    <TableCell align="left"> ₹781.25</TableCell>
                                </TableRow>
                            </TableBody>
                            <TableFooter sx={{height:'50px',backgroundColor:'#8080806e',}}>
                                <TableRow>
                                    <TableCell sx={reportStyles.footerStyle}> Total </TableCell>
                                    <TableCell sx={reportStyles.footerStyle} align="left"> ₹781.25</TableCell>
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
                            <Table sx={{ minWidth: 700 }} aria-label="customized table" id="ByCategory">
                            <TableHead>
                                <TableRow>
                                <TableCell align="left">Category</TableCell>
                                <TableCell align="left">Gross Profit</TableCell>
                        
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell> Pieces </TableCell>
                                    <TableCell align="left"> ₹781.25</TableCell>
                                </TableRow>
                            </TableBody>
                            <TableFooter sx={{height:'50px',backgroundColor:'#8080806e',}}>
                                <TableRow>
                                    <TableCell sx={reportStyles.footerStyle}> Total </TableCell>
                                    <TableCell sx={reportStyles.footerStyle} align="left"> ₹781.25</TableCell>
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
                            <Table sx={{ minWidth: 700 }} aria-label="customized table" id="ByBrand">
                            <TableHead>
                                <TableRow>
                                <TableCell align="left">Brand</TableCell>
                                <TableCell align="left">Gross Profit</TableCell>
                        
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell> Pieces </TableCell>
                                    <TableCell align="left"> ₹781.25</TableCell>
                                </TableRow>
                            </TableBody>
                            <TableFooter sx={{height:'50px',backgroundColor:'#8080806e',}}>
                                <TableRow>
                                    <TableCell sx={reportStyles.footerStyle}> Total </TableCell>
                                    <TableCell sx={reportStyles.footerStyle} align="left"> ₹781.25</TableCell>
                                </TableRow>
                            </TableFooter>
                            </Table>
                        </TableContainer>
                </TabPanel>
                <TabPanel value={value} index={3}>
                <TableContainer component={Paper} sx={{boxShadow:'none'}}>
                        <Grid container sx={reportStyles.grid_container}>    
                                <Grid>   
                                    <Button sx={reportStyles.button_grp}><FaFileCsv />&ensp;Export to CSV</Button>
                                    <Button sx={reportStyles.button_grp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                                    <Button sx={reportStyles.button_grp}><FaPrint />&ensp;Print</Button>
                                    <Button sx={reportStyles.button_grp}><FaFilePdf />&ensp;Export to PDF</Button>
                                </Grid>    
                            </Grid>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table" id="ByLocation">
                            <TableHead>
                                <TableRow>
                                <TableCell align="left">Locations</TableCell>
                                <TableCell align="left">Gross Profit</TableCell>
                        
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell> Pieces </TableCell>
                                    <TableCell align="left"> ₹781.25</TableCell>
                                </TableRow>
                            </TableBody>
                            <TableFooter sx={{height:'50px',backgroundColor:'#8080806e',}}>
                                <TableRow>
                                    <TableCell sx={reportStyles.footerStyle}> Total </TableCell>
                                    <TableCell sx={reportStyles.footerStyle} align="left"> ₹781.25</TableCell>
                                </TableRow>
                            </TableFooter>
                            </Table>
                        </TableContainer>
                </TabPanel>
                <TabPanel value={value} index={4}>
                <TableContainer component={Paper} sx={{boxShadow:'none'}}>
                        <Grid container sx={reportStyles.grid_container}>    
                                <Grid>   
                                    <Button sx={reportStyles.button_grp}><FaFileCsv />&ensp;Export to CSV</Button>
                                    <Button sx={reportStyles.button_grp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                                    <Button sx={reportStyles.button_grp}><FaPrint />&ensp;Print</Button>
                                    <Button sx={reportStyles.button_grp}><FaFilePdf />&ensp;Export to PDF</Button>
                                </Grid>    
                            </Grid>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table" id="ByInvoice">
                            <TableHead>
                                <TableRow>
                                <TableCell align="left">Invoice No</TableCell>
                                <TableCell align="left">Gross Profit</TableCell>
                        
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell> Pieces </TableCell>
                                    <TableCell align="left"> ₹781.25</TableCell>
                                </TableRow>
                            </TableBody>
                            <TableFooter sx={{height:'50px',backgroundColor:'#8080806e',}}>
                                <TableRow>
                                    <TableCell sx={reportStyles.footerStyle}> Total </TableCell>
                                    <TableCell sx={reportStyles.footerStyle} align="left"> ₹781.25</TableCell>
                                </TableRow>
                            </TableFooter>
                            </Table>
                        </TableContainer>
                </TabPanel>
                <TabPanel value={value} index={5}>
                <TableContainer component={Paper} sx={{boxShadow:'none'}}>
                        <Grid container sx={reportStyles.grid_container}>    
                                <Grid>   
                                    <Button sx={reportStyles.button_grp}><FaFileCsv />&ensp;Export to CSV</Button>
                                    <Button sx={reportStyles.button_grp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                                    <Button sx={reportStyles.button_grp}><FaPrint />&ensp;Print</Button>
                                    <Button sx={reportStyles.button_grp}><FaFilePdf />&ensp;Export to PDF</Button>
                                </Grid>    
                            </Grid>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table" id="ByDate">
                            <TableHead>
                                <TableRow>
                                <TableCell align="left">Date</TableCell>
                                <TableCell align="left">Gross Profit</TableCell>
                        
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell> Pieces </TableCell>
                                    <TableCell align="left"> ₹781.25</TableCell>
                                </TableRow>
                            </TableBody>
                            <TableFooter sx={{height:'50px',backgroundColor:'#8080806e',}}>
                                <TableRow>
                                    <TableCell sx={reportStyles.footerStyle}> Total </TableCell>
                                    <TableCell sx={reportStyles.footerStyle} align="left"> ₹781.25</TableCell>
                                </TableRow>
                            </TableFooter>
                            </Table>
                        </TableContainer>
                </TabPanel>
                <TabPanel value={value} index={6}>
                <TableContainer component={Paper} sx={{boxShadow:'none'}}>
                        <Grid container sx={reportStyles.grid_container}>    
                                <Grid>   
                                    <Button sx={reportStyles.button_grp}><FaFileCsv />&ensp;Export to CSV</Button>
                                    <Button sx={reportStyles.button_grp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                                    <Button sx={reportStyles.button_grp}><FaPrint />&ensp;Print</Button>
                                    <Button sx={reportStyles.button_grp}><FaFilePdf />&ensp;Export to PDF</Button>
                                </Grid>    
                            </Grid>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table" id="ByCustomer">
                            <TableHead>
                                <TableRow>
                                <TableCell align="left">Customer</TableCell>
                                <TableCell align="left">Gross Profit</TableCell>
                        
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell> Pieces </TableCell>
                                    <TableCell align="left"> ₹781.25</TableCell>
                                </TableRow>
                            </TableBody>
                            <TableFooter sx={{height:'50px',backgroundColor:'#8080806e',}}>
                                <TableRow>
                                    <TableCell sx={reportStyles.footerStyle}> Total </TableCell>
                                    <TableCell sx={reportStyles.footerStyle} align="left"> ₹781.25</TableCell>
                                </TableRow>
                            </TableFooter>
                            </Table>
                        </TableContainer>
                </TabPanel>
                <TabPanel value={value} index={7}>
                <TableContainer component={Paper} sx={{boxShadow:'none'}}>
                        <Grid container sx={reportStyles.grid_container}>    
                                <Grid>   
                                    <Button sx={reportStyles.button_grp}><FaFileCsv />&ensp;Export to CSV</Button>
                                    <Button sx={reportStyles.button_grp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                                    <Button sx={reportStyles.button_grp}><FaPrint />&ensp;Print</Button>
                                    <Button sx={reportStyles.button_grp}><FaFilePdf />&ensp;Export to PDF</Button>
                                </Grid>    
                            </Grid>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table" id="ByDays">
                            <TableHead>
                                <TableRow>
                                <TableCell align="left">Days</TableCell>
                                <TableCell align="left">Gross Profit</TableCell>
                        
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell> Pieces </TableCell>
                                    <TableCell align="left"> ₹781.25</TableCell>
                                </TableRow>
                            </TableBody>
                            <TableFooter sx={{height:'50px',backgroundColor:'#8080806e',}}>
                                <TableRow>
                                    <TableCell sx={reportStyles.footerStyle}> Total </TableCell>
                                    <TableCell sx={reportStyles.footerStyle} align="left"> ₹781.25</TableCell>
                                </TableRow>
                            </TableFooter>
                            </Table>
                        </TableContainer>
                </TabPanel>
            </Box>


            </Box>

    );              
}
export default ProfitLoss;

