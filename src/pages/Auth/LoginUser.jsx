import { Form, Formik } from "formik";
import React from "react";
import FormTextField from "../../components/FormComponent/FormTextField";
import * as Yup from "yup";
import { Box, Stack } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import icon from "../../App Images/icon.jpeg";
import loginImg from "../../App Images/loginImg.png";
import { Link } from "react-router-dom";

const LoginUser = () => {
  return (
    <Stack direction="row" sx={{ height: "100vh" }} alignItems="center">
      <Stack flex={1} sx={{ display: { xs: "none", md: "block" } }}>
        <Box
          component={"img"}
          src={loginImg}
          sx={{ width: "100%", height: "100%" }}
        />
      </Stack>
      <Stack flex={1} justifyContent="center">
        <Stack
          border={1}
          justifyContent="center"
          alignItems="center"
          padding={3}
          margin={2}
          borderRadius={5}
          borderColor="lightgray"
          boxShadow={1}
        >
          <Stack width={"90%"} spacing={2}>
            <Box textAlign="center">
              <img src={icon} alt="Icon" width={40} height={40} />
              <Typography
                fontWeight="bolder"
                fontFamily="cursive"
                fontSize={20}
              >
                Wellcome To Gude Seller Market Place
              </Typography>

              <Typography fontSize={12}>
                Don't have an account?
                <Box
                  component={Link}
                  to="/register"
                  sx={{
                    textDecoration: "none",
                    ml: 1,
                    fontStyle: "italic",
                    fontWeight: "bolder",
                    color: "#34495E",
                  }}
                >
                  Register
                </Box>
              </Typography>
            </Box>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .required("Please enter email")
                  .email("Please eneter valid email"),
                password: Yup.string().required("Please enter password"),
              })}
            >
              {(formik) => {
                console.log(formik.values);
                return (
                  <Form>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={12}>
                        {/* <InputLabel
                          sx={{
                            fontWeight: "bolder",
                            color: "lightgray",
                            mb: 1,
                          }}
                        >
                          Email
                        </InputLabel> */}
                        <FormTextField name="email" label="Email" />
                      </Grid>
                      <Grid item xs={12} md={12}>
                        {/* <InputLabel
                          sx={{
                            fontWeight: "bolder",
                            color: "lightgray",
                            mb: 1,
                          }}
                        >
                          Password
                        </InputLabel> */}
                        <FormTextField
                          name="password"
                          label="Password"
                          type="password"
                        />
                      </Grid>
                      <Grid item xs={12} md={12} textAlign="end">
                        <Box
                          component={Link}
                          sx={{
                            textDecoration: "none",
                            color: "#F50057",
                            fontStyle: "italic",
                            fontWeight: "bolder",
                          }}
                        >
                          Forgot Password?
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={12} textAlign="center">
                        <Button
                          variant="contained"
                          type="submit"
                          sx={{
                            width: "100%",
                            borderRadius: 1,
                            backgroundColor: "secondary.main",
                            fontWeight: "bolder",
                          }}
                        >
                          Login
                        </Button>
                      </Grid>
                    </Grid>
                  </Form>
                );
              }}
            </Formik>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LoginUser;
