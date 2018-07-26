import React from 'react';

//Renders only when there are no search results for a particular query.
const NotFound = () => (
    <li className="not-found">
      <h3>No Results Found</h3>
      <p>Your search did not return any results. Please try again.</p>
    </li>
);

export default NotFound;
