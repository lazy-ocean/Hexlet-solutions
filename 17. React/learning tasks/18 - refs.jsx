/* MarkdownEditor.jsx
Write a MarkdownEditor component that is a React wrapper on jquery plugin bootstrap-markdown.

*/
import "bootstrap-markdown/js/bootstrap-markdown";
import "bootstrap-markdown/css/bootstrap-markdown.min.css";

import ReactDOM from "react-dom";
import React from "react";
import $ from "jquery";

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.rootElement = React.createRef();
  }

  componentDidMount() {
    $(this.rootElement.current).markdown({
      iconlibrary: "fa",
      onChange: this.onChange,
    });
  }

  onChange = (e) => {
    this.props.onContentChange(e.getContent());
  };

  render() {
    return <div data-provide="markdown-editable" ref={this.rootElement} />;
  }
}

ReactDOM.render(
  <MarkdownEditor onContentChange={console.log} />,
  document.getElementById("container")
);
