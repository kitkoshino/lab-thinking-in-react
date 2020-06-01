import React, {Component} from 'react';
import FilterableProductTable from './components/filterableProductTable';
import data from './data.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        
        <FilterableProductTable products={data}/>
        
      </div>
    );
  }
  
}

export default App;
