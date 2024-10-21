import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import toast, { Toaster } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./components/Body";

function App() {
  return (
    <>
      <Body></Body>
      <Toaster></Toaster>
    </>
  );
}

export default App;
