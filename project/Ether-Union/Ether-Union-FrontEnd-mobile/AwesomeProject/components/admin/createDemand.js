import React, { Component } from 'react'
import contractInstance from '../../options'

export default class CreateDemand extends Component {

  constructor() {
    super();
    this.state = {
      pseudo: '',
      getPseudos : [],
      montant: '',
      description: ''
		};
    this._demander = this._demander.bind(this)
  }

  handleChange = name => event => {
   this.setState({ [name]: event.target.value });
 };

  async _demander() {
      await window.ethereum.enable()
    	await contractInstance.demander(this.state.montant,this.state.pseudo,this.state.description)
  }

  async componentDidMount() {

     let copy = []
     let list = await contractInstance.getAllPseudos()
     for (let j=0; j<list.length; j++){
       copy.push(await contractInstance.getNomMembre(list[j]))
     }

     this.setState({
                     getPseudos : copy })
   }

  render() {


    return (


              <View><Text>CREER UNE DEMANDE</Text></View>


    );
  }
}
