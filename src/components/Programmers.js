/*
PROGRAMMERS Instructions

Watch this short video:
https://tk-assets.lambdaschool.com/1ea6e6a2-2ef1-45de-bcab-b99a8f775870_programmers.gif

This component keeps track of a list of pioneers in the field of programming on the one hand,
and the id of the currently featured programmer on the other. That's two slices of state!
We can only feature one awesome programmer at a time.

Find comments below to help you along.
*/

import React, { useState } from 'react';

// Use this variable ONLY to initialize a slice of state!
// There is something in the JSX right now breaking this rule...
// The export syntax is necessary for the testing library to be able to import the array.
export const listOfAwesome = [
  { id: '1', name: 'Ada Lovelace' },
  { id: '2', name: 'Grace Hopper' },
  { id: '3', name: 'Evelyn Boyd Granville' },
  { id: '4', name: 'Mary Kenneth Keller' },
  { id: '5', name: 'Frances Allen' },
  { id: '6', name: 'Carol Shaw' },
];

export default function Programmers() {

  const [programmers, setProgrammers] = useState(listOfAwesome);
  const [featuredId, setFeaturedId] = useState(null);
  // We'll have to use the state hook twice, as we need two slices of state.
  // The programmers list on the one hand, and the id of the featured programmer on the other.

  const getNameOfFeatured = () => {
    const featuredDev = programmers.find((dev) => dev.id === featuredId);
    return featuredDev ? featuredDev.name : '';
    // Leave this for last!
    // This is NOT an event handler but a helper function. See its usage inside the JSX.
    // It's going to utilize both slices of state to return the _name_ of the featured dev.
    // The beauty of closures is that we can "see" both slices of state from this region
    // of the program, without needing to inject the information through arguments.
  };

  const style = {
    fontSize: '1.5em',
    marginTop: '0.5em',
    color: featuredId ? 'gold' : 'royalblue',
  };
  const setFeatured = (id) => {
   
    setFeaturedId(id);
  };
  return (
    <div className='widget-programmers container'>
      <h2>Programmers</h2>
      <div className='programmers'>
        {programmers.map((dev) => (
          <div className='programmer' key={dev.id}>
            {dev.name}{' '}
            <button onClick={() => setFeatured(dev.id)}>Feature</button>
          </div>
        ))}
      </div>
      <div id='featured' style={style}>
        {featuredId ? (
          `🎉 Let's celebrate ${getNameOfFeatured()}! 🥳`
        ) : (
          'Pick an awesome programmer'
        )}
      </div>
    </div>
  );
}
