import * as React from "react";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Typography,Container,Select,Checkbox,FormControl,MenuItem, Grid, InputLabel, Box, Button,
   Menu,TableSortLabel,Tooltip,Avatar,Divider,Toolbar,Table,TableBody,
   TableCell,TableContainer,Tabs,TableHead,TableRow,Paper,Dialog,DialogTitle,
   DialogContent,DialogActions,tableCellClasses} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import HourglassFullIcon from "@mui/icons-material/HourglassFull";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { makeStyles } from '@material-ui/core/styles'

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { FaFileCsv, FaPrint, FaFilePdf, FaEdit, FaEye, FaTrash, 
  FaDatabase, FaHistory, FaCopy, FaBarcode,} from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";
import { visuallyHidden } from "@mui/utils";
import {Link} from "@mui/material";
import {prodStyle, prodList} from "./ProductStyle";
// import Sidebar from '../../../header/Sidebar';
import ProductTable from './AllProductTable';
import Stocktable from './StockTable';

//jquery
import $ from 'jquery';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";



// Accordion style
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: 0,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

// Accordion Header Style
const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({ theme }) => ({
    backgroundColor: "white",

    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  })
);

// Accordion Body Style
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(3),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));



 function Productlist() {

// Filter - All Select Inputs
const [productFilter, setProductFilter] = useState({ProductType: "",Category: "",Unit:"",Tax:"",Brand:"",BusinessLocation:"",Status:""})






// Accordion expand  
  const [expanded, setExpanded] = useState("panel1");

  const handleChangePanel = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [TabValue, setTabValue] = useState("1");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };



// Stock Report Table Modal
  const [ModalOpen, setModalOpen] = useState(false);

  const handleClickModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };


  return (

    <>
    <Box sx={{margin: '0px 30px'}}>
      <Typography  variant="h5" sx={prodStyle.UnitHeaderText}>Products <Typography  sx={prodStyle.UnitSubHeaderText}>Manage your products</Typography></Typography>

      {/* *****Filters Grid***** */}

    <Box>
      <Grid>
        <Grid  fullWidth sx={{ '& .MuiGrid-root':{
          paddingRight: 0,paddingLeft: 0,        }}}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChangePanel("panel1")}
            sx={ prodStyle.filtercontainer}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography sx={{ color: " #7009AB" }}>
                <FilterAltIcon /> Filter
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                <Grid  item  md={3}  sm={6}  xs={10} sx={prodList.select_input} >
                  <Typography>
                    <FormControl sx={ prodList.select_formcontrol } size="small" fullWidth >
                      <InputLabel id="demo-select-small">Product Type </InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={productFilter.ProductType}
                        label="Product Type"
                        onChange={(event) => {
                          setProductFilter({...productFilter, ProductType: event.target.value})
                        }}
                      >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value={"single"}>Single</MenuItem>
                        <MenuItem value={"variable"}>Variable</MenuItem>
                        <MenuItem value={"combo"}>Combo</MenuItem>
                      </Select>
                    </FormControl>
                  </Typography>
                </Grid>

                <Grid  item  md={3}  sm={6}  xs={10} sx={prodList.select_input} >
                  <Typography>
                  <FormControl sx={ prodList.select_formcontrol } size="small" fullWidth >
                      <InputLabel id="demo-select-small">Category</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={productFilter.Category}
                        label="Category"
                        onChange={(event) => {
                          setProductFilter({...productFilter, Category: event.target.value})
                        }}
                      >
                        <MenuItem value="category_all">All</MenuItem>
                      </Select>
                    </FormControl>
                  </Typography>
                </Grid>

                <Grid  item  md={3}  sm={6}  xs={10} sx={prodList.select_input} >
                  <Typography>
                  <FormControl sx={ prodList.select_formcontrol } size="small" fullWidth >
                      <InputLabel id="demo-select-small">Unit</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={productFilter.Unit}
                        label="Unit"
                        onChange={(event) => {
                          setProductFilter({...productFilter, Unit: event.target.value})
                        }}
                      >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value={"pieces"}>Pieces (Pc(s))</MenuItem>
                      </Select>
                    </FormControl>
                  </Typography>
                </Grid>

                <Grid  item  md={3}  sm={6}  xs={10} sx={prodList.select_input} >
                  <Typography>
                  <FormControl sx={  prodList.select_formcontrol } size="small" fullWidth >
                      <InputLabel id="demo-select-small">Tax</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={productFilter.Tax}
                        label="Tax"
                        onChange={(event) => {
                          setProductFilter({...productFilter, Tax: event.target.value})
                        }}
                      >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value={"gst"}>GST</MenuItem>
                        <MenuItem value={"cgst"}>CGST</MenuItem>
                        <MenuItem value={"tax"}>Tax</MenuItem>
                      </Select>
                    </FormControl>
                  </Typography>
                </Grid>

                <Grid  item  md={3}  sm={6}  xs={10} sx={prodList.select_input} >
                  <Typography>
                  <FormControl sx={  prodList.select_formcontrol } size="small" fullWidth >
                      <InputLabel id="demo-select-small">Brand</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={productFilter.Brand}
                        label="Brand"
                        onChange={(event) => {
                          setProductFilter({...productFilter, Brand: event.target.value})
                        }}
                      >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value={"motog"}>MotoG</MenuItem>
                      </Select>
                    </FormControl>
                  </Typography>
                </Grid>

                <Grid  item  md={3}  sm={6}  xs={10} sx={prodList.select_input} >
                  <Typography>
                    <FormControl sx={  prodList.select_formcontrol } size="small" fullWidth >
                      <InputLabel id="demo-select-small">
                        Business Location 
                      </InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={productFilter.BusinessLocation}
                        label="Business Location"
                        onChange={(event) => {
                          setProductFilter({...productFilter, BusinessLocation: event.target.value})
                        }}
                      >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value={"none"}>None</MenuItem>
                        <MenuItem value={"xyz"}>XYZ (123456)</MenuItem>
                        <MenuItem value={"juiceria"}>
                          Juiceria (1234567)
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Typography>
                </Grid>

                <Grid  item  md={3}  sm={6}  xs={10} sx={prodList.select_input} >
                  <Typography>
                  <FormControl sx={  prodList.select_formcontrol } size="small" fullWidth >
                      <Select  value={productFilter.Status}   onChange={(event) => {
                          setProductFilter({...productFilter, Status: event.target.value})
                        }}  displayEmpty >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value={"active"}>Active</MenuItem>
                        <MenuItem value={"inactive"}>Inactive</MenuItem>
                      </Select>
                    </FormControl>
                  </Typography>
                </Grid>

                <Grid item md={3} sm={6} xs={10}>
                  <Typography>
                    <FormControl sx={{ m: 1 }} size="small" fullWidth>
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked
                            sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
                          />
                        }
                        label="Not for selling"
                      />
                    </FormControl>
                  </Typography>
                </Grid>

              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>

      {/* ********Tabs Grid******** */}

      <>
<br />
<br />
      <Grid sx={ prodStyle.prod_container } >
        <Box sx={{ typography: "body1" }}>
          <TabContext value={TabValue}>
            <Box>
              <TabList TabIndicatorProps={{style: {background:'none',borderTop:'5px solid #7009ab',top:'0',borderRadius:'5PX'}}}  sx={prodList.tab} onChange={handleTabChange} aria-label="Tabs">
                <Tab  iconPosition="" label={<><div><ViewInArIcon/>&ensp;All Products</div></>} value="1" style={prodList.tab}
                />
                <Tab iconPosition="start" label={<><div><HourglassFullIcon/> Stock Report</div></>} 
                value="2" style={prodList.tab}
                />
              </TabList>
            </Box>
            <TabPanel value="1" sx={prodList.tabpanel}>
              <>
              <Box sx={prodStyle.ProductContainer}>
                  <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Typography  sx={prodStyle.boxheadertxt}>All your units</Typography>
                        </Grid>
                        <Grid item xs={4} sx={{textAlign:'right !important'}}>
                          <Button variant="contained" sx={prodStyle.prod_saveadd}>Add</Button>
                        </Grid>
                          
                    </Grid>
                          
                    <br />
                    <Box>
                   <ProductTable></ProductTable>
                    </Box>
            </Box>
              </>
            </TabPanel>

              {/* *****Stock Report***** */}

            <TabPanel value="2" sx={prodList.tabpanel}>
              <>
              <Box sx={prodStyle.ProductContainer}>
                  <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Typography  sx={prodStyle.boxheadertxt}>All your units</Typography>
                        </Grid>
                        <Grid item xs={4} sx={{textAlign:'right !important'}}>
                          <Button variant="contained" sx={prodStyle.prod_saveadd}>Add</Button>
                        </Grid>
                          
                    </Grid>
                      <Stocktable></Stocktable>
                      </Box>
              </>
            </TabPanel>
    
          </TabContext>
        </Box>
      </Grid>
      </>
      </Box>
    
    </Box>
    <br /><br />
    </>
  );
}

// function Productlist(){
//   return(
//     <Box sx={{display:'flex', width:'100%', alignContent: 'space-between',justifyContent: 'space-evenly', overflowX: 'hidden',}} >
//     <Sidebar />
//     <Box sx={{ width: '100%' }}>
//       <Box component="main" sx={{ padding: '30px !important',}}><br /><br />
//         <Productlisttable />
//       </Box>
//     </Box>
//   </Box>
//   );
// }

export default Productlist;