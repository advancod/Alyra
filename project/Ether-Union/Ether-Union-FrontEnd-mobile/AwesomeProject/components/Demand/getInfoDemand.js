import React, { Component } from 'react'
import contractInstance from '../../options'

export default class  GetInfoDemand extends Component {
  constructor() {
    super();
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
this.choixGroupe = this.choixGroupe.bind(this)
this.choixMembre = this.choixMembre.bind(this)
  }

  handleChange = name => event => {
   this.setState({ [name]: event.target.value });
 };

 async choixGroupe() {
   let copy = []
   let list = await contractInstance.getMembres(this.state.nomGroupe)
   for (let j=0; j<list.length; j++){
     copy.push(await contractInstance.getNomMembre(list[j]))
   }

   this.setState({
                   getMembres : copy,
                 getMonPseudo : await contractInstance.getPseudoInGroup(this.state.nomGroupe)})

   }

 async choixMembre() {

   this.setState({
                   getReceptions : parseInt(await contractInstance.getReceptions(this.state.pseudo),10),
                   getDonnations : parseInt(await contractInstance.getDonnations(this.state.pseudo),10),
                   getMontant : parseInt(await contractInstance.getMontant(this.state.pseudo),10),
                   getEncours : parseInt(await contractInstance.getEncours(this.state.pseudo),10),
                   getAddresse : await contractInstance.getAddresse(this.state.pseudo),
                   getDescription : await contractInstance.getDescription(this.state.pseudo)
                  })
 }

 async componentDidMount() {

   let copy = []
   let list = await contractInstance.getGroupesPerAddress()
   for (let i=0; i<list.length; i++){
     copy.push(await contractInstance.getNomGroupe(list[i]))
   }

   this.setState({

                   getGroupesPerAddress : copy})

 }


  render() {

    return (

<View><Text>RECHERCHER UNE DEMANDE</Text></View>
    );
  }
}
