import React, { Component } from 'react'
import contractInstance from '../../options'
import { TextField, Grid } from "@material-ui/core"
import InputAdornment from '@material-ui/core/InputAdornment';

export default class  Play extends Component {
  constructor() {
    super();
    this.state = {
			getPrixLotery: 0,
      getSuperCagnote: 0,
      getTicketsLeft: 0,
      getEndGame: 0,
      getBlockStop: 0,
      getNumCagnote: 0,
      getCagnote: 0,
      getNbGagnants: 0,
      balanceOf: 0,
      getWithdrawBlock: 0,
      getSaveBlock: 0,
      getStateGame : '',
      prediction: '',
      getBlock: 0
		};
    this.jouerLotery = this.jouerLotery.bind(this)
  }

  handleChange = name => event => {
   this.setState({ [name]: event.target.value });
 };

  async componentDidMount() {

    this.setState({

                    getPrixLotery: parseInt(await contractInstance.getPrixLotery(),10),
                    getStateGame: await contractInstance.getStateGame(),
                    getSuperCagnote: parseInt(await contractInstance.getSuperCagnote(),10),
                    getSaveBlock: parseInt(await contractInstance.getSaveBlock(),10),
                    getWithdrawBlock: parseInt(await contractInstance.getWithdrawBlock(),10),
                    getEndGame: parseInt(await contractInstance.getEndGame(),10),
                    getBlockStop: parseInt(await contractInstance.getBlockStop(),10),
                    getCagnote: parseInt(await contractInstance.getCagnote(),10),
                    getNbGagnants: parseInt(await contractInstance.getNbGagnants(),10),
                    balanceOf: parseInt(await contractInstance.getSolde(),10),
                    getBlock: parseInt(await contractInstance.getBlock(),10)})
  }

  async jouerLotery() {
    await window.ethereum.enable()
    await contractInstance.play(this.state.prediction)
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
              <tr>
                <td>
                  <Grid container spacing={24}>
                    <Grid item xs={2} md={2}>
                      <TextField
                         disabled
                         variant="outlined"
                         label="PRIX DU TICKET"
                         value={this.state.getPrixLotery}
                         fullWidth
                         helperText="Ticket de participation au jeux en coinunion"
                         InputProps={{
                           endAdornment: <InputAdornment position="end">UNION</InputAdornment>,
                           readOnly: true,
                           style: { color: 'blue'}
                         }}
                       />
                    </Grid>
                    <Grid item xs={12} md={2}>
                       <TextField
                            disabled
                            variant="outlined"
                            label="BLOC ACTUEL"
                            value={this.state.getBlock}
                            fullWidth
                            helperText="Dernier bloc validé sur la blockchain ethereum"
                            InputProps={{
                                          readOnly: true,
                                          style: { color: 'blue'}
                                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <TextField
                           disabled
                           variant="outlined"
                           label="BLOC DE FIN DU JEUX"
                           value={this.state.getBlockStop}
                           fullWidth
                           helperText="Arrêt de vente de tickets"
                           InputProps={{
                                        readOnly: true,
                                        style: { color: 'blue'}
                                      }}
                       />
                     </Grid>
                     <Grid item xs={12} md={2}>
                       <TextField
                            disabled
                            variant="outlined"
                            label="BLOC DU JEUX DE PREDICTION"
                            value={this.state.getEndGame}
                            fullWidth
                            helperText="Bloc de prédiction"
                            InputProps={{
                                       readOnly: true,
                                       style: { color: 'blue'}
                                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <TextField
                            disabled
                            variant="outlined"
                            label="BLOC POUR DECLARATION"
                            value={this.state.getSaveBlock}
                            fullWidth
                            helperText="Vérifiez si vote prédiction était la bonne"
                            InputProps={{
                                       readOnly: true,
                                       style: { color: 'blue'}
                                       }}
                      />
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <TextField
                            disabled
                            variant="outlined"
                            label="BLOC DE RECUPERATION"
                            value={this.state.getWithdrawBlock}
                            fullWidth
                            helperText="Et gagnez vos ethers"
                            InputProps={{
                                       readOnly: true,
                                       style: { color: 'blue'}
                                       }}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                          disabled
                          variant="outlined"
                          label="SUPERCAGNOTTE"
                          value={this.state.getSuperCagnote}
                          fullWidth
                          helperText="Montant total actuel de la cagnote"
                          InputProps={{
                                     endAdornment: <InputAdornment position="end">Wei</InputAdornment>,
                                     readOnly: true,
                                     style: { color: 'blue'}
                                     }}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                          disabled
                          variant="outlined"
                          label="VOTRE BALANCE EN TOKEN"
                          value={this.state.balanceOf}
                          fullWidth
                          helperText="Votre solde en coinunion"
                          InputProps={{
                                     endAdornment: <InputAdornment position="end">UNION</InputAdornment>,
                                     readOnly: true,
                                     style: { color: 'blue'}
                                     }}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                          disabled
                          variant="outlined"
                          label="ETAT DU JEUX"
                          value={this.state.getStateGame}
                          fullWidth
                          helperText="Période actuelle du jeux"
                          InputProps={{
                                     readOnly: true,
                                     style: { color: 'blue'}
                                     }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        variant="outlined"
                        required
                        label="JOUER AU JEUX"
                        fullWidth
                        type = "number"
                        value={this.state.prediction}
                        onChange={this.handleChange('prediction')}
                        helperText="Entrez votre prédiction en Wei pour la cagnote au bloc du jeux"
                        InputProps={{
                                   endAdornment: <InputAdornment position="end">Wei</InputAdornment>,
                                   }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <br/>
                      <button className="btn-primary btn-block" onClick={this.jouerLotery}>JOUER</button>
                    </Grid>
                  </Grid>

              </td>
              <td>

              </td>
          </tr>
</tbody>
</table>
  </div>

    );
  }
}
