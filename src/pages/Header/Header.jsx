import { Box, Button, Container, Divider, Link } from "@mui/material";
import React from "react";
import logo from '../../assets/assets/Logo.png';
import { Flexbox } from "../../styled/FlexBox";

const Header = () => {
  return (
    <Container>
      <Flexbox justifyContent='space-between' sx={{padding: '2rem '}}>
        <Box to='/' component={Link}>
          <img 
          src={logo} 
          alt=""
          style={{
            width:'160px'
          }}  />
        </Box>
        <Box>
           <Button sx={{backgroundColor:'#FF1F3D', color:'white'}}>Blog</Button>
        </Box>
      </Flexbox>
      <Divider  variant="middle" />
    </Container>
  );
};

export default Header;
