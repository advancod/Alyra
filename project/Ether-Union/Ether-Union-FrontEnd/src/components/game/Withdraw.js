import React, { Component } from 'react'
import contractInstance from '../../options'
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField, Grid } from "@material-ui/core"

export default class Withdraw extends Component {
  constructor() {
    super();
    this.state = {
      getGains: 0,
      getNbGagnants: 0
		};
    this._withdrawGains = this._withdrawGains.bind(this)

  }

  async componentDidMount() {

    this.setState({
      getNbGagnants: parseInt(await contractInstance.getNbGagnants(),10),
      getGains: parseInt(await contractInstance.getGains(),10) })
  }



  async _withdrawGains() {
      await window.ethereum.enable()
    	await contractInstance.withdrawGains()
  }

  render() {

    return (

      <div className="table-responsive w3-card-4">
      <table className="table table-bordered">
        <thead>
          <tr className="w3-theme-d4">
            <th>RECUPERER SES GAINS</th>
          </tr>
        </thead>
          <tbody>
          <tr>
          <td>
          <Grid container spacing={24}>
           <Grid item xs={12} md={6}>
              <TextField
                   disabled
                   variant="outlined"
                   label="VOTRE PART DE LA CAGNOTE"
                   value={this.state.getGains}
                   fullWidth
                   helperText="Récupérez la vite!!"
                   InputProps={{
                               endAdornment: <InputAdornment position="end">Wei</InputAdornment>,
                               readOnly: true,
                               style: { color: 'blue'}
                              }}
              />
             </Grid>
             <Grid item xs={12} md={6}>
               <TextField
                    disabled
                    variant="outlined"
                    label="NOMBRE DE GAGNANTS"
                    value={this.state.getNbGagnants}
                    fullWidth
                    helperText="Vous avez tous eu la bonne réponse"
                    InputProps={{
                                 readOnly: true,
                                 style: { color: 'blue'}
                              }}
                    />
            </Grid>
              <Grid item xs={12} md={12}>
                  <button className="btn-primary btn-block" onClick={this._withdrawGains}>RECUPERER</button>
              </Grid>
            </Grid>

            </td>
            </tr>
      </tbody>
      </table>
      </div>

    );
  }
};
