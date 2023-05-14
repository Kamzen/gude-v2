import { Box, Grid, Stack, Typography } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import React from "react";
import ProductBanner from "../components/Product/ProductBanner";
import Product from "../components/Product/Product";

const Home = () => {
  return (
    <Stack spacing={2}>
      <Stack direction="row" flexGrow={1} spacing={2}>
        <Stack
          direction="row"
          sx={{
            backgroundColor: "primary.main",
            borderRadius: 25,
            height: "fit-content",
            px: 1,
            fontWeight: "bolder",
            color: "#FFFFFF",
            fontFamily: "Helvetica Neue"
          }}
        >
          <Typography>Sort</Typography>
          <FilterListIcon />
        </Stack>
        <Typography sx={{ fontFamily: "Helvetica Neue", fontWeight: "bolder" }}>
          New Arrivals
        </Typography>
        <Typography sx={{ fontFamily: "Helvetica Neue", fontWeight: "bolder" }}>
          On Sale
        </Typography>
        <Typography sx={{ fontFamily: "Helvetica Neue", fontWeight: "bolder" }}>
          Best Buys
        </Typography>
      </Stack>
      <Stack>
        <Grid container>
        <ProductBanner
          title="GET THE NEW IPHONE 12 PRO"
          desc="Apple introduces iPhone 12 Pro and iPhone 12 Pro Max with 5G - Apple"
        />
        <Product sx={{ paddingLeft: 2 }} />
      </Grid>
      </Stack>

      <Stack>
        <Grid container spacing={2}>
          <Product />
          <Product />
          <Product />
          <Product />
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Home;
