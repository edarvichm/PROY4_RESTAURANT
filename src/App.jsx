// import { useState } from "react";
// import './App.css'
import { NavBar } from "./components/NavBar";
// import HomePage from './pages/HomePage'
import { MainRoutes } from "./routers/MainRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // Calcula el tamaño del navbar dinámicamente
  // const [navHeight, setNavHeight] = useState(0); //useRef()
  // console.log('nav '+navHeight);
  // const handleResize = () => {
  //   setNavHeight(document.getElementById("navbar").offsetHeight);
  //   console.log('nav2 '+document.getElementById("navbar").offsetHeight);

  // };
  // window.addEventListener("resize", handleResize);
  // window.addEventListener("load", handleResize);
  // handleResize();
  // const navbarHeight = document.getElementById("navbar").offsetHeight

  return (
    <>
      <div className="container">
        {/* <NavBar navHeight={setNavHeight} /> */}
        <NavBar />
      </div>
      <div className="container" style={{ marginTop: 200 }}>
        <MainRoutes />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
