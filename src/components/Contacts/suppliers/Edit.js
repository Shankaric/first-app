import React,{ useState} from 'react';
import { Button, Grid ,Typography,InputLabel, FormControl,
    OutlinedInput, Radio, FormControlLabel, RadioGroup,
   MenuItem, Select } from '@mui/material';

// dialogbox
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ContactPageSharpIcon from '@mui/icons-material/ContactPageSharp';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EmailIcon from '@mui/icons-material/Email';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import MoneySharpIcon from '@mui/icons-material/MoneySharp';

import { FaInfo, FaFileCsv, FaPrint, FaFilePdf,FaEdit } from "react-icons/fa";

// inputfield
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


// checkbox
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

// animation
import Zoom from '@mui/material/Zoom';



//Style
import { contactstyle } from '../CotactStyle';


// Dialog THEME
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

// ZOOM ANIMATION
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Zoom timeout={500} ref={ref} {...props} />;
  });





const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };
  
 //modal
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };


 
function Suppliercreate(){

      //***individual or business****//
      const [shown, setShown] = useState(true);


    //  dropdown 
    const [currency, setCurrency] = useState('');

    const handleChange = (event) => {
      setCurrency(event.target.value);
    };

    //Add modal
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

     //  Add Text field
     const [addsupModForm, setAddSupModForm] = useState({
        addsupContactType: "", addsupContactId: "", addsupBusinessName: "", addsupPrefix: "", addsupFistN: "", addsupMiddleN: "", addsupLastN: "", addsupMobile: "",
        addsupAlternateMob: "", addsupLandline: "", addsupEmail: "", addsupDate: "", addsupTaxNo: "", addsupOpeningBal: "", addsupPayTerm: "", addsupAddressL1: "",
        addsupAddressL2: "", addsupCountry: "", addsupState: "", addsupCity: "", addsupZipCode: "", addsupCustom1: "", addsupCustom2: "", addsupCustom3: "",
        addsupCustom4: "", addsupCustom5: "", addsupCustom6: "", addsupCustom7: "", addsupCustom8: "", addsupCustom9: "", addsupShipping: "",
    });
    
    //****add Modal***//

    const [supplierAddMod, setSupplierAddMod] = useState(false);
    const handleClickOpen1 = () => {
        setSupplierAddMod(true);
    };
    const handleClose1 = () => {
        setSupplierAddMod(false);
    };
  
    //***more information***// 
    const [hidden, setHidden] = useState(true);

return(
<>
<MenuItem onClick={handleClickOpen} disableRipple>
                                                
                                                  <FaEdit/>  Edit
                                                </MenuItem>
    {/* <Button variant="contained" onClick={handleClickOpen} sx={contactstyle.boxAddButton} color="primary">Add</Button> */}

    <BootstrapDialog PaperProps={{
              style: {
                borderRadius:"10px"
              }
            }}
        onClose={handleClose}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        maxWidth='md'
        aria-describedby="alert-dialog-slide-description"
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
            Edit Supplier
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, maxWidth: '95%', minWidth:'95%',width:'400px' },
        '& .MuiOutlinedInput-notchedOutline': {
          border: '1px solid #B97DF0',
      },
      }}
      noValidate
      autoComplete="off"
    >
        
        <Grid container spacing={4} >
                                <Grid item md={4}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={contactstyle.grid_icons} >
                                            <PersonIcon />
                                        </Grid>
                                        <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                            <InputLabel id="demo-select-small">Contact type*</InputLabel>
                                            <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                label="contact type*"
                                                value={addsupModForm.addsupContactType}
                                                onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupContactType: event.target.value }) }}
                                                fullWidth>

                                                <MenuItem value="">
                                                    <em>Please Select</em>
                                                </MenuItem>
                                                <MenuItem value={1}>supplier</MenuItem>
                                                <MenuItem value={2}>customer</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>


                                <Grid item md={4}  >

                                    <FormControl>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                            sx={{ paddingLeft: '30px' }} >


                                            <FormControlLabel value="female" onClick={() => setShown(true)} control={<Radio />} label="Individual" />


                                            <FormControlLabel value="male" onClick={() => setShown(false)} control={<Radio />} label="Business" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>


                                <Grid item md={4}>
                                    <Grid sx={{ display: 'flex', paddingLeft: '30px' }}  >
                                        <Grid sx={contactstyle.grid_icons}>
                                            <ContactPageSharpIcon />
                                        </Grid>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Contact Id</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Contact Id"
                                                value={addsupModForm.addsupContactId}
                                                onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupContactId: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>




                                {/* second grid start */}


                                {!shown ?

                                    <>
                                        <Grid item md={4} >
                                            <Grid sx={{ display: 'flex' }}  >


                                                <Grid sx={contactstyle.grid_icons}><BusinessCenterIcon />
                                                </Grid>
                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">Business Name</InputLabel>
                                                    <OutlinedInput
                                                        id="component-outlined"
                                                        label="Business Name"
                                                        value={addsupModForm.addsupBusinessName}
                                                        onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupBusinessName: event.target.value }) }}
                                                        type="text"
                                                    />
                                                </FormControl>

                                            </Grid>
                                        </Grid>

                                        <Grid item md={8}  >

                                        </Grid>
                                    </>

                                    :
                                    <>
                                        {/* 3rd grid start-individual */}


                                        <Grid item md={3}>

                                            <Grid sx={{ display: 'flex' }}  >

                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">prefix</InputLabel>
                                                    <OutlinedInput
                                                        id="component-outlined"
                                                        label="Business Name"
                                                        value={addsupModForm.addsupPrefix}
                                                        onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupPrefix: event.target.value }) }}
                                                        type="text"
                                                    />
                                                </FormControl>
                                            </Grid>
                                        </Grid>

                                        <Grid item md={3}>
                                            <Grid sx={{ display: 'flex' }}  >

                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">First Name</InputLabel>
                                                    <OutlinedInput
                                                        id="component-outlined"
                                                        label="First Name"
                                                        value={addsupModForm.addsupFistN}
                                                        onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupFistN: event.target.value }) }}
                                                        type="text"
                                                    />
                                                </FormControl>
                                            </Grid>
                                        </Grid>


                                        <Grid item md={3}>
                                            <Grid sx={{ display: 'flex' }}  >

                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">Middle Name</InputLabel>
                                                    <OutlinedInput
                                                        id="component-outlined"
                                                        label="Middle Name"
                                                        value={addsupModForm.addsupMiddleN}
                                                        onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupMiddleN: event.target.value }) }}
                                                        type="text"
                                                    />
                                                </FormControl>

                                            </Grid>

                                        </Grid>

                                        <Grid item md={3}>
                                            <Grid sx={{ display: 'flex' }}  >

                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">Last Name</InputLabel>
                                                    <OutlinedInput
                                                        id="component-outlined"
                                                        label="Last Name"
                                                        value={addsupModForm.addsupLastN}
                                                        onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupLastN: event.target.value }) }}
                                                        type="text" />

                                                </FormControl>
                                            </Grid>

                                        </Grid>
                                    </>


                                }

                                {/* 4th grid start */}
                                <Grid item md={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={contactstyle.grid_icons}> <MobileScreenShareIcon />
                                        </Grid>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Mobile *</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Mobile *"
                                                value={addsupModForm.addsupMobile}
                                                onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupMobile: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>


                                <Grid item md={3}  >
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={contactstyle.grid_icons}>  <MobileFriendlyIcon />
                                        </Grid>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Alternate Mobile </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Alternate Mobile"
                                                value={addsupModForm.addsupAlternateMob}
                                                onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupAlternateMob: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>



                                <Grid item md={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={contactstyle.grid_icons}> <PhoneIcon />
                                        </Grid>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Landline No</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Landline No"
                                                value={addsupModForm.addsupLandline}
                                                onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupLandline: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>



                                <Grid item md={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={contactstyle.grid_icons}>   <EmailIcon />
                                        </Grid>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Email</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Email"
                                                value={addsupModForm.addsupLandline}
                                                onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupLandline: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>

                                {/* 5th grid start */}
                                <Grid item md={4}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={contactstyle.grid_icons}>  <BusinessCenterIcon />
                                        </Grid>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined"></InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label=""

                                                type="date"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>


                                <Grid item md={8}  >

                                </Grid>
                            </Grid>




                            {/* more information button */}
                            <Grid container sx={contactstyle.container_more}>
                                <Grid >
                                    <Button sx={contactstyle.ButtonAdd} onClick={() => setHidden(s => !s)}>More Information<ArrowDropDownIcon /></Button>

                                </Grid>
                            </Grid>
                            <br />
                            <br />


                            {/* taxno grid */}


                            {!hidden ?

                                <Grid container spacing={4} >
                                    <Grid item md={3}>
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={contactstyle.grid_icons}>   <FaInfo />
                                            </Grid>
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Tax No</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Tax No"
                                                    value={addsupModForm.addsupTaxNo}
                                                    onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupTaxNo: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>



                                    <Grid item md={3}  >
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={contactstyle.grid_icons}>    <MoneySharpIcon />
                                            </Grid>
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Opening Balance </InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Opening Balance"
                                                    value={addsupModForm.addsupOpeningBal}
                                                    onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupOpeningBal: event.target.value }) }}
                                                    type="text" />

                                            </FormControl>
                                        </Grid>
                                    </Grid>


                                    <Grid item md={3}>
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={contactstyle.grid_icons}>    <PersonIcon />
                                            </Grid>
                                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                                <InputLabel id="demo-select-small">Pay Term</InputLabel>
                                                <Select
                                                    labelId="demo-select-small"
                                                    id="demo-select-small"
                                                    label="Pay Term"
                                                    value={addsupModForm.addsupPayTerm}
                                                    onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupPayTerm: event.target.value }) }}
                                                    fullWidth
                                                >
                                                    <MenuItem value="">
                                                        <em>Please Select</em>
                                                    </MenuItem>
                                                    <MenuItem value={1}>supplier</MenuItem>
                                                    <MenuItem value={2}>customer</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>


                                    <Grid item md={3}>
                                        <Grid sx={{ display: 'flex' }}  >

                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Address Line 1</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Address Line 1"
                                                    value={addsupModForm.addsupAddressL1}
                                                    onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupAddressL1: event.target.value }) }}
                                                    type="text" />

                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={3}  >
                                        <Grid sx={{ display: 'flex' }}  >

                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Address Line 2 </InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Address Line 2"
                                                    value={addsupModForm.addsupAddressL2}
                                                    onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupAddressL2: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>


                                    <Grid item md={3}>
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={contactstyle.grid_icons}>     <LanguageSharpIcon />
                                            </Grid>

                                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                                <InputLabel id="demo-select-small">Country</InputLabel>
                                                <Select
                                                    labelId="demo-select-small"
                                                    id="demo-select-small"
                                                    label="country"
                                                    value={addsupModForm.addsupCountry}
                                                    onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupCountry: event.target.value }) }}
                                                    fullWidth  >

                                                    <MenuItem value="">

                                                    </MenuItem>
                                                    <MenuItem value={1}>xxx</MenuItem>
                                                    <MenuItem value={2}>yyy</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <Grid item md={3}>
                                        <Grid sx={{ display: 'flex' }}  >

                                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                                <InputLabel id="demo-select-small">State</InputLabel>
                                                <Select
                                                    labelId="demo-select-small"
                                                    id="demo-select-small"
                                                    label="State"
                                                    value={addsupModForm.addsupState}
                                                    onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupState: event.target.value }) }}
                                                    fullWidth
                                                >
                                                    <MenuItem value="">

                                                    </MenuItem>
                                                    <MenuItem value={1}>xxx</MenuItem>
                                                    <MenuItem value={2}>yyy</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <Grid item md={3}>
                                        <Grid sx={{ display: 'flex' }}  >

                                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                                <InputLabel id="demo-select-small">City</InputLabel>
                                                <Select
                                                    labelId="demo-select-small"
                                                    id="demo-select-small"
                                                    label="City"
                                                    value={addsupModForm.addsupCity}
                                                    onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupCity: event.target.value }) }}
                                                    fullWidth
                                                >
                                                    <MenuItem value="">

                                                    </MenuItem>
                                                    <MenuItem value={1}>xxx</MenuItem>
                                                    <MenuItem value={2}>yyy</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <Grid item md={3}  >
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={contactstyle.grid_icons}>    <LocationOnIcon />
                                            </Grid>
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">zip Code </InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Zip Code"
                                                    value={addsupModForm.addsupZipCode}
                                                    onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupZipCode: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <Grid item md={3}  >
                                        <Grid sx={{ display: 'flex' }}  >

                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Custom 1 </InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Custom 1 "
                                                    value={addsupModForm.addsupCustom1}
                                                    onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupCustom1: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={3}  >
                                        <Grid sx={{ display: 'flex' }}  >

                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Custom 2 </InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Custom 2 "
                                                    value={addsupModForm.addsupCustom2}
                                                    onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupCustom2: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <Grid item md={3}  >
                                        <Grid sx={{ display: 'flex' }}  >

                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Custom 3</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Custom 3"
                                                    value={addsupModForm.addsupCustom3}
                                                    onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupCustom3: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <Grid item md={3}  >
                                        <Grid sx={{ display: 'flex' }}  >

                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Custom 4 </InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Custom 4"
                                                    value={addsupModForm.addsupCustom4}
                                                    onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupCustom4: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <Grid item md={3}  >
                                        <Grid sx={{ display: 'flex' }}  >

                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Custom 5</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Custom 5"
                                                    value={addsupModForm.addsupCustom5}
                                                    onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupCustom5: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <Grid item md={3}  >
                                        <Grid sx={{ display: 'flex' }}  >

                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Custom 6 </InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Custom 6"
                                                    value={addsupModForm.addsupCustom6}
                                                    onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupCustom6: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <Grid item md={3}  >
                                        <Grid sx={{ display: 'flex' }}  >

                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Custom 7 </InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Custom 7"
                                                    value={addsupModForm.addsupCustom7}
                                                    onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupCustom7: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <Grid item md={3}  >
                                        <Grid sx={{ display: 'flex' }}  >

                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Custom 8 </InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Custom 8"
                                                    value={addsupModForm.addsupCustom8}
                                                    onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupCustom8: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <Grid item md={3}  >
                                        <Grid sx={{ display: 'flex' }}  >

                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Custom 9 </InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Custom 9 "
                                                    value={addsupModForm.addsupCustom9}
                                                    onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupCustom9: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>


                                    <Grid item md={3}  ></Grid>
                                    <Grid item md={3}  ></Grid>
                                    <Grid item md={2}></Grid>
                                    <Grid item md={8}>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Shipping Address </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Shipping Address "
                                                value={addsupModForm.addsupShipping}
                                                onChange={(event) => { setAddSupModForm({ ...addsupModForm, addsupShipping: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={2}></Grid>

                                </Grid>

                                : null}

        </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" autoFocus onClick={handleClose} >
            Save
          </Button>
          <Button  variant="contained" color="error" autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>

</>


);

}
export default Suppliercreate;