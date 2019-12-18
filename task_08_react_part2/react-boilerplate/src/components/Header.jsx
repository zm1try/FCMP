import React, { Component } from "react";

const header = 
<header class="clearfix">
    <h1 class="logo">Site name</h1>
    <nav class="navbar">
        <label htmlFor="search" class="search-label">Find your movie</label>
        <input type="text" name="search" id="search" class="search-input"/>
        <div className="search-button">
            <span class="search-button__caption">Search</span>
        </div>
        <div className="search-by__toggle">
            <span class="toggle__caption">Search by</span>
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
