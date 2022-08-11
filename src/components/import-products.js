import React from 'react';
import { Button, Grid } from '@mui/material';
import {ImportContainer} from './component-styles'
import { FaDownload } from 'react-icons/fa';
import {CustomizedTables} from './CustomizedTables'

function ImportProducts() {
 
    return (
        <div className='import-products-container'>
        <ImportContainer>
            <h3>File to import</h3>
            
            <Grid container spacing={2}>
                <Grid item md={8}>
                    <input type="file" className='inputfile'/>
                </Grid>
                <Grid item md={4}>
                    <Button variant="contained" color="primary">Submit</Button>
                </Grid>   
            </Grid>
            <br /><br />    
            <Button variant="contained" color="success"><FaDownload/>&ensp;Download template file</Button>
            
        </ImportContainer><br />
    <ImportContainer>
            
    <CustomizedTables></CustomizedTables>
    </ImportContainer>
    </div>
    );
    
}
export default ImportProducts;