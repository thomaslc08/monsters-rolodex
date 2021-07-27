import { React, Component, cloneElement } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  async componentDidMount() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    this.setState({ monsters: data });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(filteredMonsters);
    return (
      <div className="App">
        <form>
          <input type="search" placeholder="Search monster" onChange={(e) => this.setState({ searchField: e.target.value })}></input>
        </form>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
