import React from "react";
import { Grid, Card, CardContent, Typography, CardMedia } from "@mui/material";
import photo from "./images.jpg"

const hairstyles = ["Hairstyle 1", "Hairstyle 2", "Hairstyle 3", "Hairstyle 4"];

const RecommendedHairstyles: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {hairstyles.map((style, index) => (
        <Grid item xl={8} md={3} key={index}>
          <Card>
            <CardMedia
              style={{ height: 140 }}
              image={photo} // Replace with your image source
              title={style}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {style}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RecommendedHairstyles;
