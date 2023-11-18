import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import useCategory from "../hooks/useCategory";


export default function TabButton({ value, setValue,videos}) {
    console.log(value);
    const {categories} =useCategory();
    
   
   
    console.log(videos)

  const CustomTabs = styled(Tabs)(({ theme }) => ({
    // padding: "5px",
    // borderRadius: "10px",
    boxShadow:
      "rgba(17,17,26, 0.05) 0px 1px 0px,rgba(17,17,26, 0.1) 0px 0px 8px",
    "& .MuiTabs-flexContainer": {
      justifyContent: "space-between",
    },
    "& .MuiTab-root": {
      textTransform: "capitalize",
      color: "#000",

      "&: hover": {
        // color: theme.palette.primary.main
      },
    },

    "& .Mui-selected": {
      background: '#FF1F3D',
      color: "#ffffff !important",
      // borderRadius: "15px",
    },
    "& .MuiTabs-indicator": {
      display: "none",
    },
  }));
   
  


  

  const handleChange = (event, newValue) => {
   setValue(newValue)
  };
  console.log(value)

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <CustomTabs value={value} onChange={handleChange} centered>
      {
            categories.map((category, index)=>(<Tab
            key={category.category_id}
            label={category.category}
            value={category.category_id}

            ></Tab>))
        }
      </CustomTabs>
    </Box>
  );
}
