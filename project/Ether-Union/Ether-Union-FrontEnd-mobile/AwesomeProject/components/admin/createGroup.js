import React, { Component } from 'react'
import contractInstance from '../../options'

export default class CreateGroup extends Component {

  constructor() {
    super();
    this.state = {
      nom: '',
      pseudo: ''
		};
    this._creerGroupe = this._creerGroupe.bind(this)
  }

  handleChange = name => event => {
   this.setState({ [name]: event.target.value });
 };

  async _creerGroupe() {

      await window.ethereum.enable()
    	await contractInstance.creerGroupe(this.state.nom,this.state.pseudo)
  }

  render() {


    return (

<View><Text>CREER UN GROUPE</Text></View>

    );
  }
}
