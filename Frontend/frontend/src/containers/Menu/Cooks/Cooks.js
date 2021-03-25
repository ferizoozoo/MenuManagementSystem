import React, { Component } from "react";
import { getCooks } from "../../../services/CooksService";

class Cooks extends Component {
  state = {
    cooks: [{ cookId: 1, fullName: "ferizoozoo" }],
  };

  componentDidMount = () => {
    //const cooks = getCooks();
    //this.setState({cooks});
  };

  render() {
    return (
      <div className="row">
        <h1 className="text-center">Cooks</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">FullName</th>
            </tr>
          </thead>
          <tbody>
            {this.state.cooks.map((cook, index) => (
              <tr key={cook.cookId}>
                <th scope="row">{index + 1}</th>
                <td>{cook.fullName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Cooks;
