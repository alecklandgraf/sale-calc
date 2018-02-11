import React, { Component } from 'react';
import './App.css';

const discounts = [5,10,15,20,25,30,35,40,45,50,55,60];

class App extends Component {
  state = {
    cost: 100,
    discount: 15
  }

  handleNumberPress = (number) => {
    const {cost} = this.state
    this.setState({
      cost: cost * 10 + number
    })
  }

  hanldeAllClear = () => {
    this.setState({cost: 0})
  }

  hanldeDelete = () => {
    const {cost} = this.state
    this.setState({cost: parseInt(`${cost/10}`, 10)})
  }

  handleDiscountPress = () => {
    const index = discounts.indexOf(this.state.discount);
    const discount = discounts[index + 1] || discounts[0];
    this.setState({discount})
  }

  render() {
    const {cost, discount} = this.state;
    const salePrice = parseInt(`${cost - cost * discount / 100}`, 10);
    return (
      <div className="wrapper">
        <div className="display">${cost} <span className="sale">${salePrice}</span></div>
        <div className="discount" onClick={this.handleDiscountPress}>{discount}%</div>
        <div className="pad seven" onClick={() => this.handleNumberPress(7)}>7</div>
        <div className="pad eight" onClick={() => this.handleNumberPress(8)}>8</div>
        <div className="pad nine" onClick={() => this.handleNumberPress(9)}>9</div>
        <div className="pad four" onClick={() => this.handleNumberPress(4)}>4</div>
        <div className="pad five" onClick={() => this.handleNumberPress(5)}>5</div>
        <div className="pad six" onClick={() => this.handleNumberPress(6)}>6</div>
        <div className="pad one" onClick={() => this.handleNumberPress(1)}>1</div>
        <div className="pad two" onClick={() => this.handleNumberPress(2)}>2</div>
        <div className="pad three" onClick={() => this.handleNumberPress(3)}>3</div>
        <div className="pad AC" onClick={this.hanldeAllClear}>AC</div>
        <div className="pad zero" onClick={() => this.handleNumberPress(0)}>0</div>
        <div className="pad delete" onClick={this.hanldeDelete}>delete</div>
      </div>
    );
  }
}

export default App;
