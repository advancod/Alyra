import React, { Component } from 'react'
import contractInstance from '../../options'
import PropTypes from "prop-types"

class payDemand extends Component {
  constructor() {
    super();
  }

  static propTypes = {
    pseudo3: PropTypes.string,
    proposition: PropTypes.string,
    handleChange: PropTypes.func
  }

  static defaultProps = {
    pseudo3: '',
    proposition: '',
    handleChange: () => {}
  }

  render() {

    const { pseudo3, proposition } = this.props

    return (

      <div class="table-responsive w3-card-4">
        <table class="table table-bordered">
          <thead>
            <tr class="w3-theme-d4">
              <th>PAYER UNE DEMANDE - Gagnez des tokens</th>
            </tr>
          </thead>
            <tbody>
            <tr class="w3-theme-l2">
              <td><strong>pseudo du demandeur</strong></td>
              <td class="w3-theme-l3"><input type="text" value={pseudo3} id="pseudo3" placeholder="pseudo"/></td>
            </tr>
            <tr class="w3-theme-l2">
              <td><strong>montant propose</strong></td>
              <td class="w3-theme-l3"><input type="text" value={proposition} id="proposition" placeholder="montant"/></td>
            </tr>
            <tr class="w3-theme-l2">
              <td><button  class="w3-button w3-black btn btn-primary btn-sm btn btn-primary btn-block" onclick=")">payer</button></td>
            </tr>

  </tbody>
  </table>
    </div>

    );

  }
}

export default payDemand;
