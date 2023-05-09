import React from "react";
import "./styles/main.css";
import Navbar from "./components/navbar";
import Article from "./components/article";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <header className="main-header">
          <Navbar />
          <a className="headline-link" href="#">
            star wars: jedi fallen order 2
          </a>
        </header>
        <Article />
      </div>
    </div>
  );
};

export default App;
