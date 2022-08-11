import React from 'react';
import { Grid } from '@mui/material';
import {ImportContainer} from './component-styles'


function ImportProducts() {
 
    return (
        <ImportContainer>
            <h6>File to import</h6>
            
            <Grid container spacing={2}>
                <Grid item xs={6} md={8}>
                    <input type="file" />
                </Grid>
                <Grid item xs={6} md={4}>
                    <button></button>
                </Grid>
            
            </Grid>
        </ImportContainer>

    );
    
}
export default ImportProducts;