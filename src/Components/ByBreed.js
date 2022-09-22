import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchByBreed } from "../redux/actions/byBreedActions";

class ByBreed extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleClick = () => {
    this.props.fetchByBreed(this.state.value);
  };

  render() {
    return (
      <div className="d-flex justify-content-around pt-5">
        <input
          type="text"
          value={this.value}
          onChange={this.handleChange}
        ></input>
        <button onClick={this.handleClick}>Search</button>
        <img src={this.props.image.dogName.message} alt="dog image" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    image: state.byBreed,
  };
};

const mapDispatchToProps = {
  fetchByBreed,
};

export default connect(mapStateToProps, mapDispatchToProps)(ByBreed);
