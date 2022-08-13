import React, {useEffect} from 'react';
import { Button, Grid } from '@mui/material';
import {ImportContainer} from './component-styles'
import { FaDownload } from 'react-icons/fa';
// import MyTable from './myTable';
import ImportContactTable from "./ImportContactTable";

function Importcontacts() {
    useEffect(() => {
        document.body.classList.add('importbody');
    });
    return (
        <div className='import-products-container'>
            <p className="ImporTHeaderText">Import Contacts</p>
        <ImportContainer>
            <h3>File to import</h3>
            
            <Grid container spacing={2}>
                <Grid item md={8}>
                <Button variant="contained" component="label" sx={{ textTransform: 'Capitalize'}}>
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                    </Button>
                </Grid>
                <Grid item md={4}>
                    <Button variant="contained" color="primary" sx={{ textTransform: 'Capitalize'}}>Submit</Button>
                </Grid>   
            </Grid>
            <br /><br />    
            <Button variant="contained" color="success" sx={{ textTransform: 'Capitalize'}}><FaDownload/>&ensp;Download template file</Button>
            
        </ImportContainer><br />
    <ImportContainer>
        <p className="importheadtext">Instructions</p>
        <br />
        <h4 className="importsubheadtext">Follow the instructions carefully before importing the file</h4>
        <p className="importsubheadtext">The columns of the file should be in the following order.</p>
        <br /><br />
    <ImportContactTable></ImportContactTable>
    
    </ImportContainer>
    </div>
    );
    
}
export default Importcontacts;