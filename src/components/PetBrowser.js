import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  render() {
    // console.log(this.props.pets)
    const card = this.props.pets.map((pet) => (
      <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} />
    ));
    return <div className="ui cards">{card}</div>;
  }
}

export default PetBrowser;
