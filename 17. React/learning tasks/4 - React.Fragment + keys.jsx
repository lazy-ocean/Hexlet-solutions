/* dl-dt-dd collections
Write a component Definitions that takes data as an object and returns proper HTML structure of <dl> list out of it:
const definitions = [
  { dt: 'one', dd: 'two' },
  { dt: 'another term', dd: 'another description' },
];

Result:
<dl>
  <dt>one</dt>
  <dd>two</dd>
  <dt>another term</dt>
  <dd>another description</dd>
</dl>

If no data was argumented, render nothing.
*/
import _ from "lodash";
import React from "react";
import ReactDOM from "react-dom";

class Definitions extends React.Component {
  render() {
    const { data } = this.props;

    return Object.keys(data).length ? (
      <dl>
        {data.map((item) => (
          <React.Fragment key={_.uniqueId()}>
            <dt>{item.dt}</dt>
            <dd>{item.dd}</dd>
          </React.Fragment>
        ))}
      </dl>
    ) : null;
  }
}

const definitions = [
  { dt: "one", dd: "two" },
  { dt: "another term", dd: "another description" },
];

ReactDOM.render(
  <Definitions data={definitions} />,
  document.getElementById("container")
);
