import { Form, Formik } from "formik";
import React from "react";
import FormTextField from "../../components/FormComponent/FormTextField";
import * as Yup from "yup";
import { Box, Stack } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import icon from "../../App Images/icon.jpeg";
import loginImg from "../../App Images/loginImg.png";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";

const RegisterUser = () => {
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
            <Stack justifyContent="center" alignItems="center" spacing={2}>
              <img src={icon} alt="Icon" width={40} height={40} />
              <Typography
                fontWeight="bolder"
                fontFamily="cursive"
                fontSize={20}
              >
                Join Our Gude Seller Market Place
              </Typography>

              <Typography fontSize={12}>
                Have account already?
                <Box
                  component={Link}
                  to="/login"
                  sx={{
                    textDecoration: "none",
                    ml: 1,
                    fontStyle: "italic",
                    fontWeight: "bolder",
                    color: "#34495E",
                  }}
                >
                  Login
                </Box>
              </Typography>
            </Stack>

            <Grid container>
              <Grid item xs={12} md={6}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    fontWeight: "bolder",
                  }}
                >
                  Join with gmail
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    fontWeight: "bolder",
                  }}
                  startIcon={<FacebookIcon sx={{ color: "#2374E1" }} />}
                >
                  Join with facebook
                </Button>
              </Grid>
            </Grid>
            <Formik
              initialValues={{
                email: "",
                password: "",
                status: "",
                firstName: "",
                lastName: "",
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .required("Please enter email")
                  .email("Please eneter valid email"),
                password: Yup.string().required("Please enter password"),
                status: Yup.string().required("Please select status"),
                firstName: Yup.string().required("Please enter first name"),
                lastName: Yup.string().required("Please enter last name"),
              })}
            >
              {(formik) => {
                console.log(formik.values);
                return (
                  <Form>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        {/* <InputLabel
                          sx={{
                            fontWeight: "bolder",
                            color: "lightgray",
                            mb: 1,
                          }}
                        >
                          First Name
                        </InputLabel> */}
                        <FormTextField name="firstName" label="First Name" />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        {/* <InputLabel
                          sx={{
                            fontWeight: "bolder",
                            color: "lightgray",
                            mb: 1,
                          }}
                        >
                          Last Name
                        </InputLabel> */}
                        <FormTextField name="lastName" label="Last Name" />
                      </Grid>
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
                      <Grid item xs={12} md={12} textAlign="center">
                        <Button
                          variant="contained"
                          type="submit"
                          sx={{
                            width: "100%",
                            borderRadius: 1,
                            backgroundColor: "secondary.main",
                          }}
                        >
                          Continue
                        </Button>
                      </Grid>
                      <Grid item xs={12} md={12} textAlign="center">
                        <Typography fontWeight="bolder">
                          By joining, you agree to the <Link>Terms</Link> and{" "}
                          <Link>Privacy Policy</Link>
                        </Typography>
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

export default RegisterUser;
