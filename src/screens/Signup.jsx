import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Button,
  CircularProgress,
  Stack,
  TextField,
  Avatar,
  Typography,
  Grid,
  Box,
  Link,
  Container,
  def,
} from "@mui/material";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/FirebaseConfig";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";

const Signup = () => {
  const [authData, setAuthData] = useState({});
  const [isloading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const setInputHandler = (e) => {
    setAuthData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const submitHandler = async () => {
    setIsLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        authData.email,
        authData.password
      );
      console.log(response.user);
      setIsLoading(false);
      navigate("/product");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      ></Box>

      <Avatar sx={{ m: 1, bgcolor: "secondary.main", align: "center" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <TextField
        id="email"
        onChange={setInputHandler}
        label={"Email"}
        placeholder="Email"
      />
      <TextField
        id="password"
        onChange={setInputHandler}
        label={"password"}
        placeholder="password"
      />
      {isloading ? (
        <CircularProgress />
      ) : (
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={submitHandler}
        >
          Sign Up
        </Button>
      )}
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link href="#" variant="body2">
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
      <Box />
    </Container>
  );
};

export default Signup;
