import React, { Component } from 'react'
import CardList from './CardList';
import { cats } from './Cats';
import Searchbar from './Searchbar';

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
                <h1>CatFriends</h1>
                <Searchbar onSearchChange={this.onSearchChange} />
                <CardList cats={filteredCats} />
            </div>
        )
    }
}

export default App;