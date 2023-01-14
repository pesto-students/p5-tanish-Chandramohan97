// Component input Bar

import React, { useState } from "react";
import axios from "axios";
import "./InputContainer.css";
import { v4 as uuidV4 } from "uuid";
import LinkResult from "./LinkResult";
import ReactGA from "react-ga4";

// import './Components_styling/InputContainer.css'

function InputBar() {
  const [input, setInput] = useState("");
  const [url, setUrl] = useState("");
  const [urlList, seturlList] = useState([]);
  const [loading, setLoading] = useState(false);

  const baseUrl = `https://api.shrtco.de/v2/shorten?url=${input}`;

  const googleAnalytics = () => {
    ReactGA.event({
      category: "User",
      action: "Clicked",
      label: "Button",
    });
  };
  const Input = (e) => {
    setInput(e.target.value);
    // console.log(input);
  };

  const Click = async (e) => {
    setLoading(true);
    try {
      const res = await axios.get(baseUrl).then((response) => {
        // console.log(respnse);
        setUrl(response.data);
        // console.log(resonse.data)
        seturlList([...urlList, response.data]);
        // console.log(urlList);
      });
    } catch (error) {
      alert("invalid url");
      // console.log('hello');
    }
    setLoading(true);
  };

  return (
    <>
      <div className="inputBar">
        <input
          type="text"
          value={input}
          placeholder="Shorten the link here"
          onChange={Input}
        />

        <button onClick={Click}>Shorten</button>
        {/* testing button for Google analytics  */}
        <button onClick={() => googleAnalytics}>Google analytics</button>
      </div>

      <div className="getshorturlcontainer">
        {url &&
          urlList.map((urlA) => (
            <LinkResult input={input} url={urlA} key={uuidV4()} />
          ))}{" "}
      </div>
    </>
  );
}

function InputContainer() {
  return <InputBar />;
}

export default InputContainer;
