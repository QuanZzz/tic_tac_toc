import './App.css';
import React from 'react';
import Cell from './components/Cell'
import XWinText from './components/XWinText'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      next: 0,
      board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ],
      winSide: ""
    };
  }
  decideWhichWins(newBoardPattern) {
    if (newBoardPattern[0][0] === "X" && newBoardPattern[0][1] === "X" && newBoardPattern[0][2] === "X") {
      this.setState({
        winSide: "X"
      });
    } else if (newBoardPattern[1][0] === "X" && newBoardPattern[1][1] === "X" && newBoardPattern[1][2] === "X") {
      this.setState({
        winSide: "X"
      });
    } else if (newBoardPattern[2][0] === "X" && newBoardPattern[2][1] === "X" && newBoardPattern[2][2] === "X") {
      this.setState({
        winSide: "X"
      });
    } else if (newBoardPattern[0][0] === "X" && newBoardPattern[1][0] === "X" && newBoardPattern[2][0] === "X") {
      this.setState({
        winSide: "X"
      });
    } else if (newBoardPattern[0][1] === "X" && newBoardPattern[1][1] === "X" && newBoardPattern[2][1] === "X") {
      this.setState({
        winSide: "X"
      });
    } else if (newBoardPattern[0][2] === "X" && newBoardPattern[1][2] === "X" && newBoardPattern[2][2] === "X") {
      this.setState({
        winSide: "X"
      });
    } else if (newBoardPattern[0][0] === "X" && newBoardPattern[1][1] === "X" && newBoardPattern[2][2] === "X") {
      this.setState({
        winSide: "X"
      });
    } else if (newBoardPattern[0][2] === "X" && newBoardPattern[1][1] === "X" && newBoardPattern[2][0] === "X") {
      this.setState({
        winSide: "X"
      });
    } else if (newBoardPattern[0][0] === "O" && newBoardPattern[0][1] === "O" && newBoardPattern[0][2] === "O") {
      this.setState({
        winSide: "O"
      });
    } else if (newBoardPattern[1][0] === "O" && newBoardPattern[1][1] === "O" && newBoardPattern[1][2] === "O") {
      this.setState({
        winSide: "O"
      });
    } else if (newBoardPattern[2][0] === "O" && newBoardPattern[2][1] === "O" && newBoardPattern[2][2] === "O") {
      this.setState({
        winSide: "O"
      });
    } else if (newBoardPattern[0][0] === "O" && newBoardPattern[1][0] === "O" && newBoardPattern[2][0] === "O") {
      this.setState({
        winSide: "O"
      });
    } else if (newBoardPattern[0][1] === "O" && newBoardPattern[1][1] === "O" && newBoardPattern[2][1] === "O") {
      this.setState({
        winSide: "O"
      });
    } else if (newBoardPattern[0][2] === "O" && newBoardPattern[1][2] === "O" && newBoardPattern[2][2] === "O") {
      this.setState({
        winSide: "O"
      });
    } else if (newBoardPattern[0][0] === "O" && newBoardPattern[1][1] === "O" && newBoardPattern[2][2] === "O") {
      this.setState({
        winSide: "O"
      });
    } else if (newBoardPattern[0][2] === "O" && newBoardPattern[1][1] === "O" && newBoardPattern[2][0] === "O") {
      this.setState({
        winSide: "O"
      });
    }
  }
  onclick = (x, y) => {
    const copy = Object.assign([], this.state.board);
    copy[x][y] = "";
    if (copy[x][y] !== null && this.state.next === 0) {
      copy[x][y] = "X";
      this.setState({
        board: copy,
        next: 1
      });
    } else if (copy[x][y] !== null && this.state.next === 1) {
      copy[x][y] = "O";
      this.setState({
        board: copy,
        next: 0
      });
    }
    this.decideWhichWins(copy);
  }
  render() {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <Cell disabled={this.state.board[0][0] !== null} icon={this.state.board[0][0]} onclick={() => this.onclick(0, 0)} />
          <Cell disabled={this.state.board[0][1] !== null} icon={this.state.board[0][1]} onclick={() => this.onclick(0, 1)} />
          <Cell disabled={this.state.board[0][2] !== null} icon={this.state.board[0][2]} onclick={() => this.onclick(0, 2)} />
        </div>
        <div style={{ display: "flex" }}>
          <Cell disabled={this.state.board[1][0] !== null} icon={this.state.board[1][0]} onclick={() => this.onclick(1, 0)} />
          <Cell disabled={this.state.board[1][1] !== null} icon={this.state.board[1][1]} onclick={() => this.onclick(1, 1)} />
          <Cell disabled={this.state.board[1][2] !== null} icon={this.state.board[1][2]} onclick={() => this.onclick(1, 2)} />
        </div>
        <div style={{ display: "flex" }}>
          <Cell disabled={this.state.board[2][0] !== null} icon={this.state.board[2][0]} onclick={() => this.onclick(2, 0)} />
          <Cell disabled={this.state.board[2][1] !== null} icon={this.state.board[2][1]} onclick={() => this.onclick(2, 1)} />
          <Cell disabled={this.state.board[2][2] !== null} icon={this.state.board[2][2]} onclick={() => this.onclick(2, 2)} />
        </div>
        <div>
          <XWinText XWinText="User X wins" OWinText="User O Wins" winSide={this.state.winSide} />
        </div>

      </div>

    );
  }

}

export default App;
