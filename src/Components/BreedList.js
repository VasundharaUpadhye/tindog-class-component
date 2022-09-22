import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBreedList } from "../redux/actions/breedListActions";

class BreedList extends Component {
  constructor(props) {
    super();
    this.state = {
      value: 12,
    };
  }
  componentDidMount() {
    this.props.fetchBreedList();
  }

  displayDogImages(data) {
    return data?.slice(0, 12).map((item, i) => <img src={item} key={i} />);
  }

  render() {
    return (
      <div>
        <h1>Breed List</h1>
        {this.displayDogImages(this.props.dogsDisplay.breedData.message)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dogsDisplay: state.breedList,
  };
};

const mapDispatchToProps = {
  fetchBreedList,
};

export default connect(mapStateToProps, mapDispatchToProps)(BreedList);
