import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <>
        <div className="row d-flex justify-content-center">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Cooks</h5>
                <p className="card-text">Show list of cooks</p>
                <Link className="btn btn-primary" to="/cooks">
                  Cooks
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Meals</h5>
                <p className="card-text">Show list of meals</p>
                <Link className="btn btn-primary" to="/meals">
                  Meals
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Menu;
