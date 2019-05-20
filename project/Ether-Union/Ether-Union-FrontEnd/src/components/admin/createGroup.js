import React, { Component } from 'react'
import contractInstance from '../../options'
import { TextField, Grid } from "@material-ui/core"

export default class CreateGroup extends Component {

  constructor() {
    super();
    this.state = {
      payable: 0,
      nom: '',
      pseudo: ''
		};
    this._creerGroupe = this._creerGroupe.bind(this)
  }

  handleChange = name => event => {
   this.setState({ [name]: event.target.value });
 };

  async componentDidMount() {

    this.setState({
                    payable: parseInt(await contractInstance.getPriceGroup(),10)})

  }

  async _creerGroupe() {

      await window.ethereum.enable()
    	await contractInstance.creerGroupe(this.state.nom,this.state.pseudo, {value : this.state.payable})
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
                      label="Nom du nouveau groupe à créer"
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
                      label="Votre pseudonyme"
                      fullWidth
                      value={this.state.pseudo}
                      onChange={this.handleChange('pseudo')}
                      helperText="Votre pseudonyme en tant qu'administrateur de ce groupe"
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
