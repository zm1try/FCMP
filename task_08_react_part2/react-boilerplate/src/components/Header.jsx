import React, { Component } from "react";

const header = 
<header className="clearfix">
    <h1 className="logo">Site name</h1>
    <nav className="navbar">
        <label htmlFor="search" className="search-label">Find your movie</label>
        <input type="text" name="search" id="search" className="search-input"/>
        <div className="search-button">
            <span className="search-button__caption">Search</span>
        </div>
        <div className="search-by__toggle">
            <span className="toggle__caption">Search by</span>
            <div className="toggle__option">
                <span>Title</span>
            </div>
            <div className="toggle__option">
                <span>Genre</span>
            </div>
        </div>
    </nav>
</header>

class Header extends Component {  
  render() {
    return header;
  }
}

export default Header;
