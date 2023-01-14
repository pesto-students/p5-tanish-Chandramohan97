import "./App.css";
import InputContainer from "./Components/InputContainer.js";
import * as Sentry from "@sentry/react";
import Navbar from "./Components/Navbar.js";
import Footer from "./Components/Footer";
import LinkResult from "./Components/LinkResult";
import SentryComp from "./Components/SentryComp";

function App() {
  return (
    <>
      <SentryComp />
      <Navbar />
      <InputContainer />
      <Footer />
    </>
  );
}

export default Sentry.withProfiler(App); // exporting
