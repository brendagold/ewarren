import React from "react";

import "./App.css";
import Header from "./component/header";
import Main from "./component/main";
import Footer from "./component/footer";
import Navv from "./component/nav";
import ScrollToTop from "./component/scrollUp";

function App() {
  return (
    <div className="App">
      <Navv />
      <Header />
      <Main />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
