import React, { Component } from 'react';
import axios from 'axios';

//Component imports
import Header from './Header';
import Gallery from './Gallery';

class Container extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    axios.get(`https://api.flickr.com/services/rest/?
      method=flickr.photos.search&
      api_key=${this.props.api_key}&
      tags=dogs&
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

  render() {
    return (
      <div className="container">

        <Header />

        <Gallery photos={this.state.photos}/>

      </div>
    );
  }
}

export default Container;
