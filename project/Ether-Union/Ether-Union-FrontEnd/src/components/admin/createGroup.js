import React, { Component } from 'react'
import contractInstance from '../../options'
import { TextField, Grid } from "@material-ui/core"

export default class CreateGroup extends Component {

  constructor() {
    super();
    this.state = {
      nom: '',
      pseudo: ''
		};
    this._creerGroupe = this._creerGroupe.bind(this)
  }

  handleChange = name => event => {
   this.setState({ [name]: event.target.value });
 };

  async _creerGroupe() {

      await window.ethereum.enable()
    	await contractInstance.creerGroupe(this.state.nom,this.state.pseudo)
  }

  render() {


    return (

      <div className="table-responsive w3-card-4">
        <table className="table table-bordered">
          <thead>
            <tr className="w3-theme-d4">
              <th>CREER UN GROUPE</th>
            </tr>
          </thead>
            <tbody>
            <tr>
            <td>
              <Grid container spacing={24}>
                <Grid item xs={12} md={6}>
                    <TextField
                      variant="outlined"
                      required
                      label="NOM DU NOUVEAU GROUPE A CREER"
                      fullWidth
                      value={this.state.nom}
                      onChange={this.handleChange('nom')}
                      helperText="Ce nom doit être unique"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                      variant="outlined"
                      required
                      label="VOTRE PSEUDONYME DANS CE GROUPE"
                      fullWidth
                      value={this.state.pseudo}
                      onChange={this.handleChange('pseudo')}
                      helperText="Doit être unique"
                    />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <button className="btn-primary btn-block" onClick={this._creerGroupe}>PAYER</button>
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
