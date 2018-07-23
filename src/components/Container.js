import React, { Component } from 'react';
import axios from 'axios';

//Component imports
import Header from './Header';
import Gallery from './Gallery';

class Container extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      searching: false
    };
  }

  componentDidMount() {
    if(!this.props.notFound) {
      this.performSearch(this.props.searchTerm);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchTerm !== prevProps.searchTerm) {
      if(this.props.search)
        this.findRecentPhotos();
      else
        this.performSearch(this.props.searchTerm);
    }
  }

  performSearch = query => {
    if(this.props.search)
      this.setState({
        ...this.state.photos,
        searching: true
      });
    else
      this.setState({
        ...this.state.photos,
        searching: false
      });
    axios.get(`https://api.flickr.com/services/rest/?
      method=flickr.photos.search&
      api_key=${this.props.api_key}&
      tags=${query}&
      content_type=1&
      sort=relevance&
      per_page=24&
      format=json&
      nojsoncallback=1`)
    .then(response => {
      this.setState({
        photos: response.data.photos.photo
      })
      console.dir(this.state);
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  findRecentPhotos() {
    axios.get(`https://api.flickr.com/services/rest/?
      method=flickr.photos.getRecent&
      api_key=${this.props.api_key}&
      per_page=24&
      format=json&
      nojsoncallback=1`)
    .then(response => {
      console.log(response);
      this.setState({
        photos: response.data.photos.photo
      })

    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return (
      <div className="container">

        <Header search={this.props.search} performSearch={this.performSearch}/>
        <Gallery
          photos={this.state.photos}
          title={this.props.title}
          search={this.props.search}
          searching={this.state.searching}
        />

      </div>
    );
  }
}

export default Container;
