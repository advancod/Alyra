import React, { Component } from 'react'
import contractInstance from '../../options'
import { TextField, Grid } from "@material-ui/core"
import InputAdornment from '@material-ui/core/InputAdornment';

export default class  Play extends Component {
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
      getWithdrawBlock: 0,
      getSaveBlock: 0,
      getStateGame : '',
      prediction: 0,
      getBlock: 0
		};
    this.jouerLottery = this.jouerLottery.bind(this)
  }

  handleChange = name => event => {
   this.setState({ [name]: event.target.value });
 };

  async componentDidMount() {

    this.setState({

                    getPrixLottery: parseInt(await contractInstance.getPrixLottery(),10),
                    getStateGame: await contractInstance.getStateGame(),
                    getSuperCagnotte: parseInt(await contractInstance.getSuperCagnotte(),10),
                    getSaveBlock: parseInt(await contractInstance.getSaveBlock(),10),
                    getWithdrawBlock: parseInt(await contractInstance.getWithdrawBlock(),10),
                    getEndGame: parseInt(await contractInstance.getEndGame(),10),
                    getBlockStop: parseInt(await contractInstance.getBlockStop(),10),
                    getCagnotte: parseInt(await contractInstance.getCagnotte(),10),
                    getNbGagnants: parseInt(await contractInstance.getNbGagnants(),10),
                    balanceOf: parseInt(await contractInstance.getSolde(),10),
                    getBlock: parseInt(await contractInstance.getBlock(),10)})
  }

  async jouerLottery() {
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
                    <Grid item xs={6} md={4}>
                      <TextField
                         disabled
                         variant="outlined"
                         label="Prix du ticket"
                         value={this.state.getPrixLottery}
                         fullWidth
                         helperText="Ticket de participation au jeux en coinunion"
                         InputProps={{
                           endAdornment: <InputAdornment position="end">UNION</InputAdornment>,
                           readOnly: true,
                         }}
                       />
                    </Grid>
                    <Grid item xs={6} md={4}>
                       <TextField
                            disabled
                            variant="outlined"
                            label="Numéro du bloc actuel"
                            value={this.state.getBlock}
                            fullWidth
                            helperText="Dernier bloc validé sur la blockchain ethereum"
                            InputProps={{
                                          readOnly: true,
                                        }}
                      />
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <TextField
                           disabled
                           variant="outlined"
                           label="Numéro de bloc d'arrêt du jeux"
                           value={this.state.getBlockStop}
                           fullWidth
                           helperText="Arrêt de vente de tickets"
                           InputProps={{
                                        readOnly: true,
                                      }}
                       />
                     </Grid>
                     <Grid item xs={6} md={4}>
                       <TextField
                            disabled
                            variant="outlined"
                            label="Bloc du jeux"
                            value={this.state.getEndGame}
                            fullWidth
                            helperText="Bloc de prédiction"
                            InputProps={{
                                       readOnly: true,
                                        }}
                      />
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <TextField
                            disabled
                            variant="outlined"
                            label="Bloc maximal de déclaration de victoire"
                            value={this.state.getSaveBlock}
                            fullWidth
                            helperText="Vérifiez si vote prédiction était la bonne"
                            InputProps={{
                                       readOnly: true,
                                       }}
                      />
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <TextField
                            disabled
                            variant="outlined"
                            label="Bloc maximal de récupération de ses gains"
                            value={this.state.getWithdrawBlock}
                            fullWidth
                            helperText="Gagnez en ethereum votre part de la cagnote prédite"
                            InputProps={{
                                       readOnly: true,
                                       }}
                      />
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <TextField
                          disabled
                          variant="outlined"
                          label="SUPERCAGNOTE"
                          value={this.state.getSuperCagnotte}
                          fullWidth
                          helperText="Montant total actuel de la cagnote"
                          InputProps={{
                                     endAdornment: <InputAdornment position="end">Wei</InputAdornment>,
                                     readOnly: true,
                                     }}
                      />
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <TextField
                          disabled
                          variant="outlined"
                          label="Votre balance tokens"
                          value={this.state.balanceOf}
                          fullWidth
                          helperText="Votre solde en coinunion"
                          InputProps={{
                                     endAdornment: <InputAdornment position="end">UNION</InputAdornment>,
                                     readOnly: true,
                                     }}
                      />
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <TextField
                          disabled
                          variant="outlined"
                          label="Etat du jeux"
                          value={this.state.getStateGame}
                          fullWidth
                          helperText="Période actuelle du jeux"
                          InputProps={{
                                     readOnly: true,
                                     }}
                      />
                    </Grid>
                    <Grid item xs={6} md={12}>
                      <TextField
                        variant="outlined"
                        required
                        label="Jouer au jeux actuel"
                        fullWidth
                        type = "number"
                        value={this.state.prediction}
                        onChange={this.handleChange('prediction')}
                        helperText="Entrez votre prédiction en Wei pour la cagnote au bloc du jeux"
                      />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <button className="btn-primary btn-block" onClick={this.jouerLottery}>JOUER</button>
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
