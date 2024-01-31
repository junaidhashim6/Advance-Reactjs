import { Component } from "react";
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
          },
          () => {
            console.log(this.state);
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

          {filterdMonsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
                <h2>{monster.email}</h2>
              </div>
            );
          })}
        </div>
    );
  }
}

export default App;
