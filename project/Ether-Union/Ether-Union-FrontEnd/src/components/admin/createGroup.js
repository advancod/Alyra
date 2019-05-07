import React, { Component } from 'react'
import contractInstance from '../../options'
import PropTypes from "prop-types"

class CreateGroup extends Component {
  constructor() {
    super();
  }

  static propTypes = {
    nom: PropTypes.string,
    pseudo: PropTypes.string,
    handleChange: PropTypes.func
  }

  static defaultProps = {
    nom: '',
    pseudo: '',
    handleChange: () => {}
  }

  render() {

    const { nom, pseudo } = this.props

    return (

      <div class="table-responsive w3-card-4">
        <table class="table table-bordered">
          <thead>
            <tr class="w3-theme-d4">
              <th>CREER UN GROUPE</th>
            </tr>
          </thead>
            <tbody>
              <tr class="w3-theme-l2">
                <td>nom du groupe</td>
                <td class="w3-theme-l3"><input type="text" value={nom} id="nom"  placeholder="nom"/></td>
              </tr>
              <tr class="w3-theme-l2">
                <td>votre pseudo dans le groupe</td>
                <td class="w3-theme-l3"><input type="text" value={pseudo} id="pseudo"  placeholder="pseudo"/></td>
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

export default CreateGroup;
