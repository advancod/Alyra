import React from 'react'
import ReactDOM from 'react-dom'
import Web3 from 'web3'
import TruffleContract from 'truffle-contract'
import Lottery from '../../build/contracts/Lottery.json'
import Content from './Content'
import 'bootstrap/dist/css/bootstrap.css'

import Play from './components/game/Play';
import Withdraw from './components/game/Withdraw';
import PreviousGame from './components/game/PreviousGame';
import CreateGroup from './components/admin/createGroup';
import CreateMember from './components/admin/createMember';
import CreateDemand from './components/admin/createDemand';
import GetInfoDemand from './components/Demand/getInfoDemand';
import PayDemand from './components/Demand/payDemand';
import SoldeDemand from './components/Demand/soldeDemand';

import "../css/App.css"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      account: '0x0',
      hasPlayed : false,
      hasWithdraw : false,
      hasClosed : false,
      hasPayed : false,
      hasAdd : false,
      hasCreated : false,

      getPrixLottery: 0,
      getSuperCagnotte: 0,
      getTicketsLeft: 0,
      getEndGame: 0,
      getBlockStop: 0,
      getNumCagnotte: 0,
      getCagnotte: 0,
      getNbGagnants: 0,
      balanceOf: 0,
      getBlock: 0,
      getGains: 0,
      getGroupesPerAddress: 0,
      getAdminGroups: 0,
      getMembres: 0,
      getMonPseudo: 0,
      getGroupe: 0,
      getMembre: 0,
      pseudo: 0,
      getReceptions: 0,
      getDonnations: 0,
      getContratCible: 0,
      getMontant: 0,
      getEncours: 0,
      getDescription: 0
    }

    if (typeof web3 != 'undefined') {
      this.web3Provider = web3.currentProvider
    } else {
      this.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545')
    }

    this.web3 = new Web3(this.web3Provider)

    this.Lottery = TruffleContract(Lottery)
    this.Lottery.setProvider(this.web3Provider)

    this._prediction = this._prediction.bind(this)
    this._withdrawGains = this._withdrawGains.bind(this)
    this._fermetureCanal = this._fermetureCanal.bind(this)
    this._demander = this._demander.bind(this)
    this._ajouterMembre = this._ajouterMembre.bind(this)
    this._creerGroupe = this._creerGroupe.bind(this)


  }

  componentDidMount() {

    this.web3.eth.getCoinbase((err, account) => {
      this.setState({ account })
      this.Lottery.deployed().then((LotteryInstance) => {

        LotteryInstance.getPrixLottery().then((result) => {
          this.setState({ getPrixLottery:  parseInt(result,10)})
        })
        LotteryInstance.getSuperCagnotte().then((result) => {
          this.setState({ getSuperCagnotte:  parseInt(result,10)})
        })
        LotteryInstance.getTicketsLeft().then((result) => {
          this.setState({ getTicketsLeft:  parseInt(result,10)})
        })
        LotteryInstance.getEndGame().then((result) => {
          this.setState({ getEndGame:  parseInt(result,10)})
        })
        LotteryInstance.getBlockStop().then((result) => {
          this.setState({ getBlockStop:  parseInt(result,10)})
        })
        LotteryInstance.getNumCagnotte().then((result) => {
          this.setState({ getNumCagnotte:  parseInt(result,10)})
        })
        LotteryInstance.getCagnotte().then((result) => {
          this.setState({ getCagnotte:  parseInt(result,10)})
        })
        LotteryInstance.getNbGagnants().then((result) => {
          this.setState({ getNbGagnants:  parseInt(result,10)})
        })
        LotteryInstance.getSolde().then((result) => {
          this.setState({ getSolde:  parseInt(result,10)})
        })
        LotteryInstance.getBlock().then((result) => {
          this.setState({ getBlock:  parseInt(result,10)})
        })
        LotteryInstance.getNumCagnotte().then((result) => {
          this.setState({ getNumCagnotte:  parseInt(result,10)})
        })
        LotteryInstance.getCagnotte().then((result) => {
          this.setState({ getCagnotte:  parseInt(result,10)})
        })
        LotteryInstance.getNbGagnants().then((result) => {
          this.setState({ getNbGagnants:  parseInt(result,10)})
        })
        LotteryInstance.getGains().then((result) => {
          this.setState({ getGains:  parseInt(result,10)})
        })
      })
    })
  }


  _prediction(montant,quantite) {
      this.Lottery.deployed().then((LotteryInstance) => {
      LotteryInstance.play(montant,quantite, { from: this.state.account }).then((result) =>
      this.setState({ hasPlayed: true })
      )
  })
  }

  _withdrawGains() {
      this.LotteryInstance.withdrawGains({ from: this.state.account }).then((result) =>
      this.setState({ hasWithdraw: true })
      )
  }

  _fermetureCanal(pseudo) {
      this.LotteryInstance.fermetureCanal(pseudo,{ from: this.state.account }).then((result) =>
      this.setState({ hasClosed: true })
      )
  }

  _payerCanal(pseudo) {
      this.LotteryInstance.payerCanal(pseudo,{ from: this.state.account, value : parseInt(proposition,10) }).then((result) =>
      this.setState({ hasPayed: true })
      )
  }

  _demander(montant,pseudo,contrat,description) {
      this.LotteryInstance.demander(montant,pseudo,contrat,description,{ from: this.state.account, value : this.LotteryInstance.getPriceChannel() }).then((result) =>
      this.setState({ hasAsked: true })
      )
  }

  _ajouterMembre(membre,groupe,pseudo) {
      this.LotteryInstance.ajouterMembre(membre,groupe,pseudo,{ from: this.state.account, value : this.LotteryInstance.getPriceChannel() }).then((result) =>
      this.setState({ hasAdd: true })
      )
  }

  _creerGroupe(membre,groupe,pseudo) {
      this.LotteryInstance.creerGroupe(nom,pseudo, { from: this.state.account, value : this.LotteryInstance.getPriceGroup() }).then((result) =>
      this.setState({ hasCreated: true })
      )
  }

  render() {

      return (
      <div>
          <Play getBlock={this.state.getBlock}
          getPrixLottery={this.state.getPrixLottery}
          getSuperCagnotte={this.state.getSuperCagnotte}
          getTicketsLeft={this.state.getTicketsLeft}
          getEndGame={this.state.getEndGame}
          getBlockStop={this.state.getBlockStop}
          getNumCagnotte={this.state.getNumCagnotte}
          getCagnotte={this.state.getCagnotte}
          getNbGagnants={this.state.getNbGagnants}
          balanceOf={this.state.balanceOf}
          getBlock={this.state.getBlock}
          _prediction={this._prediction}
          />

          <PreviousGame getNumCagnotte={this.state.getNumCagnotte}
          getCagnotte={this.state.getCagnotte}
          getNbGagnants={this.state.getNbGagnants}
          />

          <Withdraw getGains={this.state.getGains}
          />

          <PayDemand />

          <GetInfoDemand
          getGroupesPerAddress={this.state.getBlock}
          getMembres={this.state.getMembres}
          getReceptions={this.state.getReceptions}
          getDonnations={this.state.getDonnations}
          getContratCible={this.state.getContratCible}
          getMontant={this.state.getMontant}
          getEncours={this.state.getEncours}
          getDescription={this.state.getDescription}
          />

          <SoldeDemand />

          <CreateGroup />

          <CreateMember
          getAdminGroups={this.state.getAdminGroups}
          />

          <CreateDemand
          getGroupesPerAddress={this.state.getGroupesPerAddress}
          pseudo={this.state.pseudo}
          />

      </div>
    )
  }
}

ReactDOM.render(
   <App />,
   document.querySelector('#root')
)
