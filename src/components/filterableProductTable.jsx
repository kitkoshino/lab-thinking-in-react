import React, {Component} from 'react';
import SearchBar from './searchBar';


class FilterableProductTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: this.props.products.data
    }
  }

  filterResult = (letter) => {
    const products = this.props.products.data.filter((product) => { 
      return product.name.includes(letter)
    });
    this.setState({
      products 
    });
  }

  render(){
    return (
      
      <div className="filterable-product-table">
        <SearchBar filter={this.filterResult}/>
        <table>
            <thead>
              <tr>
                <th>
                  Name
                </th>
                <th>
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
            {this.state.products.map((product, index, originalArray) => {
              return (
                <tr>
                  <td>
                    {product.name}
                  </td>
                  <td>
                    {product.price}
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    )
  }
}

export default FilterableProductTable;