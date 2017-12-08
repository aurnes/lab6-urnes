import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import banner from './icons/banner.png'
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
      hi: "Go!",
      bypass: false
    }


  }

  componentWillMount(){
      this.setState( {uid: this.props.uid, bypass: this.props.bypass});
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
  if(!this.state.bypass){
    fetch('/users', {
    method: 'post',
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      "uid": this.state.uid,
      "time": time
    })
  }).then((response) => response.json()).then((res) => this.setState({ hi: res.hi}));
}

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
            <p className="timer">{this.pad(hours)}:{this.pad(minutes)}:{this.pad(seconds)}</p>

          }
          <p>{this.state.hi}</p>


          <Puzzle reload={this.reload} signOut={this.props.signOut} finishPuzzle={this.finishPuzzle.bind(this)}/>
          <div className="inst" style={{width: "58vh", position: "relative", left: "10px", border: "1px solid black", textAlign: "left"}}>
            <img src={banner} style={{width: "58vh", height: "20"}} />
            <br/>
            <b>How To Play</b><br/>
            1. Click a node to highlight it.<br/>
            2. Click another node to draw a straight line.<br/>
            3. Repeat for a double bridge, delete bridge, etc.<br/>
            4. Each node has a number that represents the number of bridges it should have total.<br/>
            5. Try to connect all the nodes!<br/>
            <a href="https://en.wikipedia.org/wiki/Hashiwokakero">More Information</a>
          </div>
          </div>

      </div>
    );
  }
}

export default Main;
