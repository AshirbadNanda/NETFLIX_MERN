import React from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUser } from "../redux/userslice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
function Header() {
  // Access user data correctly
  const user = useSelector((store) => store.user.user); // This is correct
  // console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logouthandler = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/user/logout");
      if (res.data.success) {
        toast.success(res.data.msg);
      }
      console.log(res);
      dispatch(setUser(null));
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="absolute bg-gradient-to-b from-black w-full flex justify-between items-center p-2 z-10">
      <img
        className="h-20 w-56"
        src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"
        alt="Company Logo"
      />
      {user ? ( // Check if user is not null
        <>
          <div className="text-white font-semibold flex items-center">
            <IoIosArrowDropdownCircle />
            <span>{user.fullname}</span> {/* Display the user's fullname */}
          </div>
          <div className="flex space-x-4">
            <button
              onClick={logouthandler}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Search Movie
            </button>
          </div>
        </>
      ) : null}{" "}
      {/* Render nothing if user is null */}
    </div>
  );
}

export default Header;
