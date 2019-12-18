import React, { Component } from "react";

class Main extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            list: props.list,
            sortBy: 'release'
        };
    }

    render() {
        const { list, sortBy } = this.state;

        const setSortByRating = (e) => {
            e.preventDefault();
            this.setState({
                sortBy: 'rating'
            });
        };

        const setSortByRelease = (e) => {
            e.preventDefault();
            this.setState({
                sortBy: 'release'
            });
        };

        return <main className="clearfix">
                    <div className="clearfix main-settings">
                        <div className="sort-by__toggle">
                            <span className="toggle__caption">Sort by</span>
                            <div className={`toggle__option ${sortBy === 'release' ? 'active' : ''}`} onClick={setSortByRelease}>
                                <span>Release date</span>
                            </div>
                            <div className={`toggle__option ${sortBy === 'rating' ? 'active' : ''}`} onClick={setSortByRating}>
                                <span>Rating</span>
                            </div>
                        </div>
                    </div>
                    <ul className="list">
                        {list.sort((a, b) => {
                            return sortBy === 'release' ? (Date.parse(b.release_date) - Date.parse(a.release_date)) : (a.vote_count - b.vote_count);
                        }).map(elem => <li className="list__item">
                                <div>
                                    <div className="list__item__poster">
                                        <img src={elem.poster_path} alt={elem.title} width="320"/>
                                    </div>
                                    <div className="list__item__caption">
                                        <span className="caption__year">{elem.release_date}</span>
                                        <span className="caption__title">{elem.title}</span>
                                        <span className="caption__genre">{elem.genres.join(', ')}</span>
                                    </div>
                                </div>
                            </li>)}
                    </ul>
                </main>;
             
    }
}

export default Main;
