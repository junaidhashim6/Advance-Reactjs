import { Component } from "react";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { name: "Linda" },
        { name: "Frank" },
        { name: "Jacky" },
        { name: "Andrei" },
      ],
    };
  }
  render() {
    return (
      <>
        <div className="App">
         {this.state.monsters.map((monster, id)=>{
          return(
            <h1 key={id}>{monster.name}</h1>
          ) 
         })}
        </div>
        
        
      </>
    );
  }
}

export default App;
