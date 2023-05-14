import React from "react";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";

const Root = () => {
  return (
    <Stack>
      <Outlet />
    </Stack>
  );
};

export default Root;
