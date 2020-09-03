import React from 'react';

const Card = ({name, email}) => {
    return (
        <div className="bg-washed-red dib br3 pa3 ma2 grow bw2 shadow-5">
            <div>
                <img alt="Profile" src={`https://robohash.org/${name}?set=set4`} width="200" height="200"></img>
            </div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;