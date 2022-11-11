import React, { Component } from 'react'

class MyWelcome extends Component {
    // state = { name: 'James' } 
    // render() { 
    //     return (
    //         <h1>Welcome {this.state.name}, to my class component page</h1>
    //     );
    // }

    constructor(props) {
        super(props)
        this.state.name = props.name;
        // this.setState({name: props.name})
    }

    state = {};
    render() {
        return (
            <h1>Welcome {this.state.name}, to my class component page.</h1>
        )
    }
}
 
export default MyWelcome;