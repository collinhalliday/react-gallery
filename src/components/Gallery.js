import React from 'react';

import Image from './Image';
import NotFound from './NotFound';

const Gallery = (props) => (
  <div className="photo-container">

    <h2>{!props.searching ? props.title : `Results for "${props.searchQuery}"`}</h2>

    <ul>
       {props.photos.length < 1
        ?
        <NotFound />
        :
        props.photos.map(photo => {
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
    </ul>
  </div>
);

export default Gallery;
