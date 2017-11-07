import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

//const AlbumList = () => {
class AlbumList extends Component {
  componentWillMount() {
    //console.log('componentWillMout in AlbumList');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => console.log(response));
  }
  render() {
    return (
      <View>
        <Text>Album list~!!!</Text>
      </View>
    );
  }
}

export default AlbumList;
