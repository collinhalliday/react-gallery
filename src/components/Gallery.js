import React from 'react';

import Image from './Image';
import NotFound from './NotFound';

const Gallery = (props) => {

  return (
    <div className="photo-container">

      {!props.searching
       ?
       <h2>{props.title}</h2>
       :
       <h2>Results: <span className="no-transform">"{props.searchQuery}"</span></h2>
      }

      <ul>
         {props.photos.length > 0
          ?
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
          )})
          :
          <NotFound />
          }
      </ul>

    </div>
  );
}

export default Gallery;
