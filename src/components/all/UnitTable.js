import MUIDataTable from "mui-datatables";
import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const muiCache = createCache({
  key: "mui-datatables",
  prepend: true
});

function UnitTable() {
  const [responsive, setResponsive] = useState("horizondal");
  const [tableBodyHeight, setTableBodyHeight] = useState("250px");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  const [searchBtn, setSearchBtn] = useState(true);
  const [downloadBtn, setDownloadBtn] = useState(true);
  const [printBtn, setPrintBtn] = useState(true);
  const [viewColumnBtn, setViewColumnBtn] = useState(true);
  const [filterBtn, setFilterBtn] = useState(true);

  const columns = [
    { name: "Name", options: { filterOptions: { fullWidth: true } } },
    "Title",
    "Location",
    "Title",
    "Location",
    "Title",
    "Location",
    "Title",
    "Location"
  ];

  const options = {
    search: searchBtn,
    download: downloadBtn,
    print: printBtn,
    viewColumns: viewColumnBtn,
    filter: filterBtn,
    filterType: "dropdown",
    responsive,
    tableBodyHeight,
    tableBodyMaxHeight,
    onTableChange: (action, state) => {
      console.log(action);
      console.dir(state);
    }
  };

  const data = [
    ["Gabby George", "Business Analyst", "Minneapolis", "Attorney", "Santa Ana", "Business Analyst", "Baltimore"],
    [
      "Aiden Lloyd",
      "CEO of Tony's Burger Palace",
      "Dallas", "Attorney", "Santa Ana", "Business Analyst", "Baltimore"
    ],
    ["Jaden Collins", "Attorney", "Santa Ana", "Attorney", "Santa Ana", "Business Analyst", "Baltimore"],
    ["Franky Rees", "Business Analyst", "St. Petersburg", "Attorney", "Santa Ana", "Business Analyst", "Baltimore"],
    ["Aaren Rose", null, "Toledo", "Attorney", "Santa Ana", "Business Analyst", "Baltimore"],
    ["Johnny Jones", "Business Analyst", "St. Petersburg", "Attorney", "Santa Ana", "Business Analyst", "Baltimore"],
    ["Jimmy Johns", "Business Analyst", "Baltimore", "Attorney", "Santa Ana", "Business Analyst", "Baltimore"],
    ["Jack Jackson", "Business Analyst", "El Paso", "Attorney", "Santa Ana", "Business Analyst", "Baltimore"],
    ["Joe Jones", "Computer Programmer", "El Paso", "Attorney", "Santa Ana", "Business Analyst", "Baltimore"],
    ["Jacky Jackson", "Business Consultant", "Baltimore", "Attorney", "Santa Ana", "Business Analyst", "Baltimore"],
    ["Jo Jo", "Software Developer", "Washington DC", "Attorney", "Santa Ana", "Business Analyst", "Baltimore"],
    ["Donna Marie", "Business Manager", "Annapolis", "Attorney", "Santa Ana", "Business Analyst", "Baltimore"]
  ];

  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={createTheme()}>
      
        <MUIDataTable
          title={"All your units"}
          data={data}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
    </CacheProvider>
  );
}
export default UnitTable;
