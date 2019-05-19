import React, { Component } from 'react'
import contractInstance from '../../options'
import { TextField } from "@material-ui/core"

export default class  SoldeDemand extends Component {

  constructor() {
    super();
    this.state = {
			getPrixLottery: 0,
      getSuperCagnotte: 0,
      getTicketsLeft: 0,
      getEndGame: 0,
      getBlockStop: 0,
      getNumCagnotte: 0,
      getCagnotte: 0,
      getNbGagnants: 0,
      balanceOf: 0,
      getWithdrawBlock: 0,
      getSaveBlock: 0,
      getStateGame : '',
      prediction: 0,
      getBlock: 0,
      pseudo4: ''
		};

    this._fermetureCanal = this._fermetureCanal.bind(this)
  }

  handleChange = name => event => {
   this.setState({ [name]: event.target.value });
 };

  async _fermetureCanal() {
      await window.ethereum.enable()
    	await contractInstance.fermetureCanal(this.state.pseudo4)
  }

  render() {

    return (

      <div className="table-responsive w3-card-4">
        <table className="table table-bordered">
          <thead>
            <tr className="w3-theme-d4">
              <th>SOLDER UNE DEMANDE</th>
            </tr>
          </thead>
            <tbody>
            <tr>
              <td>
                    <TextField
                      required
                      name="Pseudo de votre canal a solder"
                      label="Pseudo de votre canal a solder"
                      fullWidth
                      value={this.state.pseudo4}
                      onChange={this.handleChange('pseudo4')}
                    />

                </td>
            </tr>
            <tr>
              <td>
              <button className="btn-primary btn-block" onClick={this._fermetureCanal}>SOLDER</button>
              </td>
              </tr>


  </tbody>
  </table>
    </div>

    );

  }
}
