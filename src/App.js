import React from 'react';
import './App.css';

class ValueButton extends React.Component {
  updateVal(amount) {
    this.props.app.state.characters[this.props.i][this.props.name.toLowerCase()] += amount;
    this.props.app.updateCharacters();
  }

  render() {
    return (
      <div className="value-button">
        <button onClick={() => this.updateVal(-100)}>-100</button>
        <button onClick={() => this.updateVal(-10)}>-10</button>
        <button onClick={() => this.updateVal(-1)}>-1</button>
        <div className="value-button--value">
          {this.props.name}
          <br />
          {this.props.val}
        </div>
        <button onClick={() => this.updateVal(1)}>+1</button>
        <button onClick={() => this.updateVal(10)}>+10</button>
        <button onClick={() => this.updateVal(100)}>+100</button>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  componentWillMount() {
    let characters = localStorage.getItem('characters');
    if (characters) this.setState({ characters: JSON.parse(characters) });
  }

  removePlayer(i) {
    if (window.confirm('Are you sure?')) {
      this.state.characters.splice(i, 1);
      this.updateCharacters();
    }
  }

  updateCharacters() {
    this.setState({ characters: this.state.characters });
    localStorage.setItem('characters', JSON.stringify(this.state.characters));
  }

  renderCharacters() {
    if (this.state.characters.length === 0) return <p>No characters</p>;
    return this.state.characters.map((char, i) => (
      <div className="character" key={char.name}>
        <div className="character-name">
          {char.name}
          <button onClick={() => this.removePlayer(i)}>X</button>
        </div>
        <ValueButton i={i} val={char.hp} name="HP" app={this}></ValueButton>
        <ValueButton i={i} val={char.gold} name="Gold" app={this}></ValueButton>
      </div>
    ));
  }

  addPlayer() {
    let name = prompt('Player name:');
    if (!name) return;
    this.state.characters.push({ name, hp: 0, gold: 0 });
    this.updateCharacters();
  }

  render() {
    return (
      <>
        <div className="action-bar">
          <h2>D&D Tracker</h2>
        </div>
        <div className="container">
          <div className="characters-list">{this.renderCharacters()}</div>
        </div>
        <button className="fab" onClick={() => this.addPlayer()}>
          +
        </button>
        <p className="version-number">v0.4</p>
      </>
    );
  }
}

export default App;
