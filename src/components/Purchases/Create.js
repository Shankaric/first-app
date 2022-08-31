import React, { useState } from "react";
import { Box, Typography, Container,InputLabel,TextField,InputAdornment, OutlinedInput,Tooltip,Grid,FormControl, MenuItem, Select } from '@mui/material';
import { PurchaseStyle } from './PurchaseStyle';
import {FaUserAlt,FaInfoCircle} from 'react-icons/fa';
import { FcInfo,FcPlus } from "react-icons/fc";
import  SupplierModal  from './SupplierModal';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles, } from "@material-ui/core/styles";

  

function PurchaseCreate() {
    // Tooltip function
const useStyles = makeStyles(theme => ({
    arrow: {
        fontSize: 25,
        color: "7009AB !important",
        "&::before": {
            backgroundColor: "7009AB !important",
            boxShadow: '6px 6px 6px 9px #dedbdbae',
        }
    },
    tooltip: {
        fontSize: "17px !important",
        color: "#7009AB !important",
        backgroundColor: "white !important",
        boxShadow: '6px 6px 6px 9px #dedbdbae',
        padding: "20px",
    }
  }));
  const classes = useStyles();
    return(
        <>
        <Typography sx={PurchaseStyle.UnitHeaderText}>Add Purchase</Typography>
            <Box sx={PurchaseStyle.container}>
            
                <Grid container spacing={2}>
                    <Grid item sm={6} xs={12} md={3} lg={3}>
                        <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={PurchaseStyle.spanIcons}><FaUserAlt /></Grid>
                                    <FormControl size="small" fullWidth style={{ display: 'flex',borderRadius:'none !important' }}>
                                        <InputLabel id="demo-select-small">Supplier</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            // value={draftAdd.draftAddb}
                                            // onChange={(e) => { setDraftAdd({ ...draftAdd, DraftAddbrand: e.target.value }) }}
                                            label="Supplier"
                                            fullWidth
                                            sx={{borderRadius:'0px !important'}}
                                        >
                                            <MenuItem value={1}>Please Select</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Grid sx={PurchaseStyle.spanIcons}>    <FcPlus/></Grid>
                                </Grid>
                    </Grid>
                    <Grid item sm={6} xs={12} md={3} lg={3}>
                         <Grid sx={{ display: 'flex' }}  >
                                <Grid>
                                    <FormControl variant="outlined" size="small" fullWidth>
                                        <InputLabel htmlFor="outlined-adornment-password">Reference No</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            endAdornment={
                                                <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} title='Payments to be paid for purchases/sales within the given time period. All upcoming or due payments will be displayed in dashboard - Payment Due section' arrow>
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            edge="end"
                                                            label='Reference No'
                                                            sx={{borderRadius:'0px !important'}}
                                                            // value={draftAdd.draftAddPayTerm}
                                                            // onChange={(e) => { setDraftAdd({ ...draftAdd, DraftAddPayTerm: e.target.value }) }}
                                                        >
                                                            <FcInfo />
                                                        </IconButton>
                                                    </InputAdornment>
                                                </Tooltip>
                                            }
                                            label="Pay Term"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                    </Grid>
                    <Grid item sm={6} xs={12} md={3} lg={3}>
                        <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={PurchaseStyle.spanIcons}><FaUserAlt /></Grid>
                                    <FormControl size="small" fullWidth style={{ display: 'flex',borderRadius:'none !important' }}>
                            
                                        <TextField
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            size='small'
                                            // value={draftAdd.draftAddb}
                                            // onChange={(e) => { setDraftAdd({ ...draftAdd, DraftAddbrand: e.target.value }) }}
                                            label='purchase date'
                                            fullWidth
                                            sx={{borderRadius:'0px !important'}}
                                        >
                                           
                                        </TextField>
                                    </FormControl>
                                 
                                </Grid>
                         </Grid>
                   
                    <Grid item sm={6} xs={12} md={3} lg={3}>
                        <FormControl size="small" fullWidth style={{ display: 'flex',borderRadius:'none !important' }}>
                                            <InputLabel id="demo-select-small">Supplier</InputLabel>
                                            <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                // value={draftAdd.draftAddb}
                                                // onChange={(e) => { setDraftAdd({ ...draftAdd, DraftAddbrand: e.target.value }) }}
                                                label="Supplier"
                                                fullWidth
                                                sx={{borderRadius:'0px !important'}}
                                            >
                                                <MenuItem value={1}>Please Select</MenuItem>
                                            </Select>
                                </FormControl>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
export default PurchaseCreate;
