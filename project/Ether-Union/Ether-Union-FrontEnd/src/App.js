import React, { Component } from "react"
import { isMobile } from 'react-device-detect'
import { CssBaseline, Grid, Card, CardContent } from "@material-ui/core"
import Play from './components/game/Play';
import Menu from './components/Menu';
import Withdraw from './components/game/Withdraw';
import PreviewGame from './components/game/PreviewGame';
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
            <h1>ETHER-UNION</h1>
          </div>

          <div className="commentStyle">
            Send, receive, stay connected with yours and earn tokens,
            enter in the new social network system of consuming and play to our super lotery
          </div>
        <Menu />

          </div>
</div>


        <div className="main_content">

          <Grid container alignItems="center" justify="center">
            <Grid item xs={8} lg={16} >
            <Router>
            <Route path="/">
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
            </Route>
          </Router>
            </Grid>
          </Grid>
        </div >
      </React.Fragment>
    )
  }
}

export default App
