import React, { Component } from 'react'
import contractInstance from '../../options'
import { TextField } from "@material-ui/core"
import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
 container: {
   display: 'flex',
   flexWrap: 'wrap',
 },
 menu: {
   width: 200,
 },
});

class  GetInfoDemand extends Component {
  constructor() {
    super();
    this.state = {
			getGroupesPerAddress: [],
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

  }

  handleChange = name => event => {
   this.setState({ [name]: event.target.value });
 };

 async componentDidMount() {

   let copy = []
   let list = await contractInstance.getGroupesPerAddress()
   for (let i=0; i<list.length; i++){
     copy.push(await contractInstance.getNomGroupe(list[i]))
   }

   let copy2 = []
   let list2 = await contractInstance.getMembres(this.state.nomGroupe)
   for (let j=0; j<list2.length; j++){
     copy.push(await contractInstance.getNomMembre(list2[j]))
   }

   this.setState({
                   payable: parseInt(await contractInstance.getPriceMember(),10),
                   getMembres : copy,
                   getReceptions : parseInt(await contractInstance.getReceptions(this.state.pseudo6),10),
                   getDonnations : parseInt(await contractInstance.getDonnations(this.state.pseudo6),10),
                   getMontant : parseInt(await contractInstance.getMontant(this.state.pseudo6),10),
                   getEncours : parseInt(await contractInstance.getEncours(this.state.pseudo6),10),
                   getAddresse : await contractInstance.getAddresse(this.state.pseudo6),
                   getDescription : await contractInstance.getDescription(this.state.pseudo6),
                   getMonPseudo : await contractInstance.getPseudoInGroup(this.state.nomGroupe),
                   getGroupesPerAddress : copy})

 }


  render() {

    return (
<div>
      <div className="table-responsive w3-card-4">
        <table className="table table-bordered w3-container background-color: #80ced6">
          <thead>
            <tr className="w3-theme-d4">
              <th>RECHERCHER UNE DEMANDE</th>
            </tr>
          </thead>
            <tbody>

            <tr>
              <td>

            <TextField
          id="standard-select-currency"
          select
          label="Choisir un groupe"
          fullWidth
          value={this.state.nomGroupe}
          onChange={this.handleChange('groupe')}
          helperText="Please select your currency"
        >
          {this.state.getGroupesPerAddress.map(option => (
            <MenuItem value={option}>
              {option}
            </MenuItem>
          ))}
            </TextField>

          </td>

      </tr>

      <tr>
        <td>

      <TextField
    id="standard-select-currency"
    select
    label="Choisir un membre du groupe"
    fullWidth
    value={this.state.pseudo}
    onChange={this.handleChange('pseudo')}
    helperText="Please select your currency"
    >
    {this.state.getMembres.map(option => (
      <MenuItem value={option}>
        {option}
      </MenuItem>
    ))}
      </TextField>

    </td>

    </tr>

    </tbody>
    </table>
      </div>

      <div className="table-responsive w3-card-4">
        <table className="table table-bordered w3-container background-color: #80ced6">
          <thead>
            <tr className="w3-theme-d4">
              <th>INFORMATION</th>
            </tr>
          </thead>
            <tbody>

      <tr>
        <td className="w3-theme-l3">votre pseudo dans ce goupe</td>
        <td className="w3-theme-l4">{this.state.getMonPseudo}</td>
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
</div>
    );
  }
}

export default withStyles(styles)(GetInfoDemand)
