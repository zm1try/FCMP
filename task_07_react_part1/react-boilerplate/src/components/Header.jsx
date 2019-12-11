import React, { Component } from "react";

const header = 
<header>
    <h1>Site name</h1>
    <nav>
        <label htmlFor="search">Find your movie</label>
        <input type="text" name="search" id="search"/>
        <div className="search-button">
            <span>Search</span>
        </div>
        <div className="search-by-toggle">
            <span>Search by</span>
            <div className="search-button">
                <span>Title</span>
            </div>
            <div className="search-button">
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
