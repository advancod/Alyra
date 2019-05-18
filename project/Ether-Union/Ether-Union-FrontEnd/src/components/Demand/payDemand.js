import React, { Component } from 'react'
import contractInstance from '../../options'
import PropTypes from "prop-types"

export default class  payDemand extends Component {

  constructor() {
    super();

    this._payerCanal = this._payerCanal.bind(this)
  }

  static propTypes = {
    pseudo3: PropTypes.string,
    proposition: PropTypes.number,
    handleChange: PropTypes.func
  }

  static defaultProps = {
    pseudo3: '',
    proposition: 0,
    handleChange: () => {}
  }

  async _payerCanal() {
      await window.ethereum.enable()
    	await contractInstance.payerCanal(this.props.pseudo, {value : parseInt(this.props.proposition,10)})
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
              <td><strong>pseudo du demandeur</strong></td>
              <td className="w3-theme-l3"><input type="text" onChange={this.props.handleChange} id={this.props.pseudo3} placeholder="pseudo"/></td>
            </tr>
            <tr className="w3-theme-l2">
              <td><strong>montant propose</strong></td>
              <td className="w3-theme-l3"><input type="text" onChange={this.props.handleChange} id={this.props.proposition} placeholder="montant"/></td>
            </tr>
            <tr className="w3-theme-l2">
              <td><button  className="w3-button w3-black btn btn-primary btn-sm btn btn-primary btn-block" onClick={this._payerCanal}>PAYER</button></td>
            </tr>

  </tbody>
  </table>
    </div>

    );

  }
}
