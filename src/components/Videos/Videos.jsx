import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import TabButton from "../../Custom/TabButton";
import errimg from "../../assets/assets/Icon.png";
import useData from "../../hooks/useData";
import VideoCard from "../VideoCard/VideoCard";

const Videos = () => {
  const [value, setValue] = useState(0);
  
  const category_id = value;
  let { videos, loading } = useData(category_id);

 

  console.log(videos);
  return (
    <Box>
      <Container>
        <Box
          sx={{
            maxWidth: 500,
            mx: "auto",
            mt:'1rem'
          }}
        >
          <TabButton value={value} setValue={setValue} videos={videos} />
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            justifyItems: "center",
            gap: "5px",
            mt: 4,
          }}
        >
          {!loading &&
            videos.map((video) => (
              <VideoCard key={video._id} video={video}></VideoCard>
            ))}
          
          
           {videos.length === 0  &&
            <img src={errimg} alt="Error" />
           }
        </Box>
      </Container>
    </Box>
  );
};

export default Videos;
