import React from 'react'
import PropTypes from "prop-types"

class Play extends React.Component {

  static propTypes = {
    prediction: PropTypes.string,
    quantite: PropTypes.string,
    handleChange: PropTypes.func
  }

  static defaultProps = {
    quantite: '',
    prediction: '',
    handleChange: () => {}
  }

  render() {

    return (

      <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>JOUEZ A NOTRE JEUX ET GAGNEZ DES ETHERS</th>
          </tr>
        </thead>
          <tbody>
            <tr>
              <td>prix du ticket en token</td>
              <td>{this.props.getPrixLottery}</td>
            </tr>
          <tr>
            <td>tickets restants</td>
            <td>{this.props.getTicketsLeft}</td>
          </tr>
          <tr>
            <td>bloc actuel</td>
            <td>{this.props.getBlock}</td>
          </tr>
          <tr>
            <td>bloc de fin du jeu</td>
            <td>{this.props.getBlockStop}</td>
          </tr>
          <tr>
            <td>bloc de prediction</td>
            <td>{this.props.getEndGame}</td>
          </tr>
          <tr>
            <td>cagnotte en ether</td>
            <td>{this.props.getSuperCagnotte}</td>
          </tr>
          <tr>
            <td>votre solde gimicoin</td>
            <td>{this.props.balanceOf}</td>
          </tr>
          <tr>
            <td><strong>votre prediction pour la cagnotte</strong></td>
            <td><input type="text" onChange={this.props.handleChange} id={this.props.prediction} placeholder="montant"/></td>
          </tr>
          <tr>
            <td><strong>nombre de tickets a jouer (1 à 10)</strong></td>
            <td><input type="text" onChange={this.props.handleChange} id={this.props.quantite} placeholder="quantite"/></td>
          </tr>
          <tr>
            <td><button class="w3-button w3-black btn btn-primary btn-sm btn btn-primary btn-block" onclick={this.props._prediction(this.props.prediction,this.props.quantite)}>jouer</button></td>
          </tr>
      </tbody>
      </table>
      </div>

    );
  }
}

export default Play;
