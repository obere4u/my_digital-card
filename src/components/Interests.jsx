import React from 'react'

function Interests() {
  return (
    <div className="my__card-interests">
      <h4 className="my__card-interests__title">Interests</h4>
      <p className="my__card-interests__text">{`When i'm not coding, I love`}</p>
      <ul className="my__card-interests-interest">
        <li>Reading Tech articles / world news</li>
        <li>Playing / watching football</li>
        <li>Surfing the net</li>
        <li>Cooking</li>
      </ul>
    </div>
  );
}

export default Interests