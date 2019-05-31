import React, { Component } from 'react'
import contractInstance from '../../options'

export default class  payDemand extends Component {

  constructor() {
    super();
    this.state = {
      proposition: '',
      pseudo3: ''
    };
    this._payerCanal = this._payerCanal.bind(this)
  }

  handleChange = name => event => {
   this.setState({ [name]: event.target.value });
 };

  async _payerCanal() {
      await window.ethereum.enable()
    	await contractInstance.payerCanal(this.state.pseudo3, {value : parseInt(this.state.proposition,10)})
  }

  render() {

    return (
<View><Text>RECHERCHER UNE DEMANDE</Text></View>


  </tbody>
  </table>
    </div>

    );

  }
}
