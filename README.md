# React Photo Gallery

An app that displays photos of various categories through use of Flickr's API.

This project was done in conjunction with my TeamTreehouse full-stack JavaScript TechDegree, as the ninth project of twelve. I was given HTML and CSS starter files, along with mockups of the app's desired appearance. I was then instructed to convert the HTML to React components, to program all of the app's functionality, including communication with Flickr for photo data and provision of static routes specific to hard-coded photo categories and dynamic routes for user searches, and to style the app according to my own preference, provided that it followed the basic structure in the provided mockups.

As instructed, the app's basic structure was procured through use of the npm module create-react-app. Specific components, app functionality and additional styles were developed manually. The CSS for the 404 animations included in the PageNotFound component was coded through use of a separate node.js program I developed specifically for that purpose.

## Installation:

With npm and node.js installed on your computer and the project files downloaded, use `npm install` to download all of the project's dependencies.

## Usage:

Once the project's dependencies are installed, the user must apply for a non-commercial api key [here](https://www.flickr.com/services/apps/create/apply/). If the user does not already have a Yahoo account, the user will prompted to set one up. Through this process, the user will generate an api key and secret. The api key must be placed in a config.js file, located in a data directory, and the data directory must be placed in the app's src directory (/src/data/config.js). The config.js file should follow the format below:

```
module.exports = {
  api_key: '*************************'
};
```

For more detailed instructions on the process of obtaining an api key, look [here](https://www.flickr.com/services/apps/create/)

Use `npm start` to run the app with the development server. Executing this command should result in the program automatically opening a browser window to run the app.
