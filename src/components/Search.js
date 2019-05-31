import React, { Component, Fragment } from "react";
import axios from "axios";
import ShowUp from "./ShowUp";
import Claim from "./Claim";
import SearchField from "./SearchField";
import debounce from "lodash/debounce";

class Search extends Component {
  state = {
    search: "",
    apiUrl: "https://pixabay.com/api/?key=3853168-44bf84f3cbf2fc4d3b25e031e",
    // debouncing API call by number of miliseconds below
    delay: 650,
    // images will be injected in the array below
    images: []
  };

  makeApiRequest = debounce(() => {
    axios
      .get(`${this.state.apiUrl}&q=${this.state.search}&image_type=photo`)
      .then(res => this.setState({ images: res.data.hits }))
      .catch(err => console.log(err));
  }, `${this.state.delay}`);

  onTextChange = e => {
    //assigning two way binding to a variable, so it's usable in if/else statement
    const val = e.target.value;
    this.setState(
      {
        [e.target.name]: val
      },
      //callback function
      () =>
        //if e.target.value (in val) is an empty string, clear out the array and display nothing
        {
          if (val.trim() === "") {
            this.setState({
              images: []
            });
          } else {
            // Axios request
            this.makeApiRequest();
          }
        }
    );
  };

  render() {
    return (
      <Fragment>
        <div className="wrapper">
          <Claim />
          <SearchField onTextChange={this.onTextChange} />
        </div>
        {/* needed for clearing if input is empty */}
        {this.state.images.length > 0 ? (
          <ShowUp images={this.state.images} />
        ) : null}
      </Fragment>
    );
  }
}

export default Search;
