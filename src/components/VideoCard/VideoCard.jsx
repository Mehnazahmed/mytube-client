import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";

const VideoCard = ({ video }) => {
    
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "350px",
        padding: "30px 20px",
        borderRadius: "10px",
        "&:hover": {
          cursor: "pointer",
          boxShadow: 20,
        },
      }}
    >
      <Box
        sx={{
          mb: 3,
          width: "312px",
          
          margin: "0 auto",
        }}
      >
        <img
          src={video.thumbnail}
          alt="mytube video"
          style={{
            width: "100%",
          }}
        />
      </Box>
      <Box>
        <Typography 
        sx={{
            fontWeight: 'bold',
            
         }}
         variant='h6'>
            {video.title}
        </Typography>
       <Stack direction='row' spacing={2}>
        <Avatar alt="Travis Howard" src={video.authors.map((author)=>author.profile_picture)} />
       <Typography>
            {video.authors.map((author)=>author.profile_name)}
        </Typography>

       </Stack>
        <Typography>
            {video.others.views}
        </Typography>
      </Box>
    </Box>
  );
};

export default VideoCard;
