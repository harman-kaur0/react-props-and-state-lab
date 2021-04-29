import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all",
      },
    };
  }

  changeType = (e) => {
    this.setState({
      filters: { ...this.state.filters, type: e.target.value },
    });
  };

  fetchData = () => {
    let url = "";
    this.state.filters.type === "all"
      ? (url = "/api/pets")
      : (url = `/api/pets?type=${this.state.filters.type}`);
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => this.setState({ pets: data }));
  };

  adoptPet = (id) => {
    let p = this.state.pets.map((pet) =>
      pet.id === id ? { ...pet, isAdopted: true } : pet
    );
    this.setState({
      pets: p,
    });
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.changeType}
                onFindPetsClick={this.fetchData}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
