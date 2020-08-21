import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";
import Grid from "./component/grid";
import selectionSort from "./algorithm/selectionSort";
import "./App.css";

const rowArr = [
  { id: 1, number: "One", selectColor: "#f4f269" },
  { id: 2, number: "Two", selectColor: "#cee26b" },
  { id: 3, number: "Three", selectColor: "#a8d26d" },
  { id: 4, number: "Four", selectColor: "#82c26e" },
  { id: 5, number: "Five", selectColor: "#5cb270" },
];

class App extends Component {
  state = {
    shuffle: rowArr,
  };
  shuffle = (rows) => {
    let currentIndex = rows.length;
    let temporaryValue;
    let randomIndx;

    while (currentIndex !== 0) {
      randomIndx = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      temporaryValue = rows[currentIndex];
      rows[currentIndex] = rows[randomIndx];
      rows[randomIndx] = temporaryValue;
    }
    this.setState({ shuffle: rows });
  };
  sort = () => {
    const { shuffle } = this.state;
    this.setState({
      shuffle: selectionSort(shuffle),
    });
  };
  render() {
    const { shuffle } = this.state;
    return (
      <div>
        <Jumbotron>
          <h1 className="display-4">Selection Sort Algorithm</h1>
          <hr className="my-2" />
          <div>
            <Button color="primary" onClick={() => this.shuffle(rowArr)}>
              Reset
            </Button>
            {"  "}
            <Button color="success" onClick={() => this.sort()}>
              Sort
            </Button>
            <Grid rows={shuffle} />
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
