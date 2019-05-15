import React from 'react'

class CreateDemand extends React.Component {

  render() {

    return (

      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>CREER UNE DEMANDE</th>
            </tr>
          </thead>
            <tbody>
              <tr>
                <td><strong>pseudo</strong></td>
                <td><input type="text" id="pseudo2" placeholder="pseudo" /></td>
              </tr>
              <tr>
                <td><strong>montant</strong></td>
                <td><input type="text" id="montant" placeholder="montant"/></td>
              </tr>
              <tr>
                <td><strong>contrat cible (optionnel)</strong></td>
                <td><input type="text" id="contrat" placeholder="addresse" /></td>
              </tr>
              <tr>
                <td><strong>description</strong></td>
                <td><input type="text" id="description" placeholder="description" /></td>
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

export default CreateDemand;
