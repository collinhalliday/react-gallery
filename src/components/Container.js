import React, { Component } from 'react';
import axios from 'axios';

//Component imports
import Header from './Header';
import Gallery from './Gallery';
import Loading from './Loading';

class Container extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      query: '',
      loading: true
    };
  }

  componentDidMount() {
    if(this.props.searchTerm === "recent")
      this.findRecentPhotos();
    else
      this.performSearch(this.props.searchTerm);
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchTerm !== prevProps.searchTerm) {
      if(this.props.searchTerm === "recent")
        this.findRecentPhotos();
      else
        this.performSearch(this.props.searchTerm);
    }
  }

  performSearch = query => {
    if(this.props.search)
      this.setState({
        ...this.state.photos,
        query,
        loading: true
      });
    else
      this.setState({
        ...this.state.photos,
        query,
        loading: true
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
        photos: response.data.photos.photo,
        loading: false
      })
      console.dir(this.state);
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  findRecentPhotos() {
    this.setState({
      loading: true
    });
    axios.get(`https://api.flickr.com/services/rest/?
      method=flickr.photos.getRecent&
      api_key=${this.props.api_key}&
      per_page=24&
      format=json&
      nojsoncallback=1`)
    .then(response => {
      console.log(response);
      this.setState({
        photos: response.data.photos.photo,
        loading: false
      })

    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return (
      <div className="container">

        <Header
          search={this.props.search}
        />

        {this.state.loading
         ?
         <Loading />
         :
        <Gallery
          photos={this.state.photos}
          title={this.props.title}
          search={this.props.search}
          searching={this.props.searching}
          loading={this.state.loading}
          searchQuery={this.state.query}
        />
        }

      </div>
    );
  }
}

export default Container;
