import React, { Component } from "react";

const data = [
    {
        title: 'name1',
        genre: 'genre1',
        year: '2000'
    },
    {
        title: 'name2',
        genre: 'genre2',
        year: '2001'
    },
    {
        title: 'name3',
        genre: 'genre3',
        year: '2001'
    },
    {
        title: 'name4',
        genre: 'genre4',
        year: '2004'
    },
    {
        title: 'name5',
        genre: 'genre5',
        year: '2001'
    },
    {
        title: 'name6',
        genre: 'genre6',
        year: '2004'
    },
];

const main = 
<main>
    <div>
        <div className="sort-by-toggle">
            <span>Search by</span>
            <div className="search-button">
                <span>Release date</span>
            </div>
            <div className="search-button">
                <span>Raiting</span>
            </div>
        </div>
    </div>
    <ul>
        {data.map(elem => <li>
                <div>
                    <img src="" alt="{elem.title}"/>
                    <span>{elem.title}</span>
                    <span>{elem.genre}</span>
                    <span>{elem.year}</span>
                </div>
            </li>)}
    </ul>
</main>

class Main extends Component {  
  render() {
    return main;
  }
}

export default Main;
