import React, { Component } from 'react'
import contractInstance from '../../options'

export default class  Play extends Component {
  constructor() {
    super();
    this.state = {
			getPrixLotery: 0,
      getSuperCagnote: 0,
      getTicketsLeft: 0,
      getEndGame: 0,
      getBlockStop: 0,
      getNumCagnote: 0,
      getCagnote: 0,
      getNbGagnants: 0,
      balanceOf: 0,
      getWithdrawBlock: 0,
      getSaveBlock: 0,
      getStateGame : '',
      prediction: '',
      getBlock: 0
		};
    this.jouerLotery = this.jouerLotery.bind(this)
  }

  handleChange = name => event => {
   this.setState({ [name]: event.target.value });
 };

  async componentDidMount() {

    this.setState({

                    getPrixLotery: parseInt(await contractInstance.getPrixLotery(),10),
                    getStateGame: await contractInstance.getStateGame(),
                    getSuperCagnote: parseInt(await contractInstance.getSuperCagnote(),10),
                    getSaveBlock: parseInt(await contractInstance.getSaveBlock(),10),
                    getWithdrawBlock: parseInt(await contractInstance.getWithdrawBlock(),10),
                    getEndGame: parseInt(await contractInstance.getEndGame(),10),
                    getBlockStop: parseInt(await contractInstance.getBlockStop(),10),
                    getCagnote: parseInt(await contractInstance.getCagnote(),10),
                    getNbGagnants: parseInt(await contractInstance.getNbGagnants(),10),
                    balanceOf: parseInt(await contractInstance.getSolde(),10),
                    getBlock: parseInt(await contractInstance.getBlock(),10)})
  }

  async jouerLotery() {
    await window.ethereum.enable()
    await contractInstance.play(this.state.prediction)
  }

  render() {

    return (
  <View><Text>RECHERCHER UNE DEMANDE</Text></View>

    );
  }
}
