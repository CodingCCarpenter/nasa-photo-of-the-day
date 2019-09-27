import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Card, CardText, CardBody, CardTitle, CardImg, Col } from "reactstrap";

import Header from "./HeaderComponent/Header.js";
import Main from "./MainComponent/Main.js";
import Footer from "./FooterComponent/Footer.js";

function App() {
  const [nasaData, setNasaData] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=ISxzksvzhe64bUJ5MbC8GRmBh8YcAElwRO49xiIE"
      )
      .then((response) => {
        console.log(response);
        setNasaData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // App
  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
        <Card className='card-outer'>
        <Header title={nasaData.title} date={nasaData.date} />
        <Main src={nasaData.url} description={nasaData.explanation} />
        <Footer copyright={nasaData.copyright} />
      </Card>
    </div>
  );
}

export default App;