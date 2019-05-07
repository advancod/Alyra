import React, { Component } from 'react'
import contractInstance from '../../options'
import PropTypes from "prop-types"

class Play extends Component {
  constructor() {
    super();
    this.state = {
			getPrixLottery: '',
      getSuperCagnotte: '',
      getTicketsLeft: '',
      getEndGame: '',
      getBlockStop: '',
      getNumCagnotte: '',
      getCagnotte: '',
      getNbGagnants: '',
      balanceOf: '',
      getBlock: ''
		};
  }

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

  async componentDidMount() {

    this.setState({ getPrixLottery: parseInt(await contractInstance.getPrixLottery(),10),
                    getSuperCagnotte: parseInt(await contractInstance.getSuperCagnotte(),10),
                    getTicketsLeft: parseInt(await contractInstance.getTicketsLeft(),10),
                    getEndGame: parseInt(await contractInstance.getEndGame(),10),
                    getBlockStop: parseInt(await contractInstance.getBlockStop(),10),
                    getNumCagnotte: parseInt(await contractInstance.getNumCagnotte(),10),
                    getCagnotte: parseInt(await contractInstance.getCagnotte(),10),
                    getNbGagnants: parseInt(await contractInstance.getNbGagnants(),10),
                    balanceOf: parseInt(await contractInstance.getSolde(),10),
                    getBlock: parseInt(await contractInstance.getBlock(),10)})
  }
  render() {

    const { quantite, prediction, handleChange } = this.props

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
          <tr class="w3-theme-l2">
            <td>tickets restants</td>
            <td className="w3-theme-l3">{this.state.getTicketsLeft}</td>
          </tr>
          <tr className="w3-theme-l2">
            <td>bloc actuel</td>
            <td className="w3-theme-l3">{this.state.getBlock}</td>
          </tr>
          <tr className="w3-theme-l2">
            <td>bloc de fin du jeu</td>
            <td className="w3-theme-l3">{this.state.getEndGame}</td>
          </tr>
          <tr class="w3-theme-l2">
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
            <td>votre prediction pour la cagnotte</td>
            <td className="w3-theme-l3"><input type="text" value={prediction} id="prediction" placeholder="montant"/></td>
          </tr>
          <tr className="w3-theme-l2">
            <td>nombre de tickets a jouer</td>
            <td className="w3-theme-l3"><input type="text" value={quantite} id="quantite" placeholder="quantite"/></td>
          </tr>
          <tr>
            <td class="w3-theme-l2"><button class="w3-button w3-black btn btn-primary btn-smbtn btn-primary btn-block" onclick="">jouer</button></td>
          </tr>
      </tbody>
      </table>
      </div>

    );
  }
}

export default Play;
