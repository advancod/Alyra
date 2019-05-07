import React, { Component } from 'react'
import contractInstance from '../../options'

class Withdraw extends Component {
  constructor() {
    super();
    this.state = {
      gains: ''
		};
  }

  async componentDidMount() {

    this.setState({ gains: parseInt(await contractInstance.getGains(),10) })
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
              <td className="w3-theme-l3">{this.state.gains}</td>
            </tr>
            <tr>
              <td class="w3-theme-l2"><button class="w3-button w3-black btn btn-primary btn-smbtn btn-primary btn-block" onclick="">recuperer</button></td>
            </tr>
      </tbody>
      </table>
      </div>

    );
  }
}

export default Withdraw;
