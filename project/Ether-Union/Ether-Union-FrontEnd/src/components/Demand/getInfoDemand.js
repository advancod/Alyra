import React, { Component } from 'react'
import contractInstance from '../../options'
import PropTypes from "prop-types"

class GetInfoDemand extends Component {
  constructor() {
    super();
    this.state = {
			getGroupesPerAddress: '',
      getAdminGroups: '',
      getMembres: '',
      getMonPseudo: '',
      getGroupe: '',
      getMembre: '',
      pseudo: '',
      getReceptions: '',
      getDonnations: '',
      getContratCible: '',
      getMontant: '',
      getEncours: '',
      getDescription: ''
		};
  }

  static propTypes = {
    nomGroupe: PropTypes.string,
    pseudo1: PropTypes.string,
    groupe: PropTypes.string,
    handleChange: PropTypes.func
  }

  static defaultProps = {
    nomGroupe: '',
    pseudo6: '',
    handleChange: () => {}
  }

  async componentDidMount() {

    this.setState({

                    getReceptions: parseInt(await contractInstance.getReceptions(this.props.pseudo6),10),
                    getDonnations: parseInt(await contractInstance.getDonnations(this.props.pseudo6),10),
                    getContratCible: parseInt(await contractInstance.getContratCible(this.props.pseudo6),10),
                    getMontant: parseInt(await contractInstance.getMontant(this.props.pseudo6),10),
                    getEncours: parseInt(await contractInstance.getEncours(this.props.pseudo6),10),
                    getDescription: await contractInstance.getDescription(this.props.pseudo6)})
  }

  render() {

    const { nomGroupe, pseudo6 } = this.props

    return (

      <div class="table-responsive w3-card-4">
        <table class="table table-bordered w3-container background-color: #80ced6">
          <thead>
            <tr class="w3-theme-d4">
              <th>RECHERCHER UNE DEMANDE</th>
            </tr>
          </thead>
            <tbody>
      <tr>
        <td class="w3-theme-l3">Liste des groupes dont vous etes membre</td>
        <td class="w3-theme-l4">{this.state.getGroupesPerAddress}</td>
      </tr>
      <tr>
        <td class="w3-theme-l3">Liste des groupes dont vous etes administrateur</td>
        <td class="w3-theme-l4">{this.state.getAdminGroups}</td>
      </tr>
      <tr class="w3-theme-l1">
        <td><strong>Choisir un groupe</strong></td>
        <td class="w3-theme-l3"><input type="text" value={nomGroupe} id="nomGroupe"  placeholder="groupe"/></td>
      </tr>
      <tr class="w3-theme-l1">
        <td><button class="w3-button w3-black btn btn-primary btn-sm btn btn-primary btn-block" onclick="_getMembresGroupe()">choisir</button></td>
      </tr>
      <tr>
        <td class="w3-theme-l3">membres</td>
        <td class="w3-theme-l4">{this.state.getMembres}</td>
      </tr>
      <tr>
        <td class="w3-theme-l3">votre pseudo dans ce goupe</td>
        <td class="w3-theme-l4">{this.state.getMonPseudo}</td>
      </tr>
      <tr class="w3-theme-l1">
        <td><strong>selectionner un pseudo</strong></td>
        <td class="w3-theme-l3"><input type="text" value={pseudo6} id="pseudo6" placeholder="pseudo"/></td>
      </tr>
      <tr class="w3-theme-l1">
        <td><button class="w3-button w3-black btn btn-primary btn-sm btn btn-primary btn-block" onclick="_membreInfo()">choisir</button></td>
      </tr>
      <tr>
        <th class="w3-theme-d1">Informations</th>
      </tr>
      <tr>
        <td class="w3-theme-l3">groupe</td>
        <td class="w3-theme-l4">{this.state.getGroupe}</td>
      </tr>
      <tr>
        <td class="w3-theme-l3">pseudo</td>
        <td class="w3-theme-l4">{this.state.getMembre}</td>
      </tr>
      <tr>
        <td class="w3-theme-l3">addresse</td>
        <td class="w3-theme-l4">{this.state.pseudo}</td>
      </tr>
      <tr>
        <td class="w3-theme-l3">Il vous a deja donne</td>
        <td class="w3-theme-l4">{this.state.getReceptions}</td>
      </tr>
      <tr>
        <td class="w3-theme-l3">Vous lui avez deja donne</td>
        <td class="w3-theme-l4">{this.state.getDonnations}</td>
      </tr>
      <tr>
        <th class="w3-theme-d1">Etat du canal de demande</th>
      </tr>
      <tr>
        <td class="w3-theme-l3">contrat cible (optionnel)</td>
        <td class="w3-theme-l4">{this.state.getContratCible}</td>
      </tr>
      <tr>
        <td class="w3-theme-l3">montant</td>
        <td class="w3-theme-l4">{this.state.getMontant}</td>
      </tr>
      <tr>
        <td class="w3-theme-l3">en cours</td>
        <td class="w3-theme-l4">{this.state.getEncours}</td>
      </tr>
      <tr>
        <td class="w3-theme-l3">description</td>
        <td class="w3-theme-l4">{this.state.getDescription}</td>
      </tr>
  </tbody>
  </table>
    </div>

    );
  }
}

export default GetInfoDemand;
