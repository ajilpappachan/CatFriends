import React from 'react';
import Card from './Card';
import { cats } from './Cats';

const CardList = () => {
    return (
        <div>
            {
                cats.map((value, index) => {
                    return (
                        <Card
                            key={index}
                            name={cats[index].name}
                            email={cats[index].email}
                        />
                    )

                })
            }
        </div>
    );
}

export default CardList;