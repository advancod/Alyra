import React from 'react'

class CreateGroup extends React.Component {

  render() {

    const { nom, pseudo } = this.props

    return (

      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>CREER UN GROUPE</th>
            </tr>
          </thead>
            <tbody>
              <tr>
                <td><strong>nom du groupe</strong></td>
                <td><input type="text" id="nom"  placeholder="nom"/></td>
              </tr>
              <tr>
                <td><strong>votre pseudo dans le groupe</strong></td>
                <td><input type="text" id="pseudo"  placeholder="pseudo"/></td>
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

export default CreateGroup;
