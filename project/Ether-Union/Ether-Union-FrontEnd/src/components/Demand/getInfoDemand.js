import React, { Component } from 'react'
import contractInstance from '../../options'
import PropTypes from "prop-types"

export default class  GetInfoDemand extends Component {
  constructor() {
    super();
    this.state = {
			getGroupesPerAddress: [],
      getAdminGroups: [],
      getMembres: [],
      getMonPseudo: '',
      getGroupe: '',
      getMembre: '',
      pseudo: '',
      getReceptions: '',
      getDonnations: '',
      getMontant: '',
      getEncours: '',
      getDescription: '',
      getAddresse: ''
		};
    this._membreInfo = this._membreInfo.bind(this)
    this._getMembresGroupe = this._getMembresGroupe.bind(this)
  }


  static propTypes = {
    nomGroupe: PropTypes.string,
    pseudo1: PropTypes.string,
    handleChange: PropTypes.func
  }

  static defaultProps = {
    nomGroupe: '',
    pseudo6: '',
    handleChange: () => {}
  }

  async componentWillMount() {

    let copy = []
    let list = await contractInstance.getGroupesPerAddress()
    for (let i=0; i<list.length; i++){
      copy.push(await contractInstance.getNomGroupe(list[i]))
    }

    let copy2 = []
    let list2 = await contractInstance.getOwnedGroupe()
    for (let j=0; j<list2.length; j++){
      copy2.push(await contractInstance.getNomGroupe(list2[j]))
    }

    this.setState({
      getGroupesPerAddress : copy,
      getAdminGroups : copy2
    })

  }

  async _getMembresGroupe() {
      let copy = []
      let list = await contractInstance.getMembres(this.props.nomGroupe)
      for (let i=0; i<list.length; i++){
        copy.push(await contractInstance.getNomMembre(list[i]))
      }
      this.setState({
          getMembres : copy
      })
  }

  async _membreInfo() {

    this.setState({

                    getReceptions: parseInt(await contractInstance.getReceptions(this.props.pseudo6),10),
                    getDonnations: parseInt(await contractInstance.getDonnations(this.props.pseudo6),10),
                    getMontant: parseInt(await contractInstance.getMontant(this.props.pseudo6),10),
                    getEncours: parseInt(await contractInstance.getEncours(this.props.pseudo6),10),
                    getAddresse : await contractInstance.getAddresse(this.props.pseudo6),
                    getDescription: await contractInstance.getDescription(this.props.pseudo6)})

  }

  render() {

    return (

      <div className="table-responsive w3-card-4">
        <table className="table table-bordered w3-container background-color: #80ced6">
          <thead>
            <tr className="w3-theme-d4">
              <th>RECHERCHER UNE DEMANDE</th>
            </tr>
          </thead>
            <tbody>
      <tr>
        <td className="w3-theme-l3">Liste des groupes dont vous etes membre</td>
        <td className="w3-theme-l4">{this.state.getGroupesPerAddress}</td>
      </tr>
      <tr>
        <td className="w3-theme-l3">Liste des groupes dont vous etes administrateur</td>
        <td className="w3-theme-l4">{this.state.getAdminGroups}</td>
      </tr>
      <tr className="w3-theme-l1">
        <td><strong>Choisir un groupe</strong></td>

        <td className="w3-theme-l3"><input type="text" onChange={this.props.handleChange} id={this.props.nomGroupe} placeholder="groupe"/></td>
      </tr>
      <tr className="w3-theme-l1">
        <td><button className="w3-button w3-black btn btn-primary btn-sm btn btn-primary btn-block" onClick={this._getMembresGroupe}>CHOISIR</button></td>
      </tr>
      <tr>
        <td className="w3-theme-l3">membres</td>
        <td className="w3-theme-l4">{this.state.getMembres}</td>
      </tr>
      <tr>
        <td className="w3-theme-l3">votre pseudo dans ce goupe</td>
        <td className="w3-theme-l4">{this.state.getMonPseudo}</td>
      </tr>
      <tr className="w3-theme-l1">
        <td><strong>selectionner un pseudo</strong></td>

          <td className="w3-theme-l3"><input type="text" onChange={this.props.handleChange} id={this.props.pseudo6} placeholder="pseudo"/></td>
      </tr>
      <tr className="w3-theme-l1">
        <td><button className="w3-button w3-black btn btn-primary btn-sm btn btn-primary btn-block" onClick={this._membreInfo}>CHOISIR</button></td>
      </tr>
      <tr>
        <th className="w3-theme-d1">Informations</th>
      </tr>
      <tr>
        <td className="w3-theme-l3">addresse</td>
        <td className="w3-theme-l4">{this.state.getAddresse}</td>
      </tr>
      <tr>
        <td className="w3-theme-l3">Il vous a deja donne</td>
        <td className="w3-theme-l4">{this.state.getReceptions}</td>
      </tr>
      <tr>
        <td className="w3-theme-l3">Vous lui avez deja donne</td>
        <td className="w3-theme-l4">{this.state.getDonnations}</td>
      </tr>
      <tr>
        <th className="w3-theme-d1">Etat du canal de demande</th>
      </tr>
      <tr>
        <td className="w3-theme-l3">montant</td>
        <td className="w3-theme-l4">{this.state.getMontant}</td>
      </tr>
      <tr>
        <td className="w3-theme-l3">en cours</td>
        <td className="w3-theme-l4">{this.state.getEncours}</td>
      </tr>
      <tr>
        <td className="w3-theme-l3">description</td>
        <td className="w3-theme-l4">{this.state.getDescription}</td>
      </tr>
  </tbody>
  </table>
    </div>

    );
  }
}
