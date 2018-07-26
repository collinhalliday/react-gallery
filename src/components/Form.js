import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//This is the other component that includes state. It has its own local state that controls the display of the input
//users type into the search input. Includes withRouter import to allow for access of history prop in dynamic routing below.
class Form extends Component {

  state = {
    searchInput: ''
  }

  //displays content typed into search input by user.
  handleSearchInput = event => {
    this.setState({
      searchInput: event.target.value
    });
  }

  //upon form submit, app is redirected to search/:query route, and the content of the search input is added dynaically
  //in place of the :query param, ensuring that a new route is envoked matching the search query and a search of Flickr
  //is performed based on that search query. Form is also reset.
  handleFormSubmit = event => {
    event.preventDefault();
    this.props.history.push(`/search/${this.state.searchInput}`);
    event.currentTarget.reset();
  }

  //Changes color of search button svg based upon mouseOver.
  svgRed = event => {
    if(event.target.tagName === "BUTTON")
      event.target.children[0].style.fill = "red";
    else if(event.target.tagName === "svg")
      event.target.style.fill = "red";
    else
      event.target.parentNode.style.fill = "red";
  }

  //Changes color of search button svg based upon mouseOut.
  svgWhite = event => {
    if(event.target.tagName === "BUTTON")
      event.target.children[0].style.fill = "white";
    else if(event.target.tagName === "svg")
      event.target.style.fill = "white";
    else
      event.target.parentNode.style.fill = "white";
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleFormSubmit}>
        <input type="search" name="search" placeholder="Search" required onChange={this.handleSearchInput}/>
        <button type="submit" className="search-button" onMouseOver={this.svgRed} onMouseOut={this.svgWhite}>
          <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </button>
      </form>
    );
  }
}

export default withRouter(Form);
