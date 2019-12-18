import React, { Component } from "react";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div class="wrapper">
          <Header />
          <Main />
          <Footer />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
