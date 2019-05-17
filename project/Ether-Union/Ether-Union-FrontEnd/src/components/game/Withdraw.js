import React, { Component } from 'react'
import contractInstance from '../../options'

class Withdraw extends Component {
  constructor() {
    super();
    this.state = {
      gains: 0
		};

  }

  async componentDidMount() {

    this.setState({ gains: parseInt(await contractInstance.getGains(),10) })
  }

  async _withdrawGains() {
    //  await ethereum.enable()
    //	await contractInstance.withdrawGains()
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
              <td>mes gains</td>
              <td className="w3-theme-l3"></td>
            </tr>

            <tr>
              <td><button className="w3-button w3-black btn btn-primary btn-sm btn btn-primary btn-block" onClick={this._withdrawGains()}>recuperer</button></td>
            </tr>
      </tbody>
      </table>
      </div>

    );
  }
}

export default Withdraw;
