import React, { Component } from "react";

class Meals extends Component {
  state = {
    meals: [
      {
        mealId: 1,
        name: "Ghormesabzi",
        mealTime: "2021-06-21T12:30:00",
        cook: "ferizoozoo",
      },
    ],
  };

  render() {
    return (
      <div className="row">
        <h1 className="text-center">Meals</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">MealTime</th>
              <th scope="col">Cook</th>
            </tr>
          </thead>
          <tbody>
            {this.state.meals.map((meal, index) => (
              <tr key={meal.mealId}>
                <th scope="row">{index + 1}</th>
                <td>{meal.name}</td>
                <td>{meal.mealTime}</td>
                <td>{meal.cook}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Meals;
