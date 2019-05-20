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
      getGroupe: '',
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

  }

  handleChange = name => event => {
   this.setState({ [name]: event.target.value });
 };

 async componentDidMount() {

   let copy = []
   let list = await contractInstance.getGroupesPerAddress()
   for (let i=0; i<list.length; i++){
     copy.push(await contractInstance.getNomGroupe(list[i]))
   }

   let copy2 = []
   let list2 = await contractInstance.getMembres(this.state.nomGroupe)
   for (let j=0; j<list2.length; j++){
     copy2.push(await contractInstance.getNomMembre(list2[j]))
   }

   this.setState({
                   payable: parseInt(await contractInstance.getPriceMember(),10),
                   getMembres : copy,
                   getReceptions : parseInt(await contractInstance.getReceptions(this.state.pseudo),10),
                   getDonnations : parseInt(await contractInstance.getDonnations(this.state.pseudo),10),
                   getMontant : parseInt(await contractInstance.getMontant(this.state.pseudo),10),
                   getEncours : parseInt(await contractInstance.getEncours(this.state.pseudo),10),
                   getAddresse : await contractInstance.getAddresse(this.state.pseudo),
                   getDescription : await contractInstance.getDescription(this.state.pseudo),
                   getMonPseudo : await contractInstance.getPseudoInGroup(this.state.nomGroupe),
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
                  <Grid item xs={12} md={4}>
                    <TextField
                      select
                      label="Choisir un groupe"
                      fullWidth
                      value={this.state.nomGroupe}
                      onChange={this.handleChange('groupe')}
                      helperText="Selectionner un groupe dont vous êtes membre"
                    >
                    {this.state.getGroupesPerAddress.map(option => (
                      <MenuItem value={option} key={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} md={8}>
                  <TextField
                    disabled
                    variant="outlined"
                    label="Votre pseudonyme"
                    value={this.state.getMonPseudo}
                    fullWidth
                    helperText="Votre identification dans ce groupe"
                    InputProps={{
                              readOnly: true,
                 }}
                 />
                 </Grid>
                 <Grid item xs={12} md={4}>
                  <TextField
                    select
                    label="Choisir Membre"
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
              <Grid item xs={12} md={8}>
                <TextField
                    disabled
                    variant="outlined"
                    label="Description"
                    value={this.state.getDescription}
                    fullWidth
                    helperText="Expliquation de sa demande de fonds si il y a"
                    InputProps={{
                              readOnly: true,
                              }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                    disabled
                    variant="outlined"
                    label="Addresse ethereum"
                    value={this.state.getAddresse}
                    fullWidth
                    helperText="clé publique"
                    InputProps={{
                                readOnly: true,
                                }}
                  />
             </Grid>
             <Grid item xs={12} md={4}>
               <TextField
                    disabled
                    variant="outlined"
                    label="Récéptions"
                    value={this.state.getReceptions}
                    fullWidth
                    helperText="De la part de cet utilisateur dans ce groupe"
                    InputProps={{
                                endAdornment: <InputAdornment position="end">Wei</InputAdornment>,
                                readOnly: true,
                                }}
               />
             </Grid>
             <Grid item xs={12} md={4}>
              <TextField
                disabled
                variant="outlined"
                label="Donnations"
                value={this.state.getDonnations}
                fullWidth
                helperText="Totalités des fonds que vous lui avez attribué"
                InputProps={{
                           endAdornment: <InputAdornment position="end">Wei</InputAdornment>,
                           readOnly: true,
                         }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                  disabled
                  variant="outlined"
                  label="Montant"
                  value={this.state.getMontant}
                  fullWidth
                  helperText="Montant de la demande"
                  InputProps={{
                            endAdornment: <InputAdornment position="end">Wei</InputAdornment>,
                            readOnly: true,
                             }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                  disabled
                  variant="outlined"
                  label="En cours"
                  value={this.state.getEncours}
                  fullWidth
                  helperText="Montant actuels des fonds versés par le groupe"
                  InputProps={{
                            endAdornment: <InputAdornment position="end">Wei</InputAdornment>,
                            readOnly: true,
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
