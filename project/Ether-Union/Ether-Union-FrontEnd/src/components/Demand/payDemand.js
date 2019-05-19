import React, { Component } from 'react'
import contractInstance from '../../options'
import { TextField, Grid  } from "@material-ui/core"

export default class  payDemand extends Component {

  constructor() {
    super();
    this.state = {
      proposition: '',
      pseudo3: ''
    };
    this._payerCanal = this._payerCanal.bind(this)
  }

  handleChange = name => event => {
   this.setState({ [name]: event.target.value });
 };

  async _payerCanal() {
      await window.ethereum.enable()
    	await contractInstance.payerCanal(this.state.pseudo3, {value : parseInt(this.state.proposition,10)})
  }

  render() {

    return (

      <div className="table-responsive w3-card-4">
        <table className="table table-bordered">
          <thead>
          <tr className="w3-theme-d4">
            <th>PAYER UNE DEMANDE - Gagnez des tokens</th>
          </tr>
        </thead>
          <tbody>

          <tr>
            <td>
            <Grid container spacing={24}>
          <Grid item xs={12} md={6}>
              <TextField
                required
                name="Montant propose"
                label="Montant propose"
                fullWidth
                type="number"
                value={this.state.proposition}
                onChange={this.handleChange('proposition')}
              />
              </Grid>
          <Grid item xs={12} md={6}>
                  <TextField
                    required
                    name="Pseudo du demandeur"
                    label="Pseudo du demandeur"
                    fullWidth
                    value={this.state.pseudo3}
                    onChange={this.handleChange('pseudo3')}
                  />
</Grid>
</Grid>

              </td>
          </tr>
          <tr>
            <td>
            <button className="btn-primary btn-block" onClick={this._payerCanal}>PAYER</button>
            </td>
            </tr>


  </tbody>
  </table>
    </div>

    );

  }
}
