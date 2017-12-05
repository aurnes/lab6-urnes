import React, {Component} from 'react';
import Cell from './Cell'

class Puzzle extends Component {
    constructor() {
        super()
    
        this.state = {
          puzzle: [[]],
          currSource: "bridge",
          currHL: null
        }
      }
    
    highlight(ev){
        console.log(ev.target)
        //change name of currHL back
        //currHL = the one at its id
        //change image source - add "_h"
    }

    render(){
        return(
        <div>
            <Cell src="bridge2_v" onClick={this.highlight} row_data="0" column_data="3" />
            <Cell src="node" row_data="1" column_data="3" />
        </div>
        )
    }
}

export default Puzzle