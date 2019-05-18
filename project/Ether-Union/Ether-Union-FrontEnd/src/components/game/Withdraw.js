import React, { Component } from 'react'
import contractInstance from '../../options'

class Withdraw extends Component {
  constructor() {
    super();
    this.state = {
      gains: 0,
      getNbGagnants: 0
		};
    this._withdrawGains = this._withdrawGains.bind(this)

  }

  async componentDidMount() {

    this.setState({
      getNbGagnants: parseInt(await contractInstance.getNbGagnants(),10),
      gains: parseInt(await contractInstance.getGains(),10) })
  }



  async _withdrawGains() {
      await window.ethereum.enable()
    	await contractInstance.withdrawGains()
  }

  render() {

    return (

      <div className="table-responsive w3-card-4">
      <table className="table table-bordered">
        <thead>
          <tr className="w3-theme-d4">
            <th>RECUPERER SES GAINS</th>
          </tr>
        </thead>
          <tbody>
            <tr className="w3-theme-l2">
              <td>vos gains</td>
              <td className="w3-theme-l3">{this.state.gains}</td>
            </tr>
            <tr className="w3-theme-l2">
              <td>nombre de gagnants</td>
              <td className="w3-theme-l3">{this.state.getNbGagnants}</td>
            </tr>
            <tr className="w3-theme-l2">
              <td><button className="w3-button w3-black btn btn-primary btn-sm btn btn-primary btn-block" onClick={this._withdrawGains}>RECUPERER</button></td>
            </tr>
      </tbody>
      </table>
      </div>

    );
  }
}

export default Withdraw;
