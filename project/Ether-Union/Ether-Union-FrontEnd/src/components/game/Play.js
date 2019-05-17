import React, { Component } from 'react'
import contractInstance from '../../options'
import PropTypes from "prop-types"

const styles = {
  divider: {
    marginBottom: 24
  },

  actions: {
    justifyContent: 'flex-end'
  }
}

class Play extends Component {
  constructor() {
    super();
    this.state = {
			getPrixLottery: 0,
      getSuperCagnotte: 0,
      getTicketsLeft: 0,
      getEndGame: 0,
      getBlockStop: 0,
      getNumCagnotte: 0,
      getCagnotte: 0,
      getNbGagnants: 0,
      balanceOf: 0,
      getBlock: 0
		};
  }

  static propTypes = {
    prediction: PropTypes.number,
    handleChange: PropTypes.func
  }

  static defaultProps = {
    prediction: 0,
    handleChange: () => {}
  }

  async componentDidMount() {
    this.setState({ getPrixLottery: parseInt(await contractInstance.getPrixLottery(),10),
                    getSuperCagnotte: parseInt(await contractInstance.getSuperCagnotte(),10),
                    getEndGame: parseInt(await contractInstance.getEndGame(),10),
                    getBlockStop: parseInt(await contractInstance.getBlockStop(),10),
                    getNumCagnotte: parseInt(await contractInstance.getNumCagnotte(),10),
                    getCagnotte: parseInt(await contractInstance.getCagnotte(),10),
                    getNbGagnants: parseInt(await contractInstance.getNbGagnants(),10),
                    balanceOf: parseInt(await contractInstance.getSolde(),10),
                    getBlock: parseInt(await contractInstance.getBlock(),10)})
  }

  async _jouerLottery() {
    //  await ethereum.enable()
    //	await contractInstance.play(this.props.prediction)
  }

  render() {

    return (

      <div className="table-responsive w3-card-4">
      <table className="table table-bordered">
        <thead>
          <tr className="w3-theme-d4">
            <th>JOUEZ A NOTRE JEUX ET GAGNEZ DES ETHERS</th>
          </tr>
        </thead>
          <tbody>
            <tr className="w3-theme-l2">
              <td>prix du ticket en token</td>
              <td className="w3-theme-l3">{this.state.getPrixLottery}</td>
            </tr>
          <tr className="w3-theme-l2">
            <td>bloc actuel</td>
            <td className="w3-theme-l3">{this.state.getBlock}</td>
          </tr>
          <tr className="w3-theme-l2">
            <td>bloc de fin du jeu</td>
            <td className="w3-theme-l3">{this.state.getEndGame}</td>
          </tr>
          <tr className="w3-theme-l2">
            <td>bloc de prediction</td>
            <td className="w3-theme-l3">{this.state.getBlockStop}</td>
          </tr>
          <tr className="w3-theme-l2">
            <td>cagnotte en ether</td>
            <td className="w3-theme-l3">{this.state.getSuperCagnotte}</td>
          </tr>
          <tr className="w3-theme-l2">
            <td>votre solde gimicoin</td>
            <td className="w3-theme-l3">{this.state.balanceOf}</td>
          </tr>
          <tr className="w3-theme-l2">
            <td><strong>votre prediction pour la cagnotte</strong></td>
            <td className="w3-theme-l3"><input type="text" onChange={this.props.handleChange} id={this.props.prediction} placeholder="montant"/></td>
          </tr>
          <tr className="w3-theme-l2">
            <td><button className="w3-button w3-black btn btn-primary btn-sm btn btn-primary btn-block" onClick={this._jouerLottery()}>jouer</button></td>
          </tr>
      </tbody>
      </table>
      </div>

    );
  }
}

export default Play;
