import React, { Component } from "react"
import { isMobile } from 'react-device-detect'
import { CssBaseline, Grid, Card, CardContent } from "@material-ui/core"
import Play from './components/game/Play';
import Menu from './components/Menu';
import Withdraw from './components/game/Withdraw';
import PreviewGame from './components/game/PreviewGame';
import CreateGroup from './components/admin/createGroup';
import CreateMember from './components/admin/createMember';
import CreateDemand from './components/admin/createDemand';
import GetInfoDemand from './components/Demand/getInfoDemand';
import PayDemand from './components/Demand/payDemand';
import SoldeDemand from './components/Demand/soldeDemand';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.png'
import "./App.css"

class App extends Component {
  render() {
    if (isMobile) {
      return (
        <div className="noteuse_wrapper">
          <h1 className="noteuse_h1">Whoops</h1>

          <p className="noteuse_p">
            Le site n'est pas accessible depuis les mobiles / tablettes
          </p>
        </div>
      )
    }

    else return (

      <React.Fragment>
        <CssBaseline />

          <div className="header">
            <div className="container_logo">
              <div className="logo">
                <img className="img_logo" src={ logo } alt="" />
              </div>

              <div className="UNION">
                <h1>ETHER UNION</h1>
              </div>

              <div className="commentStyle">
                Send, receive, stay connected with yours and earn tokens,
                enter in the new social network system of consuming and play to our free super lotery
              </div>
              <Router>
                <Route exact path="/game" component={Menu}/>
                <Route exact path="/demand" component={Menu}/>
                <Route exact path="/admin" component={Menu}/>
              </Router>

            </div>
          </div>


          <div className="main_content">

            <Grid container alignItems="center" justify="center">
              <Grid item xs={8} lg={16} >
                <Router>
                  <Route exact path="/" component={home}/>
                  <Route exact path="/game" component={game}/>
                  <Route exact path="/demand" component={demand}/>
                  <Route exact path="/admin" component={admin}/>
                </Router>
              </Grid>
            </Grid>
          </div >

      </React.Fragment>
    )
  }
}

class home extends Component {
  render() {
      return (
        <div>
          <Card className="card">
            <CardContent>
              <Menu />
            </CardContent>
          </Card>
        </div >
    )
  }
}

class game extends Component {
  render() {
      return (
        <div>
          <Card className="card">
            <CardContent>
              <Play />
            </CardContent>
          </Card>
          <Card className="card">
            <CardContent>
              <PreviewGame />
            </CardContent>
          </Card>
          <Card className="card">
            <CardContent>
              <Withdraw />
            </CardContent>
          </Card>
        </div >
      )
  }
}

class demand extends Component {
  render() {
      return (
        <div>
          <Card className="card">
            <CardContent>
              <GetInfoDemand />
            </CardContent>
          </Card>
          <Card className="card">
            <CardContent>
              <PayDemand />
            </CardContent>
          </Card>
          <Card className="card">
            <CardContent>
              <SoldeDemand />
            </CardContent>
          </Card>
        </div >
    )
  }
}

class admin extends Component {
  render() {
      return (
        <div>
          <Card className="card">
            <CardContent>
              <CreateGroup />
            </CardContent>
          </Card>
          <Card className="card">
            <CardContent>
              <CreateMember />
            </CardContent>
          </Card>
          <Card className="card">
            <CardContent>
              <CreateDemand />
            </CardContent>
          </Card>
      </div >
    )
  }
}

export default App
