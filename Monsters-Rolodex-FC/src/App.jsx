import "./app.css";
import { useState } from "react";
import SearchBox from "./components/SearchBox";
function App() {
  const [searchField, SetsearchField] = useState("");
  console.log(searchField);
  const onSearch = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    SetsearchField(searchFieldString);
  };
  return (
    <div className="App">
      <h1 className="app-title"> Monsters Rolodex</h1>
      <SearchBox onSearch={onSearch} placeholder="Search Monsters" />
    </div>
  );
}

export default App;
