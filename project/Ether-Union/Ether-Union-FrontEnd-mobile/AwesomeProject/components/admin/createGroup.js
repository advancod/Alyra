import React, { Component } from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native';

export default class CreateGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: '',
      pseudo: ''
		};
  }

  render() {


    return (

      <View>
      <Text>{this.props.text1}</Text>
      <Text>{this.props.text2}</Text>
      <Text>{this.props.text3}</Text>


      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 80,
    height: 80,
  },

  text: {
    color: '#242134',
    textAlign: 'center',
    fontSize: 16,
  },

  buttonContainer: {
    padding: 15,
  },
});
