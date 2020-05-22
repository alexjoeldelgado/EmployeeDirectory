import React from "react";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Main from "./components/Main";
// import "./App.css";

function App() {
  return (
    <div className="App ml-1 mr-1">
      <Header />
      <Wrapper>
        <Main />
      </Wrapper>
    </div>
  );
};

export default App;