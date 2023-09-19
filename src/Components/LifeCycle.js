import React, { Component } from 'react'

//Mounting -> constructor -> render -> componentDidMount
//Updating -> state/props -> render ->
//Unmounting ->

export default class LifeCycle extends Component {

    //constructor
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }

    }
    //componentDidMount
    componentDidMount() {

    }
    //increment handler
    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    //render
    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handleIncrement}>+</button>
            </div>
        )
    }
}
