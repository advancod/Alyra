import React, { Component } from 'react'
import contractInstance from '../../options'
import { TextField } from "@material-ui/core"

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
      getReceptions: 0,
      getDonnations: 0,
      getMontant: 0,
      getEncours: 0,
      getDescription: '',
      nomGroupe: '',
      pseudo6: '',
      getAddresse: ''
		};
    this._membreInfo = this._membreInfo.bind(this)
    this._getMembresGroupe = this._getMembresGroupe.bind(this)
  }

  handleChange = name => event => {
   this.setState({ [name]: event.target.value });
 };

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
      let list = await contractInstance.getMembres(this.state.nomGroupe)
      for (let i=0; i<list.length; i++){
        copy.push(await contractInstance.getNomMembre(list[i]))
      }
      this.setState({
          getMembres : copy
      })
  }

  async _membreInfo() {

    let getReceptions = parseInt(await contractInstance.getReceptions(this.state.pseudo6),10)
    let getDonnations = parseInt(await contractInstance.getDonnations(this.state.pseudo6),10)
    let getMontant = parseInt(await contractInstance.getMontant(this.state.pseudo6),10)
    let getEncours = parseInt(await contractInstance.getEncours(this.state.pseudo6),10)
    let getAddresse = await contractInstance.getAddresse(this.state.pseudo6)
    let getDescription = await contractInstance.getDescription(this.state.pseudo6)
    let getMonPseudo = await contractInstance.getPseudoInGroup(this.state.nomGroupe)

    this.setState({

                    getReceptions: getReceptions,
                    getDonnations: getDonnations,
                    getMontant: getMontant,
                    getEncours: getEncours,
                    getAddresse : getAddresse,
                    getDescription: getDescription,
                    getMonPseudo: getMonPseudo})

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
      <tr>
        <td>

              <TextField
                required
                name="Choisir un groupe"
                label="Choisir un groupe"
                fullWidth
                value={this.state.nomGroupe}
                onChange={this.handleChange('nomGroupe')}
              />

          </td>
      </tr>
      <tr>
        <td>
        <button className="btn-primary btn-block" onClick={this._getMembresGroupe}>CHOISIR</button>
        </td>
        </tr>
      <tr>
        <td className="w3-theme-l3">membres</td>
        <td className="w3-theme-l4">{this.state.getMembres}</td>
      </tr>
      <tr>
        <td className="w3-theme-l3">votre pseudo dans ce goupe</td>
        <td className="w3-theme-l4">{this.state.getMonPseudo}</td>
      </tr>
      <tr>
        <td>

              <TextField
                required
                name="Choisir un membre"
                label="Choisir un membre"
                fullWidth
                value={this.state.pseudo6}
                onChange={this.handleChange('pseudo6')}
              />

          </td>
      </tr>
      <tr>
        <td>
        <button className="btn-primary btn-block" onClick={this._membreInfo}>CHOISIR</button>
        </td>
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
