import React from 'react';

const person = (probs) => {
    return (
     <div>
        <p>I am {probs.name} and I am {probs.age} years!!</p>
        <p>{probs.children}</p>
    </div>
    )
}

export default person;