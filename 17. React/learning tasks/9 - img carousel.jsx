/* Carousel.jsx
Write a Carousel component that works as a Bootstrap's image slider.
*/

///////// SHOWCASE ON CODEPEN: https://codepen.io/lazy_ocean/pen/LYRXBLp
import React from "react";
import cn from "classnames";
import ReactDOM from "react-dom";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    const { images } = this.props;
    this.images = images.map((link) => ({ link: link, key: _.uniqueId() }));
    this.state = {
      active: 0,
    };
  }
  previousImg = (e) => {
    this.state.active == 0
      ? this.setState({ active: this.images.length - 1 })
      : this.setState({ active: ~~this.state.active - 1 });
  };
  nextImg = (e) => {
    this.state.active == this.images.length - 1
      ? this.setState({ active: 0 })
      : this.setState({ active: ~~this.state.active + 1 });
  };
  render() {
    return (
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {this.images.map((img, index) => {
            const classes = cn({
              "carousel-item": true,
              active: this.state.active == index,
            });
            return (
              <div className={classes} key={img.key}>
                <img alt="" className="d-block w-100" src={img.link} />
              </div>
            );
          })}
        </div>
        <a
          className="carousel-control-prev"
          href="#carousel"
          role="button"
          data-slide="prev"
          onClick={this.previousImg}
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel"
          role="button"
          data-slide="next"
          onClick={this.nextImg}
        >
          <span className="carousel-control-next-icon"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

const images = [
  "/images/first.jpeg",
  "/images/second.jpeg",
  "/images/third.jpeg",
];

ReactDOM.render(
  <Carousel images={images} />,
  document.getElementById("container")
);
