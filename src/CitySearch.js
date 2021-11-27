import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { InfoAlert } from "./Alert";

class CitySearch extends Component {
  state = {
    query: "",
    suggestions: [],
    showSuggestions: undefined,
  };

  handleWindowClick(e) {
    if (
      this.state.showSuggestions &&
      !(this.textInput.current && this.textInput.current.contains(e.target))
    ) {
      this.setState({
        showSuggestions: false,
      });
    }
  }

  componentDidMount() {
    this.handleWindowClickBound = this.handleWindowClick.bind(this);
    this.textInput = React.createRef();
    window.addEventListener("click", this.handleWindowClickBound);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleWindowClickBound);
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ showSuggestions: true });
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText:
          "We can not find the city you are looking for. Please try another city",
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText: "",
      });
    }
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false,
    });

    this.props.updateEvents(suggestion);
  };

  render() {
    return (
      <div className="CitySearch" ref={this.textInput}>
        <InfoAlert text={this.state.infoText} />
        <Form.Control
          size="lg"
          type="text"
          className="searchBar"
          value={this.state.query}
          onChange={this.handleInputChanged}
          onFocus={() => {
            this.setState({ showSuggestions: true });
          }}
          placeholder="Search for city"
        />
        <ul
          className="suggestions"
          style={this.state.showSuggestions ? {} : { display: "none" }}
        >
          {this.state.suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
            >
              {suggestion}
            </li>
          ))}
          <li onClick={() => this.handleItemClicked("all")}>
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;
