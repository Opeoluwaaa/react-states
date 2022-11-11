import React, { Component } from 'react'
import './App.css';

class Button extends Component {

    constructor(props){
        super(props)
        this.state = { add : 'Add', sub : 'Sub', count : 'Zero' }
    } 

    aclick = () => {

        if (this.state.count === 10) {
            this.setState({count: 'Zero'});
            return;
        }
        if (this.state.count === 'Zero') {
            this.setState({count: 1});
            return;
        }

        this.setState({count: this.state.count + 1});   
    };

    sclick = () => {
        if (this.state.count === 0) {
            this.setState({count: 'Zero'});
            return;
        }
        if (this.state.count === 'Zero') {
            this.setState({count: 10});
            return;
        }
        this.setState({count: this.state.count - 1});
    };

    render() { 
        return (
            <div className='btn'>
                <label>{this.state.count}</label>
                <button className='plus' onClick={this.aclick}>{this.state.add}</button>
                <button className='minus' onClick={this.sclick}>{this.state.sub}</button>
            </div>
        );
    }
}
 
export default Button;