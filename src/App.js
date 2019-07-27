import React from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import characters from "./utils/characters.js";
import "./App.css";

class App extends React.Component {

  state = {
    characters
  }

  render() {
    return (
      <Container>
        <h1 className="title">Buffy Game</h1>

      {this.state.characters.map(character => (
        <Card
        id={character.id}
        key={character.id}
        name={character.name}
        image={character.image}
        />
      ))}        
      </Container>
    );
  }
}

export default App;

