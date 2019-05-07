import React, { Component } from 'react'
import contractInstance from '../../options'
import PropTypes from "prop-types"

class AdminGroup extends Component {
  constructor() {
    super();
    this.state = {
			getPrixLottery: '',
      getSuperCagnotte: '',
      getTicketsLeft: '',
      getEndGame: '',
      getBlockStop: '',
      getNumCagnotte: '',
      getCagnotte: '',
      getNbGagnants: '',
      balanceOf: '',
      getBlock: ''
		};
  }

  static propTypes = {
    nom: PropTypes.string,
    pseudo: PropTypes.string,
    membre: PropTypes.string,
    pseudo1: PropTypes.string,
    groupe: PropTypes.string,
    handleChange: PropTypes.func
  }

  static defaultProps = {
    nom: '',
    pseudo: '',
    membre: '',
    pseudo1: '',
    groupe: '',
    handleChange: () => {}
  }

  async componentDidMount() {

    var getGroupesPerAddress = ""

    this.setState({ getGroupesPerAddress: parseInt(getGroupesPerAddress,10)})
  }
  render() {

    const { nom, pseudo, membre, pseudo1, groupe } = this.props

    return (

      <div class="table-responsive w3-card-4">
        <table class="table table-bordered">
          <thead>
            <tr class="w3-theme-d4">
              <th>ADMINISTRER UN GROUPE</th>
            </tr>
          </thead>
            <tbody>
              <tr>
                <td class="w3-theme-d1">Creer un groupe</td>
              </tr>
              <tr class="w3-theme-l2">
                <td>nom du groupe</td>
                <td class="w3-theme-l3"><input type="text" value="" id={nom}  placeholder="nom"/></td>
              </tr>
              <tr class="w3-theme-l2">
                <td>votre pseudo dans le groupe</td>
                <td class="w3-theme-l3"><input type="text" value="" id={pseudo}  placeholder="pseudo"/></td>
              </tr>
              <tr>
                <td class="w3-theme-l2"><button class="w3-button w3-black btn btn-primary btn-smbtn btn-primary btn-block" onclick="">creer</button></td>
              </tr>
              <tr>
                <td class="w3-theme-d1">Ajouter un membre</td>
                <td class="w3-theme-l4">{this.state.getGroupesPerAddress}</td>
              </tr>
            <tr class="w3-theme-l2">
              <td>addresse</td>
              <td class="w3-theme-l3"><input type="text" value="" id={membre} placeholder="membre"/></td>
            </tr>
            <tr class="w3-theme-l2">
              <td>pseudo</td>
              <td class="w3-theme-l3"><input type="text" value="" id={pseudo1} placeholder="pseudo"/></td>
            </tr>
            <tr class="w3-theme-l2">
              <td>groupe</td>
              <td class="w3-theme-l3"><input type="text" value="" id={groupe} placeholder="groupe"/></td>
            </tr>
            <tr>
              <td class="w3-theme-l2"><button class="w3-button w3-black btn btn-primary btn-smbtn btn-primary btn-block" onclick="">creer</button></td>
            </tr>
  </tbody>
  </table>
    </div>

    );
  }
}

export default AdminGroup;
