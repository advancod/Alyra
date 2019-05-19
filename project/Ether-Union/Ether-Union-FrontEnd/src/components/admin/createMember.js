import React, { Component } from 'react'
import contractInstance from '../../options'
import { TextField, Grid } from "@material-ui/core"

export default class CreateMember extends Component {

  constructor() {
    super();
    this.state = {
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

    this.setState({
                    payable: parseInt(await contractInstance.getPriceMember(),10)})

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
                <Grid item xs={12} md={6}>
                    <TextField
                      name="Adresse du nouveau membre"
                      label="Adresse du nouveau membre"
                      fullWidth
                      value={this.state.membre}
                      onChange={this.handleChange('membre')}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                      required
                      name="Pseudo du nouveau membre"
                      label="Pseudo du nouveau membre"
                      fullWidth
                      value={this.state.pseudo1}
                      onChange={this.handleChange('pseudo1')}
                    />
                    </Grid>
                  <Grid item xs={12} md={6}>
                      <TextField
                        required
                        name="Groupe concerné"
                        label="Groupe concerné"
                        fullWidth
                        value={this.state.groupe}
                        onChange={this.handleChange('groupe')}
                      />
                      </Grid>
                    </Grid>

                </td>
            </tr>
            <tr>
              <td>
              <button className="btn-primary btn-block" onClick={this._ajouterMembre}>AJOUTER</button>
              </td>
              </tr>
  </tbody>
  </table>
    </div>

    );
  }
}
