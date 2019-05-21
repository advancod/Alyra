import React, { Component } from 'react'
import contractInstance from '../../options'
import { TextField, Grid } from "@material-ui/core"
import MenuItem from '@material-ui/core/MenuItem';

export default class CreateMember extends Component {

  constructor() {
    super();
    this.state = {
      getAdminGroups: [],
      payable: 0,
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
                    payable: parseInt(await contractInstance.getPriceMember(),10),
                    getAdminGroups : copy2})

  }

  async _ajouterMembre() {
      await window.ethereum.enable()
     	await contractInstance.ajouterMembre(this.state.membre,this.state.groupe,this.state.pseudo1, {value : this.state.payable})
  }

  render() {

    return (

      <div className="table-responsive w3-card-4">
        <table className="table table-bordered">
          <thead>
            <tr className="w3-theme-d4">
              <th>AJOUTER UN MEMBRE A UN GROUPE</th>
            </tr>
          </thead>
            <tbody>
            <tr>
              <td>
              <Grid container spacing={24}>
                <Grid item xs={12} md={4}>
                  <TextField
                    select
                    label="CHOISISSEZ UN GROUPE"
                    fullWidth
                    value={this.state.groupe}
                    onChange={this.handleChange('groupe')}
                    helperText="Vous êtes admnistrateur de ce groupe"
                  >
                  {this.state.getAdminGroups.map(option => (
                    <MenuItem value={option} key={option}>
                      {option}
                    </MenuItem>
                  ))}
                  </TextField>
                  </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        variant="outlined"
                        required
                        label="ADRESSE DU NOUVEAU MEMBRE"
                        fullWidth
                        value={this.state.membre}
                        onChange={this.handleChange('membre')}
                        helperText="Clé publique ethereum du membre à ajouter"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                      variant="outlined"
                      required
                      label="PSEUDONYME DU NOUVEAU MEMBRE"
                      fullWidth
                      value={this.state.pseudo1}
                      onChange={this.handleChange('pseudo1')}
                      helperText="Ce pseudonyme doit être unique"
                    />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <button className="btn-primary btn-block" onClick={this._ajouterMembre}>AJOUTER</button>
                    </Grid>
                    </Grid>

                </td>
            </tr>
  </tbody>
  </table>
    </div>

    );
  }
}
