// import { AppRegistry } from 'react-native';
// import App from './App';
//
// AppRegistry.registerComponent('albums', () => App);

// Import a library to help create a  Component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//Create a Component
const App = () => (
    <Header headerText={'Albumsaaa'} />
);


//Render it to the device
AppRegistry.registerComponent('albums', () => App);
