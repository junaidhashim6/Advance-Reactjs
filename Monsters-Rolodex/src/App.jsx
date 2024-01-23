import { Component } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstName: "Junaid", secondName: "Hashim" },
    };
  }
  render() {
    return (
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>
          Hello {this.state.name.firstName} {this.state.name.secondName}{" "}
        </h1>
        <button
          onClick={() => {
            this.setState(
              () => {
                return {
                  name: { firstName: "John", secondName: "Smith" },
                };
              },
              () => {
                console.log(this.state);
              }
            );
          }}
        >
          Change Name
        </button>
      </>
    );
  }
}

export default App;
