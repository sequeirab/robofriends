import React from 'react';
import Card from './Card';

const CardList = ( { robots } ) => {
    const cardComponent = robots.map(user => {
       return <Card 
       key={user.id}
        id={user.id}  
        name={user.name} 
        username={user.username}
         email={user.email} 
         />
    })
    return(
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;
