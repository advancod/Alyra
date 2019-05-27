import React, { Component } from 'react'
import contractInstance from '../../options'
import { TextField, Grid } from "@material-ui/core"
import MenuItem from '@material-ui/core/MenuItem';

export default class  SoldeDemand extends Component {

  constructor() {
    super();
    this.state = {
      getMembres : [],
      pseudo : ''
		};

    this._solderCanal = this._solderCanal.bind(this)
  }


  handleChange = name => event => {
   this.setState({ [name]: event.target.value });
 };


  async componentDidMount() {

     let copy = []
     let list = await contractInstance.getAllPseudos()
     for (let j=0; j<list.length; j++){
       copy.push(await contractInstance.getNomMembre(list[j]))
     }

     this.setState({
                     getMembres : copy })
   }

  async _solderCanal() {
      await window.ethereum.enable()
    	await contractInstance.solderCanal(this.state.pseudo)
  }

  render() {

    return (

      <div className="table-responsive w3-card-4">
        <table className="table table-bordered">
          <thead>
            <tr className="w3-theme-d4">
              <th>SOLDER UNE DEMANDE</th>
            </tr>
          </thead>
            <tbody>
            <tr>
              <td>
              <Grid container spacing={24}>
                <Grid item xs={12} md={6}>
                  <TextField
                    select
                    label="CHOISIR UN PSEUDONYME"
                    fullWidth
                    value={this.state.pseudo}
                    onChange={this.handleChange('pseudo')}
                    helperText="Selectionner un de vos identifiants"
                  >
                  {this.state.getMembres.map(option => (
                    <MenuItem value={option} key={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <br/>
                <button className="btn-primary btn-block" onClick={this._solderCanal}>SOLDER</button>
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
