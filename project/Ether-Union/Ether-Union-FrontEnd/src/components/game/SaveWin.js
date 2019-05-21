import React, { Component } from 'react'
import contractInstance from '../../options'
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField, Grid } from "@material-ui/core"

export default class  SaveWin extends Component {

  constructor() {
    super();
    this.state = {

      getCagnote: 0,
      getPrediction: 0
		};

    this._saveWin = this._saveWin.bind(this)
  }

  async componentDidMount() {

    this.setState({
                    getCagnotte: parseInt(await contractInstance.getCagnote(),10),
                    getPrediction: parseInt(await contractInstance.getPrediction(),10) })
  }

  async _saveWin() {
      await window.ethereum.enable()
    	await contractInstance.saveWin()
  }

  render() {

    return (

      <div className="table-responsive w3-card-4">
      <table className="table table-bordered">
        <thead>
          <tr className="w3-theme-d4">
            <th>DECLARER SES GAINS</th>
          </tr>
        </thead>
          <tbody>
          <tr>
            <td>
          <Grid container spacing={24}>
            <Grid item xs={6} md={6}>
                  <TextField
                           disabled
                           variant="outlined"
                           label="VOTRE PREDICTION"
                           value={this.state.getPrediction}
                           fullWidth
                           helperText="Lors du jeux prédent"
                           InputProps={{
                             endAdornment: <InputAdornment position="end">Wei</InputAdornment>,
                             readOnly: true,
                             style: { color: 'blue'}
                           }}
                  />
            </Grid>
            <Grid item xs={6} md={6}>
                  <TextField
                          disabled
                          variant="outlined"
                          label="MONTANT DE LA SUPERCAGNOTE"
                          value={this.state.getCagnote}
                          fullWidth
                          helperText="Résultat attendu"
                          InputProps={{
                                      endAdornment: <InputAdornment position="end">Wei</InputAdornment>,
                                      readOnly: true,
                                      style: { color: 'blue'}
                                      }}
                    />
             </Grid>
             <Grid item xs={12} md={12}>
               <button className="btn-primary btn-block" onClick={this._saveWin}>DECLARER</button>
             </Grid>
             </Grid>

</td>
</tr>
      </tbody>
      </table>
      </div>

    );
  }
}
