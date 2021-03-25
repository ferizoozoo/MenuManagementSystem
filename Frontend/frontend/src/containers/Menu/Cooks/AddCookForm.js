import React, { Component } from "react";

class AddCookForm extends Component {
  state = {
    cook: {},
  };

  componentDidMount = () => {};

  cookFormSubmitHandler = () => {};

  render() {
    return (
      <div className="cook-form">
        <h2>Add Cook</h2>
        <form>
          <div className="form-group">
            <label for="fullName">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Enter full name of cook"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Cook
          </button>
        </form>
      </div>
    );
  }
}

export default AddCookForm;
