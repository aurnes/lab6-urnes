import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Puzzle from './Puzzle'

class Main extends Component {
  constructor() {
    super()

    this.state = {
      uid: null,
      elapsed: 0,
      start: Date.now(),
      finished: false,
      totalTime: "00:00:00",
      hi: null
    }


  }

  componentWillMount(){
      this.setState( {uid: this.props.uid});
      this.timer = setInterval(this.tick, 50);
  }

  //clearInterval(this.timer);


  tick = () =>{
    if(!this.isFinished()){
    this.setState({ elapsed: new Date() - this.state.start });
  }
  }



pad = (d) => {
  return (d < 10) ? '0' + d.toString() : d.toString();
}
finishPuzzle(){
  var time = this.getTotalTime();
  fetch('/users', {
    method: 'post',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
      "uid": this.state.uid,
      "time": time
    })
  }).then((response) => response.json()).then((res) => this.setState({ hi: res.hi}));

  this.setState({finished: true})
}

isFinished(){
  return this.state.finished
}

getTotalTime(){
  var elapsed = Math.round(this.state.elapsed / 100);
  var total = Math.trunc(elapsed/10);
  var hours = Math.trunc(total/3600);
  var minutes = Math.trunc((total-hours*3600)/60);
  var seconds = (total - (minutes)*60);
  var stringver = "" + this.pad(hours) + "\:";
  stringver = stringver + this.pad(minutes) + "\:";
  stringver = stringver + this.pad(seconds);
  this.setState({totalTime: stringver})

  return stringver;
}

reload(){
  window.location.reload()
}

  render() {
    var elapsed = Math.round(this.state.elapsed / 100);
    var total = Math.trunc(elapsed/10);
    var hours = Math.trunc(total/3600);
    var minutes = Math.trunc((total-hours*3600)/60);
    var seconds = (total - (minutes)*60);

    return (
      <div className="App">
          <div>
          <h1>Hashi Unlimited Puzzle</h1>
          {this.isFinished()
            ?
            <p>{this.state.totalTime}</p>
            :
            <p>{this.pad(hours)}:{this.pad(minutes)}:{this.pad(seconds)}</p>

          }
          <p>{this.state.hi}</p>


          <Puzzle finishPuzzle={this.finishPuzzle.bind(this)}/>
          <button onClick={this.reload}>New puzzle</button>
          <button onClick={this.props.signOut}>Sign out</button>

          </div>
      </div>
    );
  }
}

export default Main;
