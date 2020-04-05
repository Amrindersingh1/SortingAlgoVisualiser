import Element from "./components/Element";
import "./App.css";
import React, { Component } from "react";
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      numbers: [3, 6, 5, 2, 1, 4, 8, 7, 9],
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
      sleep: 1000,
    };

    this.BubbleSort = this.BubbleSort.bind(this);
    this.SelectionSort = this.SelectionSort.bind(this);
    this.InsertionSort = this.InsertionSort.bind(this);
    this.QuickSort = this.QuickSort.bind(this);
  }

  sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  async BubbleSort() {
    var tArray = this.state.numbers;
    var colorArray = this.state.colorArray;

    for (var i = 8; i >= 0; i--) {
      for (var j = 1; j <= i; j++) {
        await this.sleep(this.state.sleep);
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

      await this.sleep(this.state.sleep);
    }
  }

  async InsertionSort() {
    var inputArr = this.state.numbers;
    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        let j = i - 1;
        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }
        inputArr[j + 1] = key;
        this.setState({
          numbers: inputArr,
        });
        await this.sleep(this.state.sleep); 
    }
   
  }

  mergeSort = async(arr) => {
    if (arr.length < 2) return arr;
  
    let middle = parseInt(arr.length / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle);
    
    await this.sleep(this.state.sleep); 
    let temp = this.merge(this.mergeSort(left), this.mergeSort(right));
    this.setState({
      numbers: temp,
    });

  }
  
  merge = (left, right) => {
    let result = [];
  
    while (left.length && right.length) {
      left[0] <= right[0] ?
      result.push(left.shift()) :
      result.push(right.shift());
    }
  
    while (left.length) result.push(left.shift());
    while (right.length) result.push(right.shift());

    
  
    return result;
  }

  async QuickSort(arr) {
    if(arr.length <= 1) return arr;
  
    let pivot = Math.floor((arr.length -1)/2);
    let val = arr[pivot], less = [], more = [];
  
    arr.splice(pivot, 1);
    for(const e of arr){
      e < val ? less.push(e) : more.push(e);
      this.setState({
        numbers: arr,
      });

      // await this.sleep(this.state.sleep);
    };

    let temp = [this.QuickSort(less),[val],this.QuickSort(more)];
  
    this.setState({
      numbers: temp,
    }); 
  }

  reset = () => {
    this.setState({
      numbers: [3, 6, 5, 2, 1, 4, 8, 7, 9],
      sleep: 1000
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
          
          <button id="resetbtn" onClick={this.reset}>
            RESET
          </button>
        </div>
      </div>
    );
  }
}
