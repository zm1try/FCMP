import React, { Component } from "react";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";

import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        list: [],
        isLoading: true,
    };
  }

  componentDidMount() {
    fetch('https://reactjs-cdp.herokuapp.com/movies')
        .then(response => response.json())
        .then((response) => {
            if (response && response.data) {
                // this.forceUpdate();
                this.setState({
                    list: response.data,
                    isLoading: false,
                });
            }
        })
        .catch(() => {});
  }

  callbackFunction(some) {
    this.setState({
      isLoading: true,
    });
    fetch(`https://reactjs-cdp.herokuapp.com/movies?search=${some.value}&searchBy=${some.searchBy}`)
        .then(response => response.json())
        .then((response) => {
            if (response && response.data) {
                this.setState({
                    list: response.data,
                    isLoading: false,
                });
            }
        })
        .catch(() => {});
  }

  render() {
    const { list, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading ...</p>;
    } else {
      return (
        <ErrorBoundary>
          <div className="wrapper">
            <Header parentCallback = {this.callbackFunction.bind(this)}/>
            <Main list={list}/>
            <Footer />
          </div>
        </ErrorBoundary>
      );
    }
  }
}

export default App;
