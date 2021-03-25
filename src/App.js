import React , {Component} from 'react';
import './App.css';
import {Cardlist} from './components/card-list/card-list.component';
import {Search} from './components/search-box/search-box.component';

class App extends Component{

  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }

  handleChange = e =>{
    this.setState({searchField:e.target.value})
  }

  render() {
    
    const { monsters , searchField } = this.state;
    const filteredMonster = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    
    
    return (
      <div className="App">
        <h1 className='header'>Monsters Rolodex</h1>
        <Search 
          placeholder='search monsters' 
          handler={this.handleChange}
        />
        <Cardlist monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
