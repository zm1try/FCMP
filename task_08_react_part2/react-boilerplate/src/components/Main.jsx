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
<main class="clearfix">
    <div class="clearfix main-settings">
        <div className="sort-by__toggle">
            <span class="toggle__caption">Sort by</span>
            <div class="toggle__option">
                <span>Release date</span>
            </div>
            <div class="toggle__option">
                <span>Raiting</span>
            </div>
        </div>
    </div>
    <ul class="list">
        {data.map(elem => <li class="list__item">
                <div>
                    <div class="list__item__poster">
                        <img src="" alt="{elem.title}" height="400px"/>
                    </div>
                    <div class="list__item__caption">
                        <span class="caption__year">{elem.year}</span>
                        <span class="caption__title">{elem.title}</span>
                        <span class="caption__genre">{elem.genre}</span>
                    </div>
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
