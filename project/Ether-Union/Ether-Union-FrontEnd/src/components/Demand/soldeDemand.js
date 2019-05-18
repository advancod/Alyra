import React, { Component } from 'react'
import contractInstance from '../../options'
import PropTypes from "prop-types"

export default class  SoldeDemand extends Component {

  constructor() {
    super();

    this._fermetureCanal = this._fermetureCanal.bind(this)
  }

  static propTypes = {
    pseudo4: PropTypes.string,
    handleChange: PropTypes.func
  }

  static defaultProps = {
    pseudo4: '',
    handleChange: () => {}
  }

  async _fermetureCanal() {
      await window.ethereum.enable()
    	await contractInstance.fermetureCanal(this.props.pseudo4)
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
            <tr className="w3-theme-l2">
              <td><strong>pseudo</strong></td>
              <td className="w3-theme-l3"><input type="text" onChange={this.props.handleChange} id={this.props.pseudo4} placeholder="pseudo"/></td>
            </tr>
            <tr className="w3-theme-l2">
              <td><button className="w3-button w3-black btn btn-primary btn-sm btn btn-primary btn-block" onClick={this._fermetureCanal}>SOLDER</button></td>
            </tr>


  </tbody>
  </table>
    </div>

    );

  }
}
