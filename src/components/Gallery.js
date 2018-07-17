import React from 'react';

import Image from './Image';

const Gallery = (props) => (
  <div className="photo-container">
    <h2>Results</h2>
    <ul>
      {props.photos.map(photo => {
        return (
          <Image
            farmID={photo.farm}
            serverID= {photo.server}
            key={photo.id}
            id={photo.id}
            secret={photo.secret}
            title={photo.title}
          />
        )})}
      
      {/* Not Found */}
      <li className="not-found">
        <h3>No Results Found</h3>
        <p>You search did not return any results. Please try again.</p>
      </li>
    </ul>
  </div>
);

export default Gallery;
