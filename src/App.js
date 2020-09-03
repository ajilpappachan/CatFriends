import React, { Component } from 'react'
import CardList from './CardList';
import { cats } from './Cats';
import Searchbar from './Searchbar';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            cats: cats,
            searchfield: ''
        };
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });

    }
    render() {
        const filteredCats = this.state.cats.filter(cat => {
            return cat.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (

            <div className="tc">
                <h1 className='f-subheadline measure'>CatFriends</h1>
                <Searchbar onSearchChange={this.onSearchChange} />
                <Scroll>
                    <CardList cats={filteredCats} />
                </Scroll>
            </div>
        )
    }
}

export default App;