import React from 'react';

//component imports
import Image from './Image';
import NotFound from './NotFound';

//This component displays the relevant photos and a title based upon the route selected, and if a search is being performed,
//the search query. If no results are found for a particular search query, the NotFound component is rendered. Each search
//will include the search query for the user so they can see which results relate to their most recent search query.
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
