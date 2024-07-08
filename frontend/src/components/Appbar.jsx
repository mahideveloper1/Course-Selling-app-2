import React from "react";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { isUserLoading } from "../store/selectors/isUserLoading";
import { userState } from "../store/atoms/user.js";
import { userEmailState } from "../store/selectors/userEmail";
import "./Appbar.css";

function Appbar() {
  const navigate = useNavigate();
  const userLoading = useRecoilValue(isUserLoading);
  const userEmail = useRecoilValue(userEmailState);
  const setUser = useSetRecoilState(userState);

  if (userLoading) {
    return null; // or a loading indicator
  }

  const handleLogout = () => {
    localStorage.setItem("token", null);
    setUser({
      isLoading: false,
      userEmail: null,
    });
    navigate("/landing");
  };

  return (
    <div className="appbar">
      <div className="logo" onClick={() => navigate("/")}>
        <Typography variant="h6" className="logo-text">
          Mahi Course App
        </Typography>
      </div>

      <div className="buttons-container">
        {userEmail ? (
          <>
            <Button variant="contained" onClick={() => navigate("/addcourse")}>
              Add Course
            </Button>
            <Button variant="contained" onClick={() => navigate("/courses")}>
              Courses
            </Button>
            <Button variant="contained" onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button variant="contained" onClick={() => navigate("/signup")}>
              Signup
            </Button>
            <Button variant="contained" onClick={() => navigate("/signin")}>
              Signin
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Appbar;
