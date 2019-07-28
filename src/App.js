import React from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import { Game, characters } from "./utils/game.js";
import Modal, { ModalType } from "./components/Modal"
import "./App.css";




class App extends React.Component {
  game = new Game();

  state = {
    score: this.game.score,
    board: this.game.board,
    showModal: false,
    modalType: ModalType.lost
  }

  setGameState() {
    this.setState({ board: this.game.board, score: this.game.score })
    console.log(this.state)
  }

  wrongAnswer() {
    this.game.reset();
    this.setGameState()
    this.setState({ showModal: true, modalType: ModalType.lost })

  }

  wonTheGame() {
    this.setState({ showModal: true, modalType: ModalType.won })
  }

  selectCharacter = event => {
    event.stopPropagation();
    const id = event.target.id
    console.log(event.target)
    const isValidMove = this.game.select(parseInt(id))

    if (!isValidMove) {
      this.wrongAnswer()
    } else {
      this.game.randomizeBoard()
      this.setGameState()

      if (this.score === 12) {
        this.wonTheGame()
      }
    }
  }

  render() {
    return (
      <Container>
        <h1 className="title">Buffy Game</h1>
        <div className="score">Score: {this.state.score}</div>

        { this.state.showModal &&
          <Modal modalType={this.state.modalType} />
        }

        {this.state.board.map(character => (
          <Card
            imageId={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            onClick={this.selectCharacter}
          />
        ))}
      </Container>
    );
  }
}

export default App;

