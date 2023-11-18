import { Box, Tabs } from "@mui/material";
import React, { useState } from "react";

const Categories = () => {
    const [value, setValue] = useState(2);
   

    

    
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
  return (
    <Box>
      <Tabs
      sx={{
        padding:'5px',
        borderRadius:'15px',
        
      }}
      centered
        value={value}
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        
        
      </Tabs>
    </Box>
  );
};

export default Categories;
