import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRandomDog } from "../redux/actions/randomDogActions";
import { Button } from "react-bootstrap";

class RandomDog extends Component {
  componentDidMount() {
    this.props.fetchRandomDog();
  }

  handleClick = () => {
    this.props.fetchRandomDog();
  };

  render() {
    return (
      <div>
        <img src={this.props.image.dogsData.message} />
        <Button onClick={this.handleClick}>DOG IMAGE</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    image: state.randomDog,
  };
};

const mapDispatchToProps = {
  fetchRandomDog,
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomDog);
