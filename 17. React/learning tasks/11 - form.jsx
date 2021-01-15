/* MyForm.jsx
Create a registration form:
--- email - input email
--- password - input password
--- address - textarea
--- city - text input
--- country - select: argentina, russia, china.
--- Accept Rules - checkbox.

When clicking Sign in, form should be changed on a table with all entered data. Click on "Back" returns you to the form editing.
*/

////////// SHOWCASE ON CODEPEN: https://codepen.io/lazy_ocean/pen/KKgbNLy

import React from "react";
import ReactDOM from "react-dom";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      address: "",
      city: "",
      country: "",
      acceptRules: false,
      submitted: false,
    };
  }
  handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      submitted: !this.state.submitted,
    });
  };
  render() {
    const { submitted } = this.state;
    return (
      <>
        {!submitted && (
          <form name="myForm" onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="email" className="col-form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="password" className="col-form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="address" className="col-form-label">
                Address
              </label>
              <textarea
                type="text"
                className="form-control"
                name="address"
                id="address"
                placeholder="1234 Main St"
                value={this.state.address}
                onChange={this.handleChange}
              ></textarea>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="city" className="col-form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  id="city"
                  value={this.state.city}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="country" className="col-form-label">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="form-control"
                  value={this.state.country}
                  onChange={this.handleChange}
                >
                  <option>Choose</option>
                  <option value="argentina">Argentina</option>
                  <option value="russia">Russia</option>
                  <option value="china">China</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <label className="form-check-label" htmlFor="rules">
                  <input
                    id="rules"
                    type="checkbox"
                    name="acceptRules"
                    className="form-check-input"
                    checked={this.state.acceptRules}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary" value="Submit">
              Sign in
            </button>
          </form>
        )}
        {submitted && (
          <div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleSubmit}
            >
              Back
            </button>
            <table className="table">
              <tbody>
                <tr>
                  <td>acceptRules</td>
                  <td>{`${this.state.acceptRules}`}</td>
                </tr>
                <tr>
                  <td>address</td>
                  <td>{this.state.address}</td>
                </tr>
                <tr>
                  <td>city</td>
                  <td>{this.state.city}</td>
                </tr>
                <tr>
                  <td>country</td>
                  <td>{this.state.country}</td>
                </tr>
                <tr>
                  <td>email</td>
                  <td>{this.state.email}</td>
                </tr>
                <tr>
                  <td>password</td>
                  <td>{this.state.password}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById("container"));
