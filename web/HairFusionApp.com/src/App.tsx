import React from "react";
import Navbar from "./components/Navbar";
import UploadPhoto from "./components/UploadPhoto";
import RecommendedHairstyles from "./components/RecommendedHairstyles";
import { Container, Box, Typography, Grid } from "@mui/material";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Box mt={5} >
          <Grid container spacing={4} justifyContent="center" >
            <Grid item xs={12} md={6} lg={4} textAlign="center">
              <UploadPhoto />
            </Grid>
            <Grid item xs={12} md={6} lg={8} >
              <Typography variant="h5" component="h2" gutterBottom>
                Recommended Hairstyles
              </Typography>
              <RecommendedHairstyles />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default App;
