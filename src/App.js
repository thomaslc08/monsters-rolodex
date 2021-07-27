import { getDefaultNormalizer } from "@testing-library/react";
import { React, Component, cloneElement } from "react";
import "./App.css";
import "./index.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

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

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(filteredMonsters);
    return (
      <div className="App">
        <h1>Monsters Rodolex</h1>
        <SearchBox
          placeholer="Search monsters"
          handleChange={this.handleChange}
        ></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
