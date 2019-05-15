import React from 'react'

class GetInfoDemand extends React.Component {

  render() {

    return (

      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>RECHERCHER UNE DEMANDE</th>
            </tr>
          </thead>
            <tbody>
      <tr>
        <td>Liste des groupes dont vous etes membre</td>
        <td></td>
      </tr>
      <tr>
        <td>Liste des groupes dont vous etes administrateur</td>
        <td></td>
      </tr>
      <tr>
        <td><strong>Choisir un groupe</strong></td>
        <td><input type="text" id="nomGroupe"  placeholder="groupe"/></td>
      </tr>
      <tr>
        <td><button class="w3-button w3-black btn btn-primary btn-sm btn btn-primary btn-block" onclick="_getMembresGroupe()">choisir</button></td>
      </tr>
      <tr>
        <td>membres</td>
        <td></td>
      </tr>
      <tr>
        <td>votre pseudo dans ce goupe</td>
        <td></td>
      </tr>
      <tr>
        <td><strong>selectionner un pseudo</strong></td>
        <td><input type="text" id="pseudo6" placeholder="pseudo"/></td>
      </tr>
      <tr>
        <td><button class="w3-button w3-black btn btn-primary btn-sm btn btn-primary btn-block" onclick="_membreInfo()">jouer</button></td>
      </tr>
      <tr>
        <th>Informations</th>
      </tr>
      <tr>
        <td>groupe</td>
        <td></td>
      </tr>
      <tr>
        <td>pseudo</td>
        <td></td>
      </tr>
      <tr>
        <td>addresse</td>
        <td></td>
      </tr>
      <tr>
        <td>Il vous a deja donne</td>
        <td></td>
      </tr>
      <tr>
        <td>Vous lui avez deja donne</td>
        <td></td>
      </tr>
      <tr>
        <th>Etat du canal de demande</th>
      </tr>
      <tr>
        <td>contrat cible (optionnel)</td>
        <td></td>
      </tr>
      <tr>
        <td>montant</td>
        <td></td>
      </tr>
      <tr>
        <td>en cours</td>
        <td></td>
      </tr>
      <tr>
        <td>description</td>
        <td></td>
      </tr>
  </tbody>
  </table>
    </div>

    );
  }
}

export default GetInfoDemand;
