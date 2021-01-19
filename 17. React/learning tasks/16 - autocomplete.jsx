/* Autocomplete.jsx
Make Autocomplete component that has an input field and returns a list of countries starting with that letter(s) while you're typing.
*/

//////// SHOWCASE ON CODEPEN: https://codepen.io/lazy_ocean/pen/GRjejwQ

import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import _ from "lodash";

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "", countries: false };
  }
  handleChange = async (e) => {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    this.setState({
      query: value,
    });
    if (value) {
      const res = await axios.get(
        `https://autocomplete.travelpayouts.com/places2?term=${value}&locale=en&types[]=country`
      );

      let data = res.data;
      let names = data
        .map((item) => item.name)
        .filter((item) => item.startsWith(_.upperFirst(value)));
      this.setState({
        countries: names,
      });
    } else {
      this.setState({
        countries: false,
      });
    }
  };
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Country"
              value={this.state.query}
              onChange={this.handleChange}
            />
          </div>
        </form>
        {this.state.countries.length && (
          <ul>
            {this.state.countries.map((country) => (
              <li key={_.uniqueId()}>{country}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Autocomplete />, document.getElementById("container"));
