import React from 'react';

import angryJPG from '../images/angry.jpg';

const PageNotFound = () => (
  <div>
    <div>
      <img className="angry" src={angryJPG} alt='' />
    </div>
    <div className="page-not-found">
      <h3>Whoooops! The page you are looking for does not exist.</h3>
      <h3>Please refrain from destroying your computer and try again.</h3>
    </div>
  </div>
);

export default PageNotFound;
