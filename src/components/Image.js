import React from 'react';

const Image = (props) => (
  <li>
    <img
      src={`https://farm${props.farmID}.staticflickr.com/${props.serverID}/${props.id}_${props.secret}.jpg`}
      alt={props.title}
    />
  </li>
);

export default Image;
