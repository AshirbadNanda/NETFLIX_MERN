import React, { useEffect } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Maincontainer from "./maincontainer";
import Moviecontainer from "./moviecontainer";
import Moviecontainer2 from "./Moviecontainer2";
import Moviecontainer3 from "./Moviecontainer3";

function Browse() {
  const user = useSelector((store) => store.user.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Header></Header>
      <div>
        <Maincontainer></Maincontainer>
        <Moviecontainer></Moviecontainer>
        <Moviecontainer2></Moviecontainer2>
        <Moviecontainer3></Moviecontainer3>
      </div>
    </div>
  );
}

export default Browse;
