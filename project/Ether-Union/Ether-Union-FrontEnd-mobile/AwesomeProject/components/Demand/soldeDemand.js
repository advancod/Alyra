import React, { Component } from 'react'
import contractInstance from '../../options'

export default class  SoldeDemand extends Component {

  constructor() {
    super();
    this.state = {
      getPseudos : [],
      pseudo : ''
		};

    this._solderCanal = this._solderCanal.bind(this)
  }


  handleChange = name => event => {
   this.setState({ [name]: event.target.value });
 };


  async componentDidMount() {

     let copy = []
     let list = await contractInstance.getAllPseudos()
     for (let j=0; j<list.length; j++){
       copy.push(await contractInstance.getNomMembre(list[j]))
     }

     this.setState({
                     getPseudos : copy })
   }

  async _solderCanal() {
      await window.ethereum.enable()
    	await contractInstance.solderCanal(this.state.pseudo)
  }

  render() {

    return (

  <View><Text>RECHERCHER UNE DEMANDE</Text></View>
    );

  }
}
