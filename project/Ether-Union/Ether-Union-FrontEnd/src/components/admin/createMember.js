import React, { Component } from 'react'
import contractInstance from '../../options'
import PropTypes from "prop-types"

export default class CreateMember extends Component {

  constructor() {
    super();
    this.state = {
      payable: 0
    };
    this._ajouterMembre = this._ajouterMembre.bind(this)
  }

  static propTypes = {
    membre: PropTypes.string,
    pseudo1: PropTypes.string,
    groupe: PropTypes.string,
    handleChange: PropTypes.func
  }

  static defaultProps = {
    membre: '',
    pseudo1: '',
    groupe: '',
    handleChange: () => {}
  }

  async componentDidMount() {

    this.setState({
                    payable: parseInt(await contractInstance.getPriceMember(),10)})

  }

  async _ajouterMembre() {
      await window.ethereum.enable()
     	await contractInstance.ajouterMembre(this.props.membre,this.props.groupe,this.props.pseudo1, {value : this.state.payable})
  }

  render() {

    return (

      <div className="table-responsive w3-card-4">
        <table className="table table-bordered">
          <thead>
            <tr className="w3-theme-d4">
              <th>AJOUTER UN MEMBRE A UN GROUPE</th>
            </tr>
          </thead>
            <tbody>
            <tr className="w3-theme-l2">
              <td><strong>addresse</strong></td>

              <td className="w3-theme-l3"><input type="text" onChange={this.props.handleChange} id={this.props.membre} placeholder="membre"/></td>
            </tr>
            <tr className="w3-theme-l2">
              <td><strong>pseudo</strong></td>

              <td className="w3-theme-l3"><input type="text" onChange={this.props.handleChange} id={this.props.pseudo1} placeholder="pseudo"/></td>
            </tr>
            <tr className="w3-theme-l2">
              <td><strong>groupe</strong></td>
              <td className="w3-theme-l3"><input type="text" onChange={this.props.handleChange} id={this.props.groupe} placeholder="groupe"/></td>
            </tr>
            <tr className="w3-theme-l2">
              <td><button  className="w3-button w3-black btn btn-primary btn-sm btn btn-primary btn-block" onClick={this._ajouterMembre}>AJOUTER</button></td>
            </tr>
  </tbody>
  </table>
    </div>

    );
  }
}
