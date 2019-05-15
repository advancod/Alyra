import React from 'react'

class Withdraw extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (

      <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>RECUPERER SES GAINS</th>
          </tr>
        </thead>
          <tbody>
            <tr>
              <td>mes gains</td>
              <td>{this.props.getGains}</td>
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

export default Withdraw;
