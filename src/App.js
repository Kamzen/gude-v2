import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { appTheme } from "./AppTheme";
import LoginUser from "./pages/Auth/LoginUser";
import RegisterUser from "./pages/Auth/RegisterUser";
import Root from "./pages/Root";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Root />}
        errorElement={"<h1>This route does not exist</h1>"}
      >
        <Route path="login" index element={<LoginUser />} />
        <Route path="register" element={<RegisterUser />} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
