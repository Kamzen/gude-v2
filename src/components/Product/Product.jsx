import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography
} from "@mui/material";
import React from "react";
import img from "../../App Images/apple-iphone-12-pro-max-1.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TagIcon from "@mui/icons-material/Tag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const Product = ({ ...otherProps }) => {
  return (
    <Grid item xs={12} md={3} height={400} {...otherProps}>
      <Card sx={{ height: "100%", boxShadow: "2px 2px 2px 2px lightgray"  }}>
        <CardContent sx={{ height: "100%", p: 0, position: "relative" }}>
          <Stack
            height="60%"
            borderBottom={1}
            borderColor="lightgray"
            py={2}
            // sx={{ backgroundColor: "lightgray" }}
          >
            <img
              src={img}
              alt=""
              height="100%"
              width="100%"
              style={{ objectFit: "contain" }}
            />

            <Stack height={0}>
              <Box
                sx={{
                  width: "fit-content",
                  position: "relative",
                  left: "80%",
                  bottom: "8px",
                  borderRadius: "50%",
                  padding: "2px",
                  backgroundColor: "#FFFFFF"
                }}
              >
                <Avatar>TT</Avatar>
              </Box>
            </Stack>
          </Stack>
          <Stack paddingX={1} spacing={1} mt={2}>
            <Typography fontWeight="bolder" noWrap>Product Namhvchgchfxchvxfhcbvcfgxtfjxhfdtxdxfcgnxdfhtxhdrtge</Typography>
            <Typography
              fontSize={12}
              fontWeight="bolder"
              sx={{ color: "lightgray" }}
            >
              9 Available/ Used
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                component={Stack}
                direction="row"
                alignItems="center"
              >
                <TagIcon fontSize="smal" />
                12132432
              </Typography>
              <Typography fontWeight="bolder">R399</Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography component={Stack} direction="row" alignItems="center">
                <LocationOnIcon fontSize="small" /> Johannesburg
              </Typography>
              <Typography component={Stack} direction="row" alignItems="center">
                <CalendarMonthIcon fontSize="small" /> 2022/05/13
              </Typography>
            </Stack>
            <Stack
              direction="row"
              position="absolute"
              bottom={0}
              right={0}
              width="100%"
            >
              <Button
                variant="contained"
                color="secondary"
                sx={{ fontSize: 8, fontWeight: "bolder" }}
                fullWidth
                startIcon={<LocalMallIcon fontSize="small" />}
              >
                Add To Cart
              </Button>
              <Button
                variant="contained"
                sx={{ fontSize: 8, fontWeight: "bolder" }}
                fullWidth
                startIcon={<FavoriteIcon fontSize="small" />}
              >
                Add To WishList
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Product;
