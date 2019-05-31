import React, { Component } from 'react'
import contractInstance from '../../options'

export default class Withdraw extends Component {
  constructor() {
    super();
    this.state = {
      getGains: 0,
      getNbGagnants: 0
		};
    this._withdrawGains = this._withdrawGains.bind(this)

  }

  async componentDidMount() {

    this.setState({
      getNbGagnants: parseInt(await contractInstance.getNbGagnants(),10),
      getGains: parseInt(await contractInstance.getGains(),10) })
  }



  async _withdrawGains() {
      await window.ethereum.enable()
    	await contractInstance.withdrawGains()
  }

  render() {

    return (

    <View><Text>RECHERCHER UNE DEMANDE</Text></View>

    );
  }
};
