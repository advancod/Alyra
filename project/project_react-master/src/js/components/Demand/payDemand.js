import React from 'react'

class payDemand extends React.Component {

  render() {

    return (

      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>PAYER UNE DEMANDE - Gagnez des tokens</th>
            </tr>
          </thead>
            <tbody>
            <tr>
              <td><strong>pseudo du demandeur</strong></td>
              <td><input type="text" id="pseudo3" placeholder="pseudo"/></td>
            </tr>
            <tr>
              <td><strong>montant propose</strong></td>
              <td><input type="text" id="proposition" placeholder="montant"/></td>
            </tr>
            <tr>
              <td><button class="w3-button w3-black btn btn-primary btn-sm btn btn-primary btn-block" onclick="_membreInfo()">jouer</button></td>
            </tr>

  </tbody>
  </table>
    </div>

    );

  }
}

export default payDemand;
