import { Component } from "react";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
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
  render() {
    return (
      <>
        <div className="App">
          <input
            type="search"
            placeholder="Search Monster"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          {this.state.monsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
                <h2>{monster.email}</h2>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default App;
