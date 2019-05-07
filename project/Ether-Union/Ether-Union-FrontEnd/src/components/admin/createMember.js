import React, { Component } from 'react'
import contractInstance from '../../options'
import PropTypes from "prop-types"

class CreateMember extends Component {
  constructor() {
    super();
  }

  static propTypes = {
    membre: PropTypes.string,
    pseudo1: PropTypes.string,
    groupe: PropTypes.string,
    handleChange: PropTypes.func
  }

  static defaultProps = {
    membre: '',
    pseudo1: '',
    groupe: '',
    handleChange: () => {}
  }

  render() {

    const { membre, pseudo1, groupe } = this.props

    return (

      <div class="table-responsive w3-card-4">
        <table class="table table-bordered">
          <thead>
            <tr class="w3-theme-d4">
              <th>AJOUTER UN MEMBRE A UN GROUPE</th>
            </tr>
          </thead>
            <tbody>
            <tr class="w3-theme-l2">
              <td>addresse</td>
              <td class="w3-theme-l3"><input type="text" value={membre} id="membre" placeholder="membre"/></td>
            </tr>
            <tr class="w3-theme-l2">
              <td>pseudo</td>
              <td class="w3-theme-l3"><input type="text" value={pseudo1} id="pseudo1" placeholder="pseudo"/></td>
            </tr>
            <tr class="w3-theme-l2">
              <td>groupe</td>
              <td class="w3-theme-l3"><input type="text" value={groupe} id="groupe" placeholder="groupe"/></td>
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

export default CreateMember;
