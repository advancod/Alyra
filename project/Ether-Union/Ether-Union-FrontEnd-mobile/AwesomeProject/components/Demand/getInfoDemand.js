import React, { Component } from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native';

export default class  GetInfoDemand extends Component {

  constructor(props) {
    super(props);
    this.state = {
			getGroupesPerAddress: [],
      getMembres: [],
      getMonPseudo: '',
      getMembre: '',
      pseudo: '',
      getReceptions: 0,
      getDonnations: 0,
      getMontant: 0,
      getEncours: 0,
      getDescription: '',
      nomGroupe: '',
      getAddresse: ''
		};
  }


  render() {

    return (

      <View>
      <Text>{this.props.text1}</Text>
      <Text>{this.props.text2}</Text>
      <Text>{this.props.text3}</Text>
      <Text>{this.props.text4}</Text>
      <Text>{this.props.text5}</Text>
      <Text>{this.props.text6}</Text>
      <Text>{this.props.text7}</Text>
      <Text>{this.props.text8}</Text>
      <Text>{this.props.text9}</Text>
      <Text>{this.props.text10}</Text>

      <Text>{this.state.getGroupesPerAddress}</Text>
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
