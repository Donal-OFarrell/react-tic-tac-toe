import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// https://reactjs.org/tutorial/tutorial.html - Completing the game

class Square extends React.Component {
  constructor(props){
    super(props); // defining the constructor of a subclass 
    this.state = {
      value:null,
    };
  }
  render() {
    return (
      <button 
      className="square" 
      onClick= {() => this.setState({value: 'X'})}
      >
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component { // this is the parent passing info to the child above
  renderSquare(i) { // this is a seperate method 
    return <Square value={i} />; // it references the child and passes the prop value
  }
// that method gets called below for each number 
  render() {
    const status = 'Next player: X';
    //const test = 'Fuarkk';

    return (
      <div>
        <div className="status">{status}</div>
        
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
