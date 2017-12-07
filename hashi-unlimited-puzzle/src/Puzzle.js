import React, {Component} from 'react';
import Cell from './Cell'

class Puzzle extends Component {
    constructor() {
        super()
    
        this.state = {
          puzzle: [[]],
          currSource: [["node1", "node8", "node3", "node7"], ["node4", "bridge0", "node6", "node8"], ["node2", "node1", "bridge0", "bridge0"], ["node2", "node1", "bridge0", "bridge0"]],
          currHL: null
        }
      }

    componentWillMount(){
        var n = 4;
        var array = [["bridge0","bridge0","bridge0","bridge0"], ["bridge0","bridge0","bridge0","bridge0"], ["bridge0","bridge0","bridge0","bridge0"], ["bridge0","bridge0","bridge0","bridge0"]]
        var nodeCount = 0;
        var max = 3
        var i = parseFloat(this.getRandomInt(0, 4))
        //var j = 0;
        var j = parseFloat(this.getRandomInt(0, 4))
        var index = i + "" + j
        var nodes = [index]

        while(nodeCount<max){
            array[i][j] = "node"
           var direction = this.getRandomInt(0, 4)
           //var direction = 3
            if(direction == 0){
                console.log("UP")
                var cont = false;
                i--;
                while(i>=0 && array[i][j] != "node"){
                    if(i==0){
                        if(array[i+1][j]!="node"){
                            array[i][j] = "node";
                            var index = i + "" + j
                            if(!nodes.includes(index)){
                                nodeCount++;
                                nodes[nodeCount] = index
                            }
                        }
                        break;
                    }
                    if(array[i][j] === "bridge1_v"){
                        array[i][j] = "bridge2_v"
                    }
                    if(array[i][j] === "bridge0"){
                        array[i][j] = "bridge1_v"
                    }
                    if(array[i][j].includes("bridge") && !array[i][j].includes("_v") && !array[i][j].includes("bridge0")){
                        array[i][j] = "node"
                        var index = i + "" + j
                        if(!nodes.includes(index)){
                            nodeCount++;
                            nodes[nodeCount] = index
                        }
                        break;
                    }
                    i--;
                    if(cont && parseFloat(this.getRandomInt(0, 2)) == 1){
                        console.log(array)
                        array[i][j] = "node"
                        var index = i + "" + j
                        if(!nodes.includes(index)){
                            nodeCount++;
                            nodes[nodeCount] = index
                        }
                        break;
                    }
                    cont = true
                }
            }
            if(direction == 1){
                console.log("DOWN")
                i++;
                var cont = false;
                while(i<=3 && array[i][j] != "node"){
                    if(i==3){
                        if(array[i-1][j]!="node"){
                            array[i][j] = "node";
                            var index = i + "" + j
                            if(!nodes.includes(index)){
                                nodeCount++;
                                nodes[nodeCount] = index
                            }
                        }
                        break;
                    }
                    if(array[i][j] === "bridge1_v"){
                        array[i][j] = "bridge2_v"
                    }
                    if(array[i][j] === "bridge0"){
                        array[i][j] = "bridge1_v"
                    }
                    if(array[i][j].includes("bridge") && !array[i][j].includes("_v") && !array[i][j].includes("bridge0")){
                        array[i][j] = "node"
                        var index = i + "" + j
                        if(!nodes.includes(index)){
                            nodeCount++;
                            nodes[nodeCount] = index
                        }
                        break;
                    }
                    i++;
                    if(cont && parseFloat(this.getRandomInt(0, 2)) == 1){
                        array[i][j] = "node"
                        var index = i + "" + j
                        if(!nodes.includes(index)){
                            nodeCount++;
                            nodes[nodeCount] = index
                        }
                        break;
                    }
                    cont = true;
                }
            }
            if(direction == 2){
                console.log("LEFT")
                var cont = false
                j--;
                while(j>=0 && array[i][j] != "node"){
                    if(j==0){
                        if(array[i][j+1]!="node"){
                            array[i][j] = "node";
                            var index = i + "" + j
                            if(!nodes.includes(index)){
                                nodeCount++;
                                nodes[nodeCount] = index
                            }
                        }
                        break;
                    }
                    if(array[i][j] === "bridge1"){
                        array[i][j] = "bridge2"
                    }
                    if(array[i][j] === "bridge0"){
                        array[i][j] = "bridge1"
                    }
                    if(array[i][j].includes("bridge") && array[i][j].includes("_v") && !array[i][j].includes("bridge0")){
                        array[i][j] = "node"
                        nodeCount++;
                        nodes[nodeCount] = i + "" + j
                        break;
                    }
                    j--;
                    if(cont && parseFloat(this.getRandomInt(0, 2)) == 1){
                        array[i][j] = "node"
                        var index = i + "" + j
                        if(!nodes.includes(index)){
                            nodeCount++;
                            nodes[nodeCount] = index
                        }
                        break;
                    }
                    cont = true
                }
            }
            if(direction == 3){
                console.log("RIGHT")
                var cont = false
                j++;
                while(j<=3 && array[i][j] != "node"){
                    if(j==3){
                        if(array[i][j-1]!="node"){
                            array[i][j] = "node"
                            nodeCount++;
                            nodes[nodeCount] = i + "" + j
                        }
                        break;
                    }
                    if(array[i][j] === "bridge1"){
                        array[i][j] = "bridge2"
                    }
                    if(array[i][j] === "bridge0"){
                        array[i][j] = "bridge1"
                    }
                    if(array[i][j].includes("bridge") && array[i][j].includes("_v") && !array[i][j].includes("bridge0")){
                        array[i][j] = "node"
                        var index = i + "" + j
                        if(!nodes.includes(index)){
                            nodeCount++;
                            nodes[nodeCount] = index
                        }
                        break;
                    }
                    j++;
                    if(cont && parseFloat(this.getRandomInt(0, 2)) == 1){
                        array[i][j] = "node"
                        var index = i + "" + j
                        if(!nodes.includes(index)){
                            nodeCount++;
                            nodes[nodeCount] = index
                        }
                        break;
                    }
                    cont = true
                }
            }
            i = nodes[parseFloat(this.getRandomInt(0, nodeCount))][0]
            j = nodes[parseFloat(this.getRandomInt(0, nodeCount))][1]
            console.log("Current islands: " + nodes)
            console.log("Next starting from: " + i + "," + j)
        }

        console.log(array)

        //fill in numbers
        for(var k = 0; k<=max; k++){
            var bcount = 0;
            console.log(nodes[k])
            var i = parseFloat(nodes[k][0])
            var j = parseFloat(nodes[k][1])
            console.log(array[i][j])
            if(j+1 < n){
                if(array[i][j+1] === "bridge1"){
                    bcount++;
                }
                if(array[i][j+1] === "bridge2"){
                    bcount+=2;
                }
            }
            if(j-1 >= 0){
                if(array[i][j-1] === "bridge1"){
                    bcount++;
                }
                if(array[i][j-1] === "bridge2"){
                    bcount+=2;
                }
            }
            if(i+1 < n){
                if(array[i+1][j] === "bridge1_v"){
                    bcount++;
                }
                if(array[i+1][j] === "bridge2_v"){
                    bcount+=2;
                }
            }
            if(i-1 >= 0){
                console.log(array[i-1][j])
                if(array[i-1][j] === "bridge1_v"){
                    bcount++;
                }
                if(array[i-1][j] === "bridge2_v"){
                    bcount+=2;
                }
            }
            if(bcount>0){
                array[i][j] = "node" + bcount
            }
        }
        this.setState({puzzle: array})

        //remove bridges

        for(var i = 0; i<n; i++){
            for(var j = 0; j<n; j++){
                if(array[i][j].includes("bridge")){
                    array[i][j] = "bridge0"
                }
            }
        }
        this.setState({currSource: array})
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
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

    check(){
        if(this.state.currSource === this.state.puzzle){
            window.alert("YAY!")
            return true
        }
        return false
    }
    doneButton(){
        if(this.check()){
            this.props.finishPuzzle()
        }
    }

    render(){
        return(
        <div>
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
                <br clear="all" />
                <Cell src={this.state.currSource[3][0]} onClick={this.handleClick.bind(this)} row_data="3" column_data="0" currHL={this.state.currHL}/>
                <Cell src={this.state.currSource[3][1]} onClick={this.handleClick.bind(this)} row_data="3" column_data="1" currHL={this.state.currHL}/>
                <Cell src={this.state.currSource[3][2]} onClick={this.handleClick.bind(this)} row_data="3" column_data="2" currHL={this.state.currHL}/>
                <Cell src={this.state.currSource[3][3]} onClick={this.handleClick.bind(this)} row_data="3" column_data="3" currHL={this.state.currHL}/>
                
            </div>
            <button onClick={this.doneButton.bind(this)}>Done!</button>
        </div>
        )
    }
}

export default Puzzle