//import logo from './logo.svg';
import './App.css';
import X from './x.png';
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  myButton: {
    width: 50,
    height: 50,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    margin:{
      top: -2,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  myInput: {
    width: 50,
    height: 50
  }
})

function MyButton(props) {
  const classes = useStyles()
  return <button disabled={props.disabled} onClick={props.onclick} id={props.idNum} className={classes.myButton}>{props.icon}</button>
}
function MyImage(props) {
  const classes = useStyles()
  return <input type="image" src={props.url} className={classes.myInput}/>
}
function MyText1(props){
  if(props.winSide === "X"){
    return <h1>{props.text}</h1>
  }else{
    return null;
  }  
}
function MyText2(props){
  if(props.winSide === "O"){
    return <h1>{props.text}</h1>
  }else{
    return null;
  }  
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //icon: "",
      //coordinate: [0, 0],
      //disabled: "",
      //flag: 0,
      next: 0,
      board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ],
      winSide: ""
    };
  }

  onclick = (x, y) => {
    const copy = Object.assign([], this.state.board);
    copy[x][y] = "";
    if(copy[0][0] === "X" && copy[0][1] === "X" && copy[0][2] === "X"){
      this.setState({
        winSide: "X"
      });
    }else if(copy[0][0] === "O" && copy[0][1] === "O" && copy[0][2] === "O"){
      this.setState({
        winSide: "O"
      });
    }
    else if (copy[x][y] !== null && this.state.next === 0) {
      copy[x][y] = "X";
      this.setState({
        //board[0,0] : "X",
        board: copy,
        next: 1
      });
      //console.log(this.state.next);
    }else if (copy[x][y] !== null && this.state.next === 1){
      copy[x][y] = "O";
      this.setState({
        board: copy,
        next: 0
      });
      //console.log(this.state.next);
    }
  }
  // disabled={this.state.board[0][0]!==null}
  render() {
    return (
      <div>
        <div>
          <MyButton disabled={this.state.board[0][0]!==null} icon={this.state.board[0][0]} onclick={()=>this.onclick(0, 0)}/>
          <MyButton disabled={this.state.board[0][1]!==null} icon={this.state.board[0][1]} onclick={()=>this.onclick(0, 1)}/>
          <MyButton disabled={this.state.board[0][2]!==null} icon={this.state.board[0][2]} onclick={()=>this.onclick(0, 2)}/>
        </div>
        <div>
          <MyButton disabled={this.state.board[1][0]!==null} icon={this.state.board[1][0]} onclick={()=>this.onclick(1, 0)}/>
          <MyButton disabled={this.state.board[1][1]!==null} icon={this.state.board[1][1]} onclick={()=>this.onclick(1, 1)}/>
          <MyButton disabled={this.state.board[1][2]!==null} icon={this.state.board[1][2]} onclick={()=>this.onclick(1, 2)}/>
        </div>
        <div>
          <MyButton disabled={this.state.board[2][0]!==null} icon={this.state.board[2][0]} onclick={()=>this.onclick(2, 0)}/>
          <MyButton disabled={this.state.board[2][1]!==null} icon={this.state.board[2][1]} onclick={()=>this.onclick(2, 1)}/>
          <MyButton disabled={this.state.board[2][2]!==null} icon={this.state.board[2][2]} onclick={()=>this.onclick(2, 2)}/>
        </div>
        <div>
          <MyImage url={X} />
        </div>
        <div>
          <MyText1 text="User X wins" winSide={this.state.winSide}/>
        </div>
        <div>
          <MyText2 text="User O wins" winSide={this.state.winSide}/>
        </div>

      </div>

    );
  }

}

export default App;
