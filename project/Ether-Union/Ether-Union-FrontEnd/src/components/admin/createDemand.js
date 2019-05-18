import React, { Component } from 'react'
import contractInstance from '../../options'
import PropTypes from "prop-types"

export default class CreateDemand extends Component {

  constructor() {
    super();
    this.state = {
      payable: 0
		};
    this._demander = this._demander.bind(this)
  }

  static propTypes = {
    pseudo2: PropTypes.string,
    montant: PropTypes.number,
    description: PropTypes.string,
    handleChange: PropTypes.func
  }

  static defaultProps = {
    pseudo2: '',
    montant: 0,
    description: '',
    handleChange: () => {}
  }

  async componentDidMount() {

    this.setState({
                    payable: parseInt(await contractInstance.getPriceChannel(),10)})

  }

  async _demander() {
      await window.ethereum.enable()
    	await contractInstance.demander(this.props.montant,this.props.pseudo,this.props.contrat,this.props.description, {value : this.state.payable})
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
                <td><strong>pseudo</strong></td>

                <td className="w3-theme-l3"><input type="text" onChange={this.props.handleChange} id={this.props.pseudo2} placeholder="pseudo"/></td>
              </tr>
              <tr className="w3-theme-l2">
                <td><strong>montant</strong></td>

                <td className="w3-theme-l3"><input type="text" onChange={this.props.handleChange} id={this.props.montant} placeholder="montant"/></td>
              </tr>
              <tr className="w3-theme-l2">
                <td><strong>description</strong></td>
                <td className="w3-theme-l3"><input type="text" onChange={this.props.handleChange} id={this.props.description} placeholder="description"/></td>
              </tr>
              <tr className="w3-theme-l2">
                <td><button  className="w3-button w3-black btn btn-primary btn-sm btn btn-primary btn-block" onClick={this._demander}>EMETTRE</button></td>
              </tr>


  </tbody>
  </table>
    </div>

    );
  }
}
