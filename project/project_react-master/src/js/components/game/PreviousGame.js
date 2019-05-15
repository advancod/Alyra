import React from 'react'

class PreviousGame extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (

      <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>RESULTATS DU JEUX PRECEDENT</th>
          </tr>
        </thead>
          <tbody>
            <tr>
              <td>numero du jeux</td>
              <td>{this.props.getNumCagnotte}</td>
            </tr>
            <tr>
              <td>cagnotte</td>
              <td>{this.props.getCagnotte}</td>
            </tr>
            <tr>
              <td>nombre de gagnants</td>
              <td>{this.props.getNbGagnants}</td>
            </tr>
      </tbody>
      </table>
      </div>

    );
  }
}

export default PreviousGame;
