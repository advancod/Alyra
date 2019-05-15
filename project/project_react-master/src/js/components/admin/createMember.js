import React from 'react'

class CreateMember extends React.Component {

  render() {

    return (

      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>AJOUTER UN MEMBRE A UN GROUPE</th>
            </tr>
          </thead>
            <tbody>
            <tr>
              <td>addresse</td>
              <td><input type="text" id="membre" placeholder="membre"/></td>
            </tr>
            <tr>
              <td>pseudo</td>
              <td><input type="text" id="pseudo1" placeholder="pseudo"/></td>
            </tr>
            <tr>
              <td>groupe</td>
              <td><input type="text" id="groupe" placeholder="groupe"/></td>
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

export default CreateMember;
