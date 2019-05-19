import React, { Component } from 'react'
import contractInstance from '../../options'
import { TextField, Grid } from "@material-ui/core"

export default class CreateDemand extends Component {

  constructor() {
    super();
    this.state = {
      payable: 0,
      pseudo2: '',
      montant: 0,
      description: ''
		};
    this._demander = this._demander.bind(this)
  }

  handleChange = name => event => {
   this.setState({ [name]: event.target.value });
 };

  async componentDidMount() {

    this.setState({
                    payable: parseInt(await contractInstance.getPriceChannel(),10)})

  }

  async _demander() {
      await window.ethereum.enable()
    	await contractInstance.demander(this.state.montant,this.state.pseudo,this.state.contrat,this.state.description, {value : this.state.payable})
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
            <tr className="w3-theme-l2">
    <td><strong>Montant demande</strong></td>
    <td className="w3-theme-l3"><input type="number" onChange={this.handleChange('montant')} id={this.state.montant} placeholder="montant"/></td>
  </tr>
            <tr>
              <td>
              <Grid container spacing={24}>
                <Grid item xs={12} md={6}>
                    <TextField
                      required
                      name="pseudo"
                      label="pseudo"
                      fullWidth
                      value={this.state.pseudo2}
                      onChange={this.handleChange('pseudo2')}
                    />
                </Grid>

                  <Grid item xs={12} md={6}>
                      <TextField
                        required
                        name="description"
                        label="description"
                        fullWidth
                        value={this.state.description}
                        onChange={this.handleChange('description')}
                      />
                      </Grid>
                    </Grid>

                </td>
            </tr>
            <tr>
              <td>
              <button className="btn-primary btn-block" onClick={this._demander}>EMETTRE</button>
              </td>
              </tr>


  </tbody>
  </table>
    </div>

    );
  }
}
