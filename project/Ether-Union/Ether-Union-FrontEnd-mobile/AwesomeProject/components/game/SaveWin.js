import React, { Component } from 'react'
import contractInstance from '../../options'

export default class  SaveWin extends Component {

  constructor() {
    super();
    this.state = {

      getCagnote: 0,
      getPrediction: 0
		};

    this._saveWin = this._saveWin.bind(this)
  }

  async componentDidMount() {

    this.setState({
                    getCagnotte: parseInt(await contractInstance.getCagnote(),10),
                    getPrediction: parseInt(await contractInstance.getPrediction(),10) })
  }

  async _saveWin() {
      await window.ethereum.enable()
    	await contractInstance.saveWin()
  }

  render() {

    return (

    <View><Text>RECHERCHER UNE DEMANDE</Text></View>

    );
  }
}
