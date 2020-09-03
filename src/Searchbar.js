import React from 'react'

const Searchbar = ({ onSearchChange }) => {
    return (
        <div>
            <input
                type="search"
                className="pa3 ba b--green bg-washed-red"
                placeholder="Search Cats"
                onChange={onSearchChange}
            />
        </div>
    );
}

export default Searchbar;