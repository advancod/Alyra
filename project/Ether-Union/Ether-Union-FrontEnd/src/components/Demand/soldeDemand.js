import React, { Component } from 'react'
import contractInstance from '../../options'
import PropTypes from "prop-types"

class SoldeDemand extends Component {
  constructor() {
    super();
  }

  static propTypes = {
    pseudo4: PropTypes.string,
    handleChange: PropTypes.func
  }

  static defaultProps = {
    pseudo4: '',
    handleChange: () => {}
  }

  render() {

    const { pseudo4 } = this.props

    return (

      <div class="table-responsive w3-card-4">
        <table class="table table-bordered">
          <thead>
            <tr class="w3-theme-d4">
              <th>SOLDER UNE DEMANDE</th>
            </tr>
          </thead>
            <tbody>
            <tr class="w3-theme-l2">
              <td>pseudo</td>
              <td class="w3-theme-l3"><input type="text" value={pseudo4} id="pseudo4" placeholder="pseudo"/></td>
            </tr>
            <tr class="w3-theme-l2">
              <td><button  class="w3-button w3-black btn btn-primary btn-sm btn btn-primary btn-block" onclick="">solder</button></td>
            </tr>

  </tbody>
  </table>
    </div>

    );

  }
}

export default SoldeDemand;
