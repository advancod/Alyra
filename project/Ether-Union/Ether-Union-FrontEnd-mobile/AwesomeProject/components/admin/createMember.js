import React, { Component } from 'react'
import contractInstance from '../../options'

export default class CreateMember extends Component {

  constructor() {
    super();
    this.state = {
      getAdminGroups: [],
      membre: '',
      pseudo1: '',
      groupe: ''
    };
    this._ajouterMembre = this._ajouterMembre.bind(this)
  }

  handleChange = name => event => {
   this.setState({ [name]: event.target.value });
 };

  async componentDidMount() {

    let copy2 = []
    let list2 = await contractInstance.getOwnedGroupe()
    for (let j=0; j<list2.length; j++){
      copy2.push(await contractInstance.getNomGroupe(list2[j]))
    }

    this.setState({
                  getAdminGroups : copy2})

  }

  async _ajouterMembre() {
      await window.ethereum.enable()
     	await contractInstance.ajouterMembre(this.state.membre,this.state.groupe,this.state.pseudo1)
  }

  render() {

    return (

<View><Text>AJOUTER UN MEMBRE A UN GROUPE</Text></View>

    );
  }
}
