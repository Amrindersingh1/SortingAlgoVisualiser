import Element from "./components/Element";
import "./App.css";
import React, { Component } from "react";
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      numbers:  [3, 6, 5, 2, 1, 4, 8, 7, 9],
      colorArray: [
        "Azure",
        "Ivory",
        "Teal",
        "Purple",
        "Peagreen",
        "Orange",
        "Maroon",
        "Aquamarine",
        "Coral",
        "Fuchsia",
      ],
    };

    this.BubbleSort = this.BubbleSort.bind(this);
    this.SelectionSort = this.SelectionSort.bind(this);
    this.InsertionSort = this.InsertionSort.bind(this);
  }

  sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  async BubbleSort() {
    var tArray = this.state.numbers;
    var colorArray = this.state.colorArray;

    for (var i = 8; i >= 0; i--) {
      for (var j = 1; j <= i; j++) {
        await this.sleep(1000);
        if (tArray[j - 1] > tArray[j]) {
          var temp = tArray[j - 1];
          tArray[j - 1] = tArray[j];
          tArray[j] = temp;

          this.setState({
            numbers: tArray,
          });
        }
      }
    }
  }

  async SelectionSort() {
    var tArray = this.state.numbers;
    var minIdx,
      temp,
      len = tArray.length;
    for (var i = 0; i < len; i++) {
      minIdx = i;
      for (var j = i + 1; j < len; j++) {
        if (tArray[j] < tArray[minIdx]) {
          minIdx = j;
        }
      }
      temp = tArray[i];
      tArray[i] = tArray[minIdx];
      tArray[minIdx] = temp;

      this.setState({
        numbers: tArray,
      });

      await this.sleep(1000);
    }
  }

  async InsertionSort() {
    var tArray = this.state.numbers;
    var i,
      len = tArray.length,
      el,
      j;

    for (i = 1; i < len; i++) {
      el = tArray[i];
      j = i;

      while (j > 0 && tArray[j - 1] > tArray[j]) {
        tArray[j] = tArray[j - 1];
        j--;

        this.setState({
          numbers: tArray,
        });

        await this.sleep(1000);
      }

      tArray[j] = el;
    }
  }

  reset = () => {
    this.setState({
      numbers: [3, 6, 5, 2, 1, 4, 8, 7, 9],
    });
  };

  render() {
    var { numbers, colorArray } = this.state;
    return (
      <div id="container">
        <div className="App">
          {numbers.map((number) => (
            <Element
              key={number}
              value={number}
              color={colorArray[number - 1]}
            />
          ))}
        </div>
        <div id="SortButtons">
          <button onClick={this.BubbleSort}>Bubble Sort</button>
          <button onClick={this.SelectionSort}>Selection Sort</button>
          <button onClick={this.InsertionSort}>Insertion Sort</button>
          <button onClick={this.BubbleSort}>Merge Sort</button>
          <button onClick={this.BubbleSort}>Quick Sort</button>
          <button id="resetbtn" onClick={this.reset}>RESET</button>
        </div>
        
      </div>
    );
  }
}
