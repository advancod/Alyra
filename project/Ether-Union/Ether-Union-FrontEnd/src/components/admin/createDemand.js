import React, { Component } from 'react'
import contractInstance from '../../options'
import { TextField, Grid } from "@material-ui/core"
import InputAdornment from '@material-ui/core/InputAdornment';

export default class CreateDemand extends Component {

  constructor() {
    super();
    this.state = {
      pseudo2: '',
      montant: '',
      description: ''
		};
    this._demander = this._demander.bind(this)
  }

  handleChange = name => event => {
   this.setState({ [name]: event.target.value });
 };

  async _demander() {
      await window.ethereum.enable()
    	await contractInstance.demander(this.state.montant,this.state.pseudo2,this.state.description)
  }

  render() {


    return (

      <div className="table-responsive w3-card-4">
        <table className="table table-bordered">
          <thead>
            <tr className="w3-theme-d4">
              <th>CREER UNE DEMANDE</th>
            </tr>
          </thead>
            <tbody>
            <tr>
              <td>
              <Grid container spacing={24}>
                <Grid item xs={12} md={4}>
                    <TextField
                      variant="outlined"
                      required
                      label="PSEUDONYME"
                      fullWidth
                      value={this.state.pseudo2}
                      onChange={this.handleChange('pseudo2')}
                      helperText="Entrez votre canal de demande à ouvrir"
                    />
                </Grid>
                  <Grid item xs={12} md={4}>
                      <TextField
                        variant="outlined"
                        label="DESCRIPTION"
                        fullWidth
                        value={this.state.description}
                        onChange={this.handleChange('description')}
                        helperText="Expliquez brievement votre besoin"
                      />
                      </Grid>
                      <Grid item xs={12} md={4}>
                          <TextField
                            variant="outlined"
                            required
                            label="MONTANT"
                            fullWidth
                            type="number"
                            value={this.state.montant}
                            onChange={this.handleChange('montant')}
                            helperText="Indiquez le montant de la somme désirée"
                            InputProps={{
                              endAdornment: <InputAdornment position="end">Wei</InputAdornment>,
                            }}
                          />

                          </Grid>

                          <Grid item xs={12} md={12}>
                            <button className="btn-primary btn-block" onClick={this._demander}>EMETTRE</button>
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
