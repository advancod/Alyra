import React, { Component } from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native';

export default class CreateDemand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo: '',
      getPseudos : [],
      montant: '',
      description: ''
		};
  }


  render() {


    return (

              <View>
              <Text>{this.props.text1}</Text>
              <Text>{this.props.text2}</Text>
              <Text>{this.props.text3}</Text>

<Text>{this.state.getPseudos}</Text>

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
