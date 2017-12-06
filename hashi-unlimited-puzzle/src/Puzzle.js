import React, {Component} from 'react';
import Cell from './Cell'

class Puzzle extends Component {
    constructor() {
        super()
    
        this.state = {
          puzzle: [[]],
          currSource: [["node1", "node2", "node3", "node7"], ["node4", "node5", "node6", "node8"]],
          currHL: null
        }
      }
    
    handleClick(){
        console.log("asgas")
        var array = this.state.currSource
        array[0] = "node1"
        console.log(array)
        this.setState({currSource: array})
        console.log(this.state.currSource)
    }

    render(){
        return(
        <div id="puzzle">
            <Cell src={this.state.currSource[0][0]} onClick={this.handleClick.bind(this)} row_data="0" column_data="0" />
            <Cell src={this.state.currSource[0][1]} onClick={this.handleClick.bind(this)} row_data="0" column_data="1" />
            <Cell src={this.state.currSource[0][2]} onClick={this.handleClick.bind(this)} row_data="0" column_data="2" />
            <Cell src={this.state.currSource[0][3]} onClick={this.handleClick.bind(this)} row_data="0" column_data="3" />
            <br clear="all" />
            <Cell src={this.state.currSource[1][0]} onClick={this.handleClick.bind(this)} row_data="1" column_data="0" />
            <Cell src={this.state.currSource[1][1]} onClick={this.handleClick.bind(this)} row_data="1" column_data="1" />
            <Cell src={this.state.currSource[1][2]} onClick={this.handleClick.bind(this)} row_data="1" column_data="2" />
            <Cell src={this.state.currSource[1][3]} onClick={this.handleClick.bind(this)} row_data="1" column_data="3" />
        </div>
        )
    }
}

export default Puzzle