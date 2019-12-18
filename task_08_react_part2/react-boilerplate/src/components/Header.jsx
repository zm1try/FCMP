import React, { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBy: 'title'
        };
        this.textInput = React.createRef();
    }
    render() {
        const { searchBy } = this.state;

        const setSearchByTitle = (e) => {
            e.preventDefault();
            this.setState({
                searchBy: 'title'
            });
        };

        const setSearchByGenre = (e) => {
            e.preventDefault();
            this.setState({
                searchBy: 'genres'
            });
        };

        const searchSome = (e) => {
            e.preventDefault();
            this.props.parentCallback({
                value: this.textInput.current.value,
                searchBy: this.state.searchBy
            });
        };

        return <header className="clearfix">
                    <h1 className="logo">Site name</h1>
                    <nav className="navbar">
                        <label htmlFor="search" className="search-label">Find your movie</label>
                        <input type="text" name="search" id="search" className="search-input" ref={this.textInput}/>
                        <div className="search-button" onClick={searchSome}>
                            <span className="search-button__caption">Search</span>
                        </div>
                        <div className="search-by__toggle">
                            <span className="toggle__caption">Search by</span>
                            <div className={`toggle__option ${searchBy === 'title' ? 'active' : ''}`} onClick={setSearchByTitle}>
                                <span>Title</span>
                            </div>
                            <div className={`toggle__option ${searchBy === 'genres' ? 'active' : ''}`} onClick={setSearchByGenre}>
                                <span>Genre</span>
                            </div>
                        </div>
                    </nav>
                </header>;
    }
}

export default Header;
