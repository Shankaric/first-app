import React, {useEffect} from 'react';
import { Button, Grid } from '@mui/material';
import {ImportContainer} from './component-styles'
import { FaDownload } from 'react-icons/fa';
// import MyTable from './myTable';
import CustomizedTables from "./customizedTables";

function ImportProducts() {
    useEffect(() => {
        document.body.classList.add('importbody');
    });
    return (
        <div className='import-products-container'>
                <p className="ImporTHeaderText">Import Products</p>
        <ImportContainer>
            <h3>File to import</h3>
            
            <Grid container spacing={2}>
                <Grid item md={8}>
                <Button variant="contained" component="label">
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                    </Button>
                </Grid>
                <Grid item md={4}>
                    <Button variant="contained" color="primary">Submit</Button>
                </Grid>   
            </Grid>
            <br /><br />    
            <Button variant="contained" color="success"><FaDownload/>&ensp;Download template file</Button>
            
        </ImportContainer><br />
    <ImportContainer>
        <p className="importheadtext">Instructions</p>
        <br />
        <h4 className="importsubheadtext">Follow the instructions carefully before importing the file</h4>
        <p className="importsubheadtext">The columns of the file should be in the following order.</p>
        <br /><br />
    <CustomizedTables></CustomizedTables>
    
    </ImportContainer>
    </div>
    );
    
}
export default ImportProducts;