import React, { Component } from 'react';
import axios from 'axios';
import './Wallet.css';

export class Wallet extends Component {
  state = {
    chain: [],
    balance: 0,
  };
  componentDidMount() {
    axios.get('http://localhost:5000/chain').then(res => {
      this.setState({
        chain: res.data.chain,
      });
    });
  }

  render() {
    let count = 0;
    console.log(this.state.chain);
    return (
      <div>
        <h1>My Wallet</h1>

        {this.state.chain &&
          this.state.chain.forEach(block => {
            console.log('Transactions per block', block.transactions);
            block.transactions.forEach(each => {
              if (each.recipient === 'justiny2c') {
                // this.add(each.amount);
                count += each.amount;
                console.log('I got coins');
              }
            });
          })}
        <div className='update'>
          <form>
            <input placeholder='Update ID?' />
          </form>
        </div>
        <div className='balance'>
          <h3> Current Balance: </h3>
          <p>{count} coins 💰</p>
        </div>
      </div>
    );
  }
}

export default Wallet;
