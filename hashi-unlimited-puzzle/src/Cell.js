import React, {Component} from 'react'
import bridge from './icons/bridge1.png'
import node from './icons/node.png'
import bridge_v from './icons/bridge_v1.png'
import bridge2_v from './icons/bridge_v2.png'
import node_h from './icons/node_h.png'
import bridge0 from './icons/bridge0.png'
import bridge1 from './icons/bridge1.png'
import bridge2 from './icons/bridge2.png'
import node1 from './icons/node1.png'
import node1_h from './icons/node1_h.png'
import node2 from './icons/node2.png'
import node2_h from './icons/node2_h.png'
import node3 from './icons/node3.png'
import node3_h from './icons/node3_h.png'
import node4 from './icons/node4.png'
import node4_h from './icons/node4_h.png'
import node5 from './icons/node5.png'
import node5_h from './icons/node5_h.png'
import node6 from './icons/node6.png'
import node6_h from './icons/node6_h.png'
import node7 from './icons/node7.png'
import node7_h from './icons/node7_h.png'
import node8 from './icons/node8.png'
import node8_h from './icons/node8_h.png'

class Cell extends Component {
    constructor(){
        super()
        this.state = {
            isClicked: false
        }
    }
    componentWillMount(){
        console.log(this.props.src)
    }

    componentWillReceiveNewProps(){
        //uhhhhhhhhh
    }

    highlight(){
        if(this.props.src.includes("node")){
            this.setState({isClicked: !this.state.isClicked})
        }
        this.props.onClick()
    }
    render(){
        var allImages = {}
        allImages['bridge'] = bridge
        allImages['node'] = node
        allImages['bridge_v'] = bridge_v
        allImages['bridge2_v'] = bridge2_v
        allImages['bridge0'] = bridge0
        allImages['bridge1'] = bridge1
        allImages['bridge2'] = bridge2
        allImages['node_h'] = node_h
        allImages['node1'] = node1
        allImages['node1_h'] = node1_h
        allImages['node2_h'] = node2_h
        allImages['node2'] = node2
        allImages['node3_h'] = node3_h
        allImages['node3'] = node3
        allImages['node4_h'] = node4_h
        allImages['node4'] = node4
        allImages['node5_h'] = node5_h
        allImages['node5'] = node5
        allImages['node6_h'] = node6_h
        allImages['node6'] = node6
        allImages['node7_h'] = node7_h
        allImages['node7'] = node7
        allImages['node8_h'] = node8_h
        allImages['node8'] = node8
        
        return(
            <div className="cell">
                {this.state.isClicked
                    ?
                    <img src={allImages[`${this.props.src}_h`]} onClick = {this.highlight.bind(this)}/>
                    :
                    <img src={allImages[`${this.props.src}`]} onClick = {this.highlight.bind(this)}/>
                }
            </div>
        )
    }
}

export default Cell