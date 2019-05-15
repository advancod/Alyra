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

  }

  componentDidMount() {

    this.web3.eth.getCoinbase((err, account) => {
      this.setState({ account })
    this.Lottery.deployed().then((LotteryInstance) => {
      this.LotteryInstance = LotteryInstance

      this.LotteryInstance.getPrixLottery().then((result) => {
        this.setState({ getPrixLottery:  parseInt(result,10)})
      })
      this.LotteryInstance.getPrixLottery().then((result) => {
        this.setState({ getPrixLottery:  parseInt(result,10)})
      })
      this.LotteryInstance.getSuperCagnotte().then((result) => {
        this.setState({ getSuperCagnotte:  parseInt(result,10)})
      })
      this.LotteryInstance.getTicketsLeft().then((result) => {
        this.setState({ getTicketsLeft:  parseInt(result,10)})
      })
      this.LotteryInstance.getEndGame().then((result) => {
        this.setState({ getEndGame:  parseInt(result,10)})
      })
      this.LotteryInstance.getBlockStop().then((result) => {
        this.setState({ getBlockStop:  parseInt(result,10)})
      })
      this.LotteryInstance.getNumCagnotte().then((result) => {
        this.setState({ getNumCagnotte:  parseInt(result,10)})
      })
      this.LotteryInstance.getCagnotte().then((result) => {
        this.setState({ getCagnotte:  parseInt(result,10)})
      })
      this.LotteryInstance.getNbGagnants().then((result) => {
        this.setState({ getNbGagnants:  parseInt(result,10)})
      })
      this.LotteryInstance.getSolde().then((result) => {
        this.setState({ getSolde:  parseInt(result,10)})
      })
      this.LotteryInstance.getBlock().then((result) => {
        this.setState({ getBlock:  parseInt(result,10)})
      })
      this.LotteryInstance.getNumCagnotte().then((result) => {
        this.setState({ getNumCagnotte:  parseInt(result,10)})
      })
      this.LotteryInstance.getCagnotte().then((result) => {
        this.setState({ getCagnotte:  parseInt(result,10)})
      })
      this.LotteryInstance.getNbGagnants().then((result) => {
        this.setState({ getNbGagnants:  parseInt(result,10)})
      })
      this.LotteryInstance.getGains().then((result) => {
        this.setState({ getGains:  parseInt(result,10)})
      })
    })
})
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
