import { Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import bannerImg from "../../App Images/iphone-12.jfif";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const ProductBanner = ({ img, title, desc }) => {
  return (
    <Grid
      item
      xs={12}
      md={9}
      height={400}
      border={1}
      sx={{
        backgroundImage: `url(${bannerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        rowGap: 4
      }}
      component={Stack}
      justifyContent="center"
      direction="column"
      alignItems="center"

    >
      <Typography fontSize={30} sx={{ color: "white", fontWeight: "bolder" }}>
        {title}
      </Typography>
      <Typography fontSize={18} sx={{ color: "white" }}>
        {desc}
      </Typography>
      <Button
        variant="contained"
        endIcon={<LocalMallIcon />}
        sx={{ fontWeight: "bolder" }}
      >
        Buy Now
      </Button>
    </Grid>
  );
};

export default ProductBanner;
