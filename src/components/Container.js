import React, { Component } from 'react';
import axios from 'axios';

//Component imports
import Header from './Header';
import Gallery from './Gallery';
import Loading from './Loading';

//Primary component used to retrieve photo data from Flickr based upon the props passed to it--primarily the category prop.
//Most of the app's state lives here.
class Container extends Component {

  //Initializes state with empty photos array and loading boolean set to false.
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      loading: true
    };
  }

  //Once component mounts, the app either searches for photos based on the particular route selected and category passed as
  //a prop ('guitars' is the default route and category), or if the search route is selected, the app retrieves photos
  //recently posted to Flickr by default.
  componentDidMount() {
    if(this.props.category === "recent")
      this.findRecentPhotos();
    else
      this.performSearch(this.props.category);
  }

  //If the cateogry prop changes, as occurs when a different route is selected or a search is made, either the default
  //recently-posted photos are retreived, or a search is performed based upon the category prop. If the route clicked is not
  //the search/:query route, a static category is passed. Otherwise, the program dynamically passes the search query as the
  //category prop.
  componentDidUpdate(prevProps) {
    if (this.props.category !== prevProps.category) {
      if(this.props.category === "recent")
        this.findRecentPhotos();
      else
        this.performSearch(this.props.category);
    }
  }

  //Peforms a photo search based upon query string passed as argument. Sets loading boolean to true initially so as to display
  //loading icon while photos are being retrieved. Resets boolean to false once photos are retreived.
  performSearch = query => {
    this.setState({
      ...this.state.photos,
      loading: true
    });
    axios.get(`https://api.flickr.com/services/rest/?
      method=flickr.photos.search&
      api_key=${this.props.api_key}&
      tags=${query}&
      content_type=1&
      sort=relevance&
      per_page=16&
      format=json&
      nojsoncallback=1`)
    .then(response => {
      this.setState({
        photos: response.data.photos.photo,
        loading: false
      })
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  //Retrieves photos recently posted to Flickr. Used only when the /search route is selected.
  findRecentPhotos() {
    this.setState({
      loading: true
    });
    axios.get(`https://api.flickr.com/services/rest/?
      method=flickr.photos.getRecent&
      api_key=${this.props.api_key}&
      per_page=16&
      format=json&
      nojsoncallback=1`)
    .then(response => {
      this.setState({
        photos: response.data.photos.photo,
        loading: false
      })
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  //Renders the page header, passing the search boolean as a prop. Either the loading component is rendered or the gallery
  //component, depending upon whether or not the photo data has been retrieved. Photos array, route title, search boolean,
  //searching boolean, loading boolean, and photo category are passed as props.
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
          searchQuery={this.props.category}
        />
        }

      </div>
    );
  }
}

export default Container;
