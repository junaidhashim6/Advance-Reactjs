import "./app.css";
import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox";
import { CardList } from "./components/CardList";
function App() {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) =>
      setMonsters(users));
  },[])
  
  console.log(searchField);
  const onSearch = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };
  const filterdMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().include(searchField);
  });
  return (
    <div className="App">
      <h1 className="app-title"> Monsters Rolodex</h1>
      <SearchBox onSearch={onSearch} placeholder="Search Monsters" />
      <CardList monsters={filterdMonsters} />
    </div>
  );
}

export default App;
