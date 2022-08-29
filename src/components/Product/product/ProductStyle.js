export const prodList = {
    button_grp: {
        bgcolor: 'rgb(245 243 246) !important',
        color: '#7009AB' ,
        borderColor:'#ddd',
        margin: '1px' ,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: '12px' ,
    },
    select_input:{
        "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #B97DF0",
        },
    },
    select_formcontrol:{
        m: 1,
        borderRadius: 2,
    },
    delete_btn:{
        backgroundColor: "#f5365c",
        borderColor: "#f41e48",
        fontSize: 10,
        "&:hover": {
            backgroundColor: "#f50e3c",
            color: "#fff",
        },
    },
    addtolocation_btn:{
        backgroundColor: "#2dce89",
        borderColor: "#28b97b",
        fontSize: 10,
        "&:hover": {
            backgroundColor: "#209764",
            color: "#fff",
        },
    },
    remove_btn:{
        backgroundColor: "#001f3f",
        borderColor: "#001f3f",
        fontSize: 10,
        "&:hover": {
            backgroundColor: "#14477c",
            color: "#fff",
        },
    },
    deactive_btn:{
        backgroundColor: "#ffad46",
        borderColor: "#ffa22d",
        fontSize: 10,
        "&:hover": {
            backgroundColor: "#ff8e00",
            color: "#fff",
        },
    },
    viewbtn:{
        fontSize: 9, 
        padding: "2px 1px",
        borderColor: "#7009AB", 
        color: "#7009AB",
        "&:hover": {
            backgroundColor: "#7009AB",
            color: "#fff",
            borderColor: "#7009AB",
        },

    },
    tabpanel:{
        padding: '10px 20px 0px 20px', 
        borderTop:'5PX SOLID #7009AB !important',
    },
    tab:{
        color: "#7009AB",


        "&.MuiTabs-indicator": {
            backgroundColor: "#7009AB",
            // borderColor: "#7009AB",
            borderTop:'5PX SOLID #7009AB !important',
        },
        "&.Mui-selected": {
            borderTop:'5PX SOLID #7009AB !important',
        },
    },   
    add:{
        float: "right",
        width: "97px",
        fontWeight: 600,
        mr: 1,
        backgroundColor: "#7009AB",
         mt: -5,
         color:"#A5BECC",
         "&:hover":{
            backgroundColor: "#fff",
            border: "1px solid #7009AB",
            color: "#7009AB",
         }
    },
    actionsdropdown:{
        backgroundColor:"#b97df0",
        fontSize: 11,
        "&:hover":{
            backgroundColor: "#fff",
            color: "#b97df0"
        }
    },
    UnitHeaderText:{
        fontFamily:"'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif",
        fontSize: "23px",
        fontWeight: "400",
        margin:"10px 0px 10px 0px",
        color: 'rgb(94, 53, 177) !important',
    },
    UnitSubHeaderText:{
        fontSize: "15px",
        display: "inline-block",
        paddingLeft: "4px",
        fontWeight: "300",
        lineHeight: "1",
        color: 'rgb(94, 53, 177) !important',
    },
}

export const prodStyle = {
    prod_container : {
        backgroundColor: 'rgb(255, 255, 255)',
        color: 'rgb(97, 97, 97)',
        transition: 'boxShadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgba(144, 202, 249, 0.46)',
        padding:'30px',
    },
    filtercontainer:{
        backgroundColor: 'rgb(255, 255, 255)',
        color: 'rgb(97, 97, 97)',
        transition: 'boxShadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgba(144, 202, 249, 0.46)',
        padding:'15px',
    },
    tablecontainer:{
        boxShadow:'none !important',
    },
    prod_uploadbtn : {
        border:'1px solid #B97DF0 !important',
        borderRadius: '7px !important',
        width: '159px !important',
        fontSize: '11px !important',
        color: '#7009AB !important',
        fontWeight: '600 !important',
            '&:hover' : {
                backgroundColor: '#7009AB !important',
                color: '#fff !important',
            },
    },
    prod_tablehd : {
        backgroundColor: '#7009AB !important',
        fontSize: '20px !important',
        color: '#fff !important',
    },
    prod_saveadd : {

        backgroundColor: '#7009AB !important',
        color: 'white !important',
        marginRight: '5px !important',
        height: '40px !important',
        padding: '10px !important',
        fontWeight: '600 !important',
        borderRadius: '7px !important',
        '&:hover' : {
            border: '1px solid #7009AB !important',
            backgroundColor: 'white !important',
            border: '0px !important',
            color: '#7009AB !important',
        },
    },
    prod_save : {
        border: '1px solid #7009AB !important',
        color: '#7009AB !important',
        height: '40px !important',
        fontWeight: '600 !important',
        borderRadius: '7px !important',
        width: '80px',
        '&:hover' : {
            backgroundColor: '#7009AB !important',
            border: '0px !important',
            color: '#fff !important',
        },
    },
    prod_grid_container : {

        justifyContent: 'center ',
    },
    UnitHeaderText:{
        fontFamily:"'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif",
        fontSize: "23px",
        fontWeight: "400",
        margin:"10px 0px 10px 0px",
        color: 'rgb(94, 53, 177) !important',
    },
    UnitSubHeaderText:{
        fontSize: "15px",
        display: "inline-block",
        paddingLeft: "4px",
        fontWeight: "300",
        lineHeight: "1",
        color: 'rgb(94, 53, 177) !important',
    },
}