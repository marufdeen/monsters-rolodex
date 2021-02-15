import React, { Component } from "react"; 
import { CardList } from './components/cardList/CardList'; 
import SearchBox from './components/searchBox/SearchBox';
import './App.css';
class App extends Component {
  state = {
    monsters: [],
    searchField: ''
  };
  componentDidMount() { 
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respnse) => respnse.json())
      .then((users) => this.setState({ monsters: users }));
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }
  render() { 
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter( (monster) => 
    monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()) );

    return (
      <div className='App'>
      <h1> Monsters Rolodex </h1>
      <SearchBox
      placeholder = 'Search Monsters'
      handleChange = {this.handleChange } 
      />
      <CardList monsters = {filteredMonster} />
      </div>
    );
  }
}

export default App;
