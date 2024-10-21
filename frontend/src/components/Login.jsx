import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import apiendpoint from "../utils/constant";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userslice";
function Login() {
  const [islogin, setislogin] = useState(true);
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginhandler = () => {
    setislogin(!islogin);
  };
  const getinputdata = async (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form data:", { fullname, email, password });
    if (islogin) {
      // login
      try {
        const res = await axios.post(
          `${apiendpoint}/login`,
          {
            email,
            password,
          },
          {
            headers: {
              "content-type": "application/json",
            },
            withCredentials: true,
          }
        );
        console.log(res);
        if (res.data.success) {
          toast.success(res.data.msg);
        }
        // Log user details before dispatching
        console.log("User data from response:", res.data.user);

        dispatch(setUser(res.data.user));
        navigate("/browse");
      } catch (e) {
        toast.error(e.response.data.msg || "login failed."); // Use toast for error
        console.log(e);
      }
    } else {
      // register
      try {
        const res = await axios.post(
          `${apiendpoint}/register`,
          {
            fullname,
            email,
            password,
          },
          {
            headers: {
              "content-type": "application/json",
            },
            withCredentials: true,
          }
        );
        console.log(res);
        if (res.data.success) {
          toast.success("Account Creation successful!");
        }
        setislogin(true);
      } catch (e) {
        toast.error(e.response.data.msg || "Registration failed."); // Use toast for error
        console.log(e);
      }
    }

    setemail("");
    setfullname("");
    setpassword("");
  };

  return (
    <div>
      <Header />

      <div className="w-[100vw] h-[100vh] absolute z-0">
        <img
          className="w-full h-full object-cover"
          src="https://wallpapers.com/images/file/netflix-background-gs7hjuwvv2g0e9fj.jpg"
          alt="Netflix Background"
        />
      </div>

      <div className="w-full h-screen flex items-center justify-center opacity-80">
        <form
          onSubmit={getinputdata}
          action=""
          className="relative z-10 bg-black p-6 rounded-lg shadow-lg max-w-sm w-full"
        >
          <h1 className="text-3xl font-bold text-white text-center mb-4">
            {islogin ? "Login" : "signup"}
          </h1>
          {!islogin && (
            <div className="mb-4">
              <label className=" text-white font-semibold mb-2">Fullname</label>
              <input
                value={fullname}
                onChange={(e) => setfullname(e.target.value)}
                type="text"
                placeholder="Enter username"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          )}

          <div className="mb-4">
            <label className=" text-white font-semibold mb-2">Email Id</label>
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="text"
              placeholder="Enter Email Id"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-semibold mb-2">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              placeholder="Enter password"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700 transition-colors"
          >
            {islogin ? "login" : "signup"}
          </button>
          <p className="text-center font-semibold mb-2 text-white">
            {islogin ? "New to Netflix" : "Already have an account"}
            <span
              className="text-blue-900 font-semibold mb-2"
              onClick={loginhandler}
            >
              {islogin ? "  signup" : "  login"}
            </span>
          </p>
        </form>
      </div>
      <Toaster></Toaster>
    </div>
  );
}

export default Login;
