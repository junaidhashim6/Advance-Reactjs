import { Component } from "react";
import CardList from "./components/card-list/CardList";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
 
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => {
            return { monsters: users };
          }
        );
      });
  }
  onSearch = (e) => {
    const searchField = e.target.value.toLowerCase();
    
    this.setState(() => {
      return { searchField };
    });
  }
  render() {
    const {monsters, searchField} = this.state;
    const {onSearch} = this;
    const filterdMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    return (
      
        <div className="App">
          <input
            type="search"
            placeholder="Search Monster"
            onChange={onSearch}
          />
          <CardList monsters={filterdMonsters}/>
        </div>
    );
  }
}

export default App;
