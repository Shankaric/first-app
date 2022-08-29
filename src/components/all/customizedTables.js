import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../css/import.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {

    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
  
  root: {

    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, '	', 'Name of the product'),
 
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper} sx={{
         padding:1,
      width:'100%',
      // height:400,
      margin:'auto',
      overflow:'auto',
       "&::-webkit-scrollbar":{
        width:20
      },
      "&::-webkit-scrollbar-track":{
        backgroundColor:'pink'
      },
      "&::-webkit-scrollbar-thumb":{
        backgroundColor:'blue'
      }
    }} >
      <Table md={{ minWidth: 200,maxHeight:'5px',overflow: 'auto'}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className="firstcolumn">Column Number</StyledTableCell>
            <StyledTableCell className="secondcolumn" align="left">Column Name</StyledTableCell>
            <StyledTableCell className="thirdcolumn" align="left">Instruction</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
         
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">1</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Product Name</span> <span>(Required)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata">Name of the product</span> </StyledTableCell>
            
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">2</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Brand  </span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata">Name of the brand</span><br /> <span>(If not found new brand with the given name will be created))</span></StyledTableCell>
            
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">3</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Unit  </span> <span>(Required)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata">Name of the unit  </span></StyledTableCell>
            
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">4</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Category  </span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata">Name of the Category</span><br /> <span>(If not found new category with the given name will be created)</span></StyledTableCell>

            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">5</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Sub category </span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata">Name of the Sub-Category </span> <span>(If not found new sub-category with the given name under the parent Category will be created)</span>	</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">6</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">SKU </span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata">Product SKU. If blank an SKU will be automatically generated </span> </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">7</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Barcode Type</span> <span>(Optional, Default: C128)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata">Barcode Type for the product.</span><br /><span className="importTableBoldText">Currently supported: C128, C39, EAN-13, EAN-8, UPC-A, UPC-E, ITF-14</span></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">8</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">	Manage Stock? </span> <span>(Required)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata">Enable or disable stock managemant</span><br /><span className="importTableBoldText">1 = Yes <br /> 0 = No</span></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">9</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">	Alert quantity</span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata">	Alert quantity</span></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">10</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">	Expires in</span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata">Product expiry period (Only in numbers)</span></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">11</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Expiry Period Unit</span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata">Unit for the expiry period</span><p className="importTableBoldText">Available Options: days and months</p></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">12</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Applicable Tax</span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata">Name of the Tax Rate</span><br /><p className="importTabledata">If purchase Price (Excluding Tax) is not same as Purchase Price (Including Tax) then you must supply the tax rate name.</p></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">13</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">	Selling Price Tax Type </span> <span>(Required)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata">Selling Price Tax Type</span><br /><span className="importTableBoldText">Available Options: inclusive, exclusive</span></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">14</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Product Type </span> <span>(Required)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata">Product Type</span><br /><span className="importTableBoldText">Available Options: single, variable</span></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">15</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Variation Name </span> <span>(Required if product type is variable)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata">Name of the variation (Ex: Size, Color etc )</span></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">16</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Variation Values </span> <span>(Required if product type is variable)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata">Values for the variation separated with '|'(Ex: Red|Blue|Green)</span></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">17</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">	Purchase Price (Including Tax) </span> <span>(Required if Purchase Price Excluding Tax is not given)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata">Purchase Price (Including Tax) (Only in numbers) </span><p className="importTabledata">For variable products '|' separated values with the same order as Variation Values (Ex: 84|85|88)</p></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">18</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Purchase Price (Excluding Tax) </span> <span>(Required if Purchase Price Including Tax is not given)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata">Purchase Price (Excluding Tax) (Only in numbers) </span><p className="importTabledata">For variable products '|' separated values with the same order as Variation Values (Ex: 84|85|88)</p></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">19</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Profit Margin %  </span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata">Profit Margin (Only in numbers)</span> <span>If blank default profit margin for the business will be used</span>	</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">20</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Selling Price </span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata">Selling Price (Only in numbers)</span> <span>If blank selling price will be calculated with the given Purchase Price and Applicable Tax</span>	</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">21</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Opening Stock </span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata">Opening Stock (Only in numbers) </span><p className="importTabledata">For variable products separate stock quantities with '|' (Ex: 100|150|200)</p></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">22</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">	Opening stock location</span> <span>(Optional)</span><br /><span>If blank first business location will be used</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata">Name of the business location</span></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">23</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">	Expiry Date </span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata">Stock Expiry Date</span><p className="importTableBoldText">Format: mm-dd-yyyy; Ex: 11-25-2018</p></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">24</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Enable Product description, IMEI or Serial Number</span> <span>(Optional, Default: 0)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTableBoldText">1 = Yes <br /> 0 = No</span></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">25</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Weight</span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata">Optional</span></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">26</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">	Rack</span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata">Rack details seperated by '|' for different business locations serially.</span> <br /><span className="importTabledata">	(Ex: R1|R5|R12)</span></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">27</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">	Row</span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata">Row details seperated by '|' for different business locations serially.</span><br /><span className="importTabledata">(Ex: ROW1|ROW2|ROW3)</span></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">28</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">	Position</span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata">	Position details seperated by '|' for different business locations serially.</span><br /><span className="importTabledata">(Ex: POS1|POS2|POS3)</span></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">29</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">	Image  (Optional)</span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata">Image name with extension.</span> <br /><span className="importTabledata">	(Image name must be uploaded to the server public/uploads/img )</span></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">30</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">	Product Description</span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata"></span></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">31</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Custom Field1 </span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata"></span></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">32</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Custom Field2</span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata"></span></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">33</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Custom Field3</span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata"></span></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">34</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Custom Field4</span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata"></span></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">35</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">	Not for selling </span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTableBoldText">	1 = Yes <br />0 = No</span></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell  component="th" scope="row">36</StyledTableCell>
                <StyledTableCell  align="left"><span className="importTabledata">Product locations</span> <span>(Optional)</span>	</StyledTableCell>
                <StyledTableCell align="left"><span className="importTabledata">Comma separated string of business location names where product will be available</span></StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
