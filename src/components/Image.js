import React from 'react';

//Renderes a particular Flickr image based on various props passed from the gallery component. 
const Image = (props) => (
  <li>
    <img
      src={`https://farm${props.farmID}.staticflickr.com/${props.serverID}/${props.id}_${props.secret}.jpg`}
      alt={props.title}
    />
  </li>
);

export default Image;
