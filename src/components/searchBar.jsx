import React, { Component } from 'react';
import './searchbar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
    }
  }

  handleInputChange = event => {
    const $inputDomNode = event.target;
    const inputName = $inputDomNode.name;
    const value = $inputDomNode.value;

    this.props.filter(value);

  };

  render() {
  
    return (
      <div className="search-container">
        <h4>Search</h4>
        <form onSubmit={this.handleFormSubmission}>
          <input type="text" id="searchField" onChange={this.handleInputChange} value={this.state.name}/>
        </form>
        <div className="stock-container">
          <input type="checkbox" id="stockProducts" />
          <label htmlFor="stockProducts">Only show products on stock</label>
        </div>
      </div>
    );
  }
}

export default SearchBar;
