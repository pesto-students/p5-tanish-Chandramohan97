import "./App.css";
import React from "react";
import InputContainer from "./Components/InputContainer.js";
import Navbar from "./Components/Navbar.js";
import Footer from "./Components/Footer";
import LinkResult from "./Components/LinkResult";
import ReactGA from "react-ga4";
const TRACKING_ID = "UA-251171587-1";
ReactGA.initialize(TRACKING_ID);

function App() {
  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname); // capturing the pageview i.e. recording the number of times user visit the page.
  }, []);
  return (
    <>
      <Navbar />
      <InputContainer />
      <Footer />
    </>
  );
}

export default App;
