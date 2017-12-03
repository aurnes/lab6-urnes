import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import base, {auth} from './base';
import SignIn from './SignIn'

class App extends Component {
  constructor() {
    super()

    this.state = {
      uid: null
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
    return this.state.uid;
  }

  signOut = () => {
    auth
        .signOut()
        .then(() => {
            this.setState({uid: null })
        })
}

authHandler = (userData) => {
    this.setState(
                {uid: userData.uid}
                 )
    
}

signout = () => {
  console.log('here')
    auth
        .signOut()
        .then(() => {
            this.setState({ uid: null})
        })
}
  render() {
    return (
      <div className="App">
        {this.signedIn()
          ?
          <div>
          <h1>Hashi Unlimited Puzzle</h1>
          <p>Hello!</p>
          <button onClick={this.signout}>Sign Out</button>
          </div>
          : <SignIn />
        }
      </div>
    );
  }
}

export default App;
