import React, { Component } from 'react'
import contractInstance from '../../options'
import { TextField } from "@material-ui/core"

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

          <tr className="w3-theme-l2">
  <td><strong>Montant propose</strong></td>
  <td className="w3-theme-l3"><input type="number" onChange={this.handleChange('proposition')} id={this.state.proposition} placeholder="proposition"/></td>
</tr>

          <tr>
            <td>

                  <TextField
                    required
                    name="Pseudo du demandeur"
                    label="Pseudo du demandeur"
                    fullWidth
                    value={this.state.pseudo3}
                    onChange={this.handleChange('pseudo3')}
                  />


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
