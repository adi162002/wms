import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import AdminProfile from "../Admin/AdminProfile";
import { apiLink } from "../Config";
function Test() {
  const navigate = useNavigate();
  async function fn(response) {
    const x = response.credential;
    console.log(x);
    const token = x;
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const res = await axios.post(
      `${apiLink}/auth/api/get-email`,
      {},
      { headers }
    );
    await axios
      .post(`${apiLink}/auth/api/get-email`, {}, { headers })
      .then((response) => {
        sessionStorage("response",response)
        navigate("/employee", {
          state: {
            resp: res.data,
          },
        });
        // console.log(res.data)
        // Handle the response from the server
      })
      .catch((error) => {
        // Handle errors
        console.log(error);
      });
    
  }
  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id:
        "692555571191-q14fs5nld3qfbjse8eh385ot1alb20jh.apps.googleusercontent.com",
      callback: fn,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("signIn") || document.createElement("div"),
      { theme: "outline", size: "large" }
    );
  }, []);

  return <div id="signIn"></div>;
}
export default Test;
