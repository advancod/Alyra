import React from 'react'

class SoldeDemand extends React.Component {

  render() {

    return (

      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>SOLDER UNE DEMANDE</th>
            </tr>
          </thead>
            <tbody>
            <tr>
              <td><strong>pseudo</strong></td>
              <td><input type="text" id="pseudo4" placeholder="pseudo"/></td>
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

export default SoldeDemand;
