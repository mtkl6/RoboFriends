import React from 'react';

import Card from './Card.js';

const CardList =  ({robots}) => {
    return (
        <>
        { robots.map((user, i) => {
        return(
         <Card
          key={user.id}
          id={robots[i].id}
          name={robots[i].name} 
          email={robots[i].email}/>
    )}) }
        </>
    )
}

export default CardList;