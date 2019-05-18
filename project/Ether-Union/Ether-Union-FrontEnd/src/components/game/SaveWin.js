import React, { Component } from 'react'
import contractInstance from '../../options'

export default class  SaveWin extends Component {

  constructor() {
    super();
    this.state = {

      getCagnotte: 0,
      getPrediction: 0
		};

    this._saveWin = this._saveWin.bind(this)
  }

  async componentDidMount() {

    this.setState({
                    getCagnotte: parseInt(await contractInstance.getCagnotte(),10),
                    getPrediction: parseInt(await contractInstance.getPrediction(),10) })
  }

  async _saveWin() {
      await window.ethereum.enable()
    	await contractInstance.saveWin()
  }

  render() {

    return (

      <div className="table-responsive w3-card-4">
      <table className="table table-bordered">
        <thead>
          <tr className="w3-theme-d4">
            <th>DECLARER SES GAINS</th>
          </tr>
        </thead>
          <tbody>
            <tr className="w3-theme-l2">
              <td>votre prediction</td>
              <td className="w3-theme-l3">{this.state.getPrediction}</td>
            </tr>
            <tr className="w3-theme-l2">
              <td>cagnote</td>
              <td className="w3-theme-l3">{this.state.getCagnotte}</td>
            </tr>
            <tr className="w3-theme-l2">
              <td><button className="w3-button w3-black btn btn-primary btn-sm btn btn-primary btn-block" onClick={this._saveWin}>DECLARER</button></td>
            </tr>

      </tbody>
      </table>
      </div>

    );
  }
}
