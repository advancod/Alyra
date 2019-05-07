import React, { Component } from 'react'
import contractInstance from '../../options'

class PreviewGame extends Component {
  constructor() {
    super();
    this.state = {
      getNumCagnotte: '',
      getCagnotte: '',
      getNbGagnants: ''
		};
  }

  async componentDidMount() {

    this.setState({ getNumCagnotte: parseInt(await contractInstance.getNumCagnotte(),10) })
    this.setState({ getCagnotte: parseInt(await contractInstance.getCagnotte(),10) })
    this.setState({ getNbGagnants: parseInt(await contractInstance.getNbGagnants(),10) })
  }
  render() {

    return (

      <div className="table-responsive w3-card-4">
      <table className="table table-bordered">
        <thead>
          <tr className="w3-theme-d4">
            <th>RESULTATS DU JEUX PRECEDENT</th>
          </tr>
        </thead>
          <tbody>
            <tr className="w3-theme-l2">
              <td>numero du jeux</td>
              <td className="w3-theme-l3">{this.state.getNumCagnotte}</td>
            </tr>
            <tr className="w3-theme-l2">
              <td>cagnotte</td>
              <td className="w3-theme-l3">{this.state.getCagnotte}</td>
            </tr>
            <tr className="w3-theme-l2">
              <td>nombre de gagnants</td>
              <td className="w3-theme-l3">{this.state.getNbGagnants}</td>
            </tr>
      </tbody>
      </table>
      </div>

    );
  }
}

export default PreviewGame;
