import React from 'react';

import Image from './Image';
import NotFound from './NotFound';

const Gallery = (props) => (
  <div className="photo-container">
    {props.photos.length > 0
     ?
     <h2>{!props.searching ? props.title : "Results"}</h2>
     :
     null
    }

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
