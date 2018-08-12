import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    
    handleChange(val) {
        this.setState({ userInput: val });
    }
    
    assignEvenAndOdds(userInput) {
        let evens = [];
        let odds = [];
        const toArray = this.state.userInput.split('');
        evens = toArray.filter((e) => e % 2 === 0);
        odds = toArray.filter((e) => e % 2 === 1);
        
        this.setState({
            evenArray: evens,
            oddArray: odds,
            userInput: '',
        })
      }



    render() {
                return (
            <div className='puzzleBox evenAndOddPB'>
                <h4> Evens and Odds </h4>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => { this.assignEvenAndOdds(this.state.userInput) }}> Split </button>
                <span className='resultsBox'> Evens: { JSON.stringify(this.state.evenArray) } </span>
                <span className='resultsBox'> Odds: { JSON.stringify(this.state.oddArray) } </span>
            </div>
        )
    };
}
