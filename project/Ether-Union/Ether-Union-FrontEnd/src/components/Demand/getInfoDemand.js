import React, { Component } from 'react'
import contractInstance from '../../options'
import PropTypes from "prop-types"

class GetInfoDemand extends Component {
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
      getReceptions: 0,
      getDonnations: 0,
      getContratCible: '0x0',
      getMontant: 0,
      getEncours: 0,
      getDescription: 0,
      getAddresse: '0x0'
		};
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

  async _getGroupesPerAddress() {
      let copy = []
      let i = 0
      let list = await contractInstance.getGroupesPerAddress()
      for (i=0; i<list.length; i++){
        copy.push(await contractInstance.getNomGroupe(list[i]))
      }
      this.setState({
        getGroupesPerAddress : copy
      })
  }

  async _getOwnedGroupesPerAddress() {
      let copy = []
      let i = 0
      let list = await contractInstance.getOwnedGroupe()
      for (i=0; i<list.length; i++){
        copy.push(await contractInstance.getNomGroupe(list[i]))
      }
      this.setState({
        getAdminGroups : copy
      })
  }

  async _getMembresGroupe() {
      let copy = []
      let i = 0
      let list = await contractInstance.getMembres(this.props.nomGroupe)
      for (i=0; i<list.length; i++){
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
                    getContratCible: parseInt(await contractInstance.getContratCible(this.props.pseudo6),10),
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
        <td><button className="w3-button w3-black btn btn-primary btn-sm btn btn-primary btn-block" onClick={this._getMembresGroupe()}>choisir</button></td>
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
        <td><button className="w3-button w3-black btn btn-primary btn-sm btn btn-primary btn-block" onClick={this._membreInfo()}>choisir</button></td>
      </tr>
      <tr>
        <th className="w3-theme-d1">Informations</th>
      </tr>
      <tr>
        <td className="w3-theme-l3">groupe</td>
        <td className="w3-theme-l4">{this.state.getGroupe}</td>
      </tr>
      <tr>
        <td className="w3-theme-l3">pseudo</td>
        <td className="w3-theme-l4">{this.state.getMembre}</td>
      </tr>
      <tr>
        <td className="w3-theme-l3">addresse</td>
        <td className="w3-theme-l4">{this.state.pseudo}</td>
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
        <td className="w3-theme-l3">contrat cible (optionnel)</td>
        <td className="w3-theme-l4">{this.state.getContratCible}</td>
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

export default GetInfoDemand;
