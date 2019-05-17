import React, { Component } from 'react'
import contractInstance from '../../options'
import PropTypes from "prop-types"

class CreateGroup extends Component {

  static propTypes = {
    nom: PropTypes.string,
    pseudo: PropTypes.string,
    handleChange: PropTypes.func
  }

  static defaultProps = {
    nom: '',
    pseudo: '',
    handleChange: () => {}
  }

  async _creerGroupe() {
    //  await ethereum.enable()
    //	await contractInstance.creerGroupe(this.props.nom,this.props.pseudo, {value : contractInstance.getPriceGroup()})
  }

  render() {


    return (

      <div className="table-responsive w3-card-4">
        <table className="table table-bordered">
          <thead>
            <tr className="w3-theme-d4">
              <th>CREER UN GROUPE</th>
            </tr>
          </thead>
            <tbody>
              <tr className="w3-theme-l2">
                <td><strong>nom du groupe</strong></td>

                <td className="w3-theme-l3"><input type="text" onChange={this.props.handleChange} id={this.props.nom} placeholder="nom"/></td>
              </tr>
              <tr className="w3-theme-l2">
                <td><strong>votre pseudo dans le groupe</strong></td>

                <td className="w3-theme-l3"><input type="text" onChange={this.props.handleChange} id={this.props.pseudo} placeholder="pseudo"/></td>
              </tr>
              <tr>
                <td><button className="w3-button w3-black btn btn-primary btn-smbtn btn-primary btn-block" onClick={this._creerGroupe()}>creer</button></td>
              </tr>

  </tbody>
  </table>
    </div>

    );
  }
}

export default CreateGroup;
