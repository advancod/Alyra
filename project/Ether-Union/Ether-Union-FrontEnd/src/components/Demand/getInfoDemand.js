import React, { Component } from 'react'
import contractInstance from '../../options'
import { TextField, Grid } from "@material-ui/core"
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';

export default class  GetInfoDemand extends Component {
  constructor() {
    super();
    this.state = {
			getGroupesPerAddress: [],
      getMembres: [],
      getMonPseudo: '',
      getMembre: '',
      pseudo: '',
      getReceptions: 0,
      getDonnations: 0,
      getMontant: 0,
      getEncours: 0,
      getDescription: '',
      nomGroupe: '',
      getAddresse: ''
		};
this.choixGroupe = this.choixGroupe.bind(this)
this.choixMembre = this.choixMembre.bind(this)
  }

  handleChange = name => event => {
   this.setState({ [name]: event.target.value });
 };

 async choixGroupe() {
   let copy = []
   let list = await contractInstance.getMembres(this.state.nomGroupe)
   for (let j=0; j<list.length; j++){
     copy.push(await contractInstance.getNomMembre(list[j]))
   }

   this.setState({
                   getMembres : copy,
                 getMonPseudo : await contractInstance.getPseudoInGroup(this.state.nomGroupe)})

   }

 async choixMembre() {

   this.setState({
                   getReceptions : parseInt(await contractInstance.getReceptions(this.state.pseudo),10),
                   getDonnations : parseInt(await contractInstance.getDonnations(this.state.pseudo),10),
                   getMontant : parseInt(await contractInstance.getMontant(this.state.pseudo),10),
                   getEncours : parseInt(await contractInstance.getEncours(this.state.pseudo),10),
                   getAddresse : await contractInstance.getAddresse(this.state.pseudo),
                   getDescription : await contractInstance.getDescription(this.state.pseudo)
                  })
 }

 async componentDidMount() {

   let copy = []
   let list = await contractInstance.getGroupesPerAddress()
   for (let i=0; i<list.length; i++){
     copy.push(await contractInstance.getNomGroupe(list[i]))
   }

   this.setState({

                   getGroupesPerAddress : copy})

 }


  render() {

    return (
      <div className="table-responsive w3-card-4">
        <table className="table table-bordered w3-container background-color: #80ced6">
          <thead>
            <tr className="w3-theme-d4">
              <th>RECHERCHER UNE DEMANDE</th>
            </tr>
          </thead>
            <tbody>

            <tr>
              <td>
                <Grid container spacing={24}>
                  <Grid item xs={12} md={3}>
                    <TextField
                      select
                      label="1 - CHOISIR UN GROUPE"
                      fullWidth
                      value={this.state.nomGroupe}
                      onChange={this.handleChange('nomGroupe')}
                      helperText="Selectionner un groupe dont vous êtes membre"
                    >
                    {this.state.getGroupesPerAddress.map(option => (
                      <MenuItem value={option} key={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} md={3}>
                  <br/>
                  <button className="btn-primary btn-block" onClick={this.choixGroupe}>SELECTIONNER</button>
                </Grid>

                 <Grid item xs={12} md={3}>
                  <TextField
                    select
                    label="2 - CHOISIR UN MEMBRE"
                    fullWidth
                    value={this.state.pseudo}
                    onChange={this.handleChange('pseudo')}
                    helperText="Entrez le pseudonyme du membre recherché"
                  >
                  {this.state.getMembres.map(option => (
                    <MenuItem value={option} key={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={3}>
                <br/>
                <button className="btn-primary btn-block" onClick={this.choixMembre}>SELECTIONNER</button>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  disabled
                  label="VOTRE PSEUDONYME DANS CE GROUPE"
                  value={this.state.getMonPseudo}
                  fullWidth
                  helperText="Votre identification dans ce groupe"
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
                    label="RECEPTIONS"
                    value={this.state.getReceptions}
                    fullWidth
                    helperText="Il vous a déjà donné"
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
                label="DONNATIONS"
                value={this.state.getDonnations}
                fullWidth
                helperText="Vous lui avez déjà donné"
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
                  label="MONTANT DE LA CAGNOTTE DEMANDEE"
                  value={this.state.getMontant}
                  fullWidth
                  helperText="Montant de la demande"
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
                  label="ETAT DE LA CAGNOTE"
                  value={this.state.getEncours}
                  fullWidth
                  helperText="Montant actuels des fonds versés par le groupe"
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
                  label="SON ADRESSE ETHEREUM"
                  value={this.state.getAddresse}
                  fullWidth
                  helperText="clé publique"
                  InputProps={{
                              readOnly: true,
                              style: { color: 'blue'}
                              }}
                />
           </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                  disabled
                  variant="outlined"
                  label="DESCRIPTION"
                  value={this.state.getDescription}
                  fullWidth
                  helperText="Expliquation de sa demande de fonds si il y a"
                  InputProps={{
                            readOnly: true,
                            style: { color: 'blue'}
                            }}
              />
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
