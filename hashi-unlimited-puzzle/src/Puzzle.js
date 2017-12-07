import React, {Component} from 'react';
import Cell from './Cell'

class Puzzle extends Component {
    constructor() {
        super()
    
        this.state = {
          puzzle: [[]],
          currSource: [["node1", "node8", "node3", "node7"], ["node4", "bridge0", "node6", "node8"], ["node2", "node1", "bridge0", "bridge0"]],
          currHL: null
        }
      }
    
    isClicked(index){
        return this.state.currHL === index
    }
    handleClick(row, column){
        console.log(row)
        console.log(column)
        var array = this.state.currSource
        //array[row][column] = "node1"
        console.log(array)
        this.setState({currSource: array})
        console.log(this.state.currSource)
        if(this.state.currHL != null){
            var i = this.state.currHL[0];
            var j = this.state.currHL[1]
            //var curr = 
            if(i==row){
                //HORIZONTAL
                if(j<column){
                    //GOING RIGHT
                    for(var k=parseFloat(j)+1; k<column; k++){
                        console.log("k: "+ k)
                        if(this.state.currSource[k][j].includes("bridge0") || !this.state.currSource[i][k].includes("_v")){
                            array[i][k] = this.newBridge(this.state.currSource[i][k])
                        }
                    }
                }
                if(j>column){
                    //GOING LEFT
                    for(var k=parseFloat(j)-1; k>column; k--){
                        console.log("k: "+ k)
                        if(this.state.currSource[k][j].includes("bridge0") || !this.state.currSource[i][k].includes("_v")){
                            array[i][k] = this.newBridge(this.state.currSource[i][k])
                        }
                    }
                }
            }
            if(j==column){
                //VERTICAL
                if(i<row){
                    //GOING DOWN
                    for(var k=parseFloat(i)+1; k<row; k++){
                        if(this.state.currSource[k][j].includes("bridge0") || this.state.currSource[k][j].includes("_v")){
                            array[k][j] = this.newBridge(this.state.currSource[k][j])+"_v"
                        }
                    }
                }
                if(i>row){
                    //GOING UP
                    for(var k=parseFloat(i)-1; k>row; k--){
                        if(this.state.currSource[k][j].includes("bridge0") || this.state.currSource[k][j].includes("_v")){
                            array[k][j] = this.newBridge(this.state.currSource[k][j])+"_v"
                        }
                    }
                }
            }

            this.setState({currSource: array})
            this.setState({currHL: null})
            return
        }
        this.setState({currHL: row+column})
    }

    newBridge(curr){
        if(curr.includes("bridge1")){
            return "bridge2"
        }
        if(curr.includes("bridge0")){
            return "bridge1"
        }
        if(curr.includes("bridge2")){
            return "bridge0"
        }
    }

    render(){
        return(
        <div id="puzzle">
            <Cell src={this.state.currSource[0][0]} onClick={this.handleClick.bind(this)} row_data="0" column_data="0" currHL={this.state.currHL}/>
            <Cell src={this.state.currSource[0][1]} onClick={this.handleClick.bind(this)} row_data="0" column_data="1" currHL={this.state.currHL}/>
            <Cell src={this.state.currSource[0][2]} onClick={this.handleClick.bind(this)} row_data="0" column_data="2" currHL={this.state.currHL}/>
            <Cell src={this.state.currSource[0][3]} onClick={this.handleClick.bind(this)} row_data="0" column_data="3" currHL={this.state.currHL}/>
            <br clear="all" />
            <Cell src={this.state.currSource[1][0]} onClick={this.handleClick.bind(this)} row_data="1" column_data="0" currHL={this.state.currHL}/>
            <Cell src={this.state.currSource[1][1]} onClick={this.handleClick.bind(this)} row_data="1" column_data="1" currHL={this.state.currHL}/>
            <Cell src={this.state.currSource[1][2]} onClick={this.handleClick.bind(this)} row_data="1" column_data="2" currHL={this.state.currHL}/>
            <Cell src={this.state.currSource[1][3]} onClick={this.handleClick.bind(this)} row_data="1" column_data="3" currHL={this.state.currHL}/>
            <br clear="all" />
            <Cell src={this.state.currSource[2][0]} onClick={this.handleClick.bind(this)} row_data="2" column_data="0" currHL={this.state.currHL}/>
            <Cell src={this.state.currSource[2][1]} onClick={this.handleClick.bind(this)} row_data="2" column_data="1" currHL={this.state.currHL}/>
            <Cell src={this.state.currSource[2][2]} onClick={this.handleClick.bind(this)} row_data="2" column_data="2" currHL={this.state.currHL}/>
            <Cell src={this.state.currSource[2][3]} onClick={this.handleClick.bind(this)} row_data="2" column_data="3" currHL={this.state.currHL}/>
        </div>
        )
    }
}

export default Puzzle