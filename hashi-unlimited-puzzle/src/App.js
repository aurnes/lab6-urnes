import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import base, {auth} from './base';
import SignIn from './SignIn'
import Puzzle from './Puzzle'

class App extends Component {
  constructor() {
    super()

    this.state = {
      uid: null,
      elapsed: 0,
      start: Date.now()
    }


  }

  componentWillMount(){
      auth.onAuthStateChanged(
        (user) => {
          if(user){
            this.authHandler(user);
          }
        }
      )
  }
  signedIn = () => {
    this.timer = setInterval(this.tick, 1000);
    return this.state.uid;
  }

  signOut = () => {
    clearInterval(this.timer);
    auth
        .signOut()
        .then(() => {
            this.setState({uid: null })
        })
}

  tick = () =>{
    this.setState({ elapsed: new Date() - this.state.start });
  }

authHandler = (userData) => {
    this.setState(
                {uid: userData.uid}
                 )
    fetch('/users', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        "uid": this.state.uid
      })
    });

}

signout = () => {
  console.log('here')
    auth
        .signOut()
        .then(() => {
            this.setState({ uid: null})
        })
}

pad = (d) => {
  return (d < 10) ? '0' + d.toString() : d.toString();
}

  render() {
    var elapsed = Math.round(this.state.elapsed / 100);
    var total = Math.trunc(elapsed/10);
    var hours = Math.trunc(total/3600);
    var minutes = Math.trunc((total-hours*3600)/60);
    var seconds = (total - (minutes)*60);

    return (
      <div className="App">
        {this.signedIn()
          ?
          <div>
          <h1>Hashi Unlimited Puzzle</h1>
          <p>Hello!</p>
          {this.pad(hours)}:{this.pad(minutes)}:{this.pad(seconds)}
          
          <Puzzle />
          <button onClick={this.signout}>Sign Out</button>
          </div>
          : <SignIn />
        }
      </div>
    );
  }
}

export default App;
