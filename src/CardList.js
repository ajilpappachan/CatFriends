import React from 'react';
import Card from './Card';

const CardList = ({cats}) => {
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