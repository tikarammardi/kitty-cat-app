import React, { Component } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import logo from './logo.png';

class App extends Component {
  state = {
    cats: [],
    searchfield: ''
  };

  onSearchChange = event => {
    this.setState({
      searchfield: event.target.value
    });

    console.log(event.target.value);
  };

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(cats => {
        console.log(cats);
        this.setState({ cats });
      });
  }

  render() {
    const findcats = this.state.cats.filter(cat => {
      return cat.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    if (!this.state.cats.length) return <div>Loading....</div>;
    else {
      return (
        <div className="container">
          <div className="inline-block">
            <img src={logo} className=" d-inline mr-5 pr-5" alt="cat-logo" />
            <h1 className="ml-5 pl-5 d-inline text-justify">
              Find your Purrfect Feline
            </h1>
          </div>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList cats={findcats} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
