import React, { Component } from 'react'
import contractInstance from '../../options'
import PropTypes from "prop-types"

class CreateDemand extends Component {
  constructor() {
    super();
  }

  static propTypes = {
    pseudo2: PropTypes.string,
    montant: PropTypes.string,
    contrat: PropTypes.string,
    description: PropTypes.string,
    handleChange: PropTypes.func
  }

  static defaultProps = {
    pseudo2: '',
    montant: '',
    contrat: '',
    description: '',
    handleChange: () => {}
  }

  async componentDidMount() {

    var getGroupesPerAddress = ""

    this.setState({ getGroupesPerAddress: parseInt(getGroupesPerAddress,10)})
  }
  render() {

    const { pseudo2, montant, contrat, description} = this.props

    return (

      <div class="table-responsive w3-card-4">
        <table class="table table-bordered">
          <thead>
            <tr class="w3-theme-d4">
              <th>CREER UNE DEMANDE</th>
            </tr>
          </thead>
            <tbody>
              <tr class="w3-theme-l2">
                <td>pseudo</td>
                <td class="w3-theme-l3"><input type="text" value={pseudo2} id="pseudo2" placeholder="pseudo" /></td>
              </tr>
              <tr class="w3-theme-l2">
                <td>montant</td>
                <td class="w3-theme-l3"><input type="text" value={montant} id="montant" placeholder="montant"/></td>
              </tr>
              <tr class="w3-theme-l2">
                <td>contrat cible (optionnel)</td>
                <td class="w3-theme-l3"><input type="text" value={contrat} id="contrat" placeholder="addresse" /></td>
              </tr>
              <tr class="w3-theme-l2">
                <td>description</td>
                <td class="w3-theme-l3"><input type="text" value={description} id="description" placeholder="description" /></td>
              </tr>
              <tr class="w3-theme-l2">
                <td class="w3-theme-l3"><button  class="w3-button w3-black btn btn-primary btn-sm btn btn-primary btn-block" onclick="">emettre</button></td>
              </tr>


  </tbody>
  </table>
    </div>

    );
  }
}

export default CreateDemand;
