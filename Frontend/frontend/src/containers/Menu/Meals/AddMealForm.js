import React, { Component } from "react";

class AddMealForm extends Component {
  state = {
    meal: {},
  };

  componentDidMount = () => {};

  mealFormSubmitHandler = () => {};

  render() {
    return (
      <div className="meal-form">
        <h2>Add Meal</h2>
        <form>
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter meal name"
            />
          </div>
          <div className="form-group">
            <label for="mealTime">Meal Time</label>
            <input type="date" className="form-control" id="mealTime" />
          </div>
          <div class="form-group">
            <label for="cook">Cook</label>
            <select id="cook" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Add Meal
          </button>
        </form>
      </div>
    );
  }
}

export default AddMealForm;
