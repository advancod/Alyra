import React, { Component } from 'react'
import contractInstance from '../options'
import PropTypes from "prop-types"
import TextField from "@material-ui/core/TextField"

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
      balanceOf: ''
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

    var getPrixLottery = await contractInstance.getPrixLottery()
    var getSuperCagnotte = await contractInstance.getSuperCagnotte()
    var getTicketsLeft = await contractInstance.getTicketsLeft()
    var getEndGame = await contractInstance.getEndGame()
    var getBlockStop = await contractInstance.getBlockStop()
    var getNumCagnotte = await contractInstance.getNumCagnotte()
    var getCagnotte  = await contractInstance.getCagnotte()
    var getNbGagnants = await contractInstance.getNbGagnants()
    var balanceOf = await contractInstance.getSolde()


    this.setState({ getPrixLottery: parseInt(getPrixLottery,10),
                    getSuperCagnotte: parseInt(getSuperCagnotte,10),
                    getTicketsLeft: parseInt(getTicketsLeft,10),
                    getEndGame: parseInt(getEndGame,10),
                    getBlockStop: parseInt(getBlockStop,10),
                    getNumCagnotte: parseInt(getNumCagnotte,10),
                    getCagnotte: parseInt(getCagnotte,10),
                    getNbGagnants: parseInt(getNbGagnants,10),
                    balanceOf: parseInt(balanceOf,10) })
  }
  render() {

    const { quantite, prediction, handleChange } = this.props

    return (

      <div class="table-responsive w3-card-4">
      <table class="table table-bordered">
        <thead>
          <tr class="w3-theme-d4">
            <th>JOUEZ A NOTRE JEUX ET GAGNEZ DES ETHERS</th>
          </tr>
        </thead>
          <tbody>
            <tr class="w3-theme-l2">
              <td>prix en token</td>
              <td class="w3-theme-l3">{this.state.getPrixLottery}</td>
            </tr>
          <tr class="w3-theme-l2">
            <td>tickets restants</td>
            <td class="w3-theme-l3">{this.state.getTicketsLeft}</td>
          </tr>
          <tr class="w3-theme-l2">
            <td>bloc de fin du jeu</td>
            <td class="w3-theme-l3">{this.state.getEndGame}</td>
          </tr>
          <tr class="w3-theme-l2">
            <td>bloc de prediction</td>
            <td class="w3-theme-l3">{this.state.getBlockStop}</td>
          </tr>
          <tr class="w3-theme-l2">
            <td>cagnotte en ether</td>
            <td class="w3-theme-l3">{this.state.getSuperCagnotte}</td>
          </tr>
          <tr class="w3-theme-l2">
            <td>votre solde gimicoin</td>
            <td class="w3-theme-l3">{this.state.balanceOf}</td>
          </tr>
          <tr class="w3-theme-l2">
            <td>votre prediction pour la cagnotte</td>
            <td class="w3-theme-l3"><input type="text" value="" id={prediction} placeholder="montant"/></td>
          </tr>
          <tr class="w3-theme-l2">
            <td>nombre de tickets a jouer</td>
            <td class="w3-theme-l3"><input type="text" value="" id={quantite} placeholder="quantite"/></td>
          </tr>
      </tbody>
      </table>
      </div>

    );
  }
}

export default Play;
