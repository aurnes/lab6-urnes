import React, { Component } from 'react';
import SignIn from './SignIn'
import Main from './Main'
import base, {auth} from './base';

class App extends Component {
    constructor(){
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
    authHandler = (userData) => {
        this.setState(
                    {uid: userData.uid}
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
                    //window.location.reload()
                })
                window.location.reload()
        }
        render(){
            return (
                <div>
                {this.signedIn()
                ? <Main signOut={this.signOut.bind(this)} uid={this.state.uid} />
                : <SignIn />
                }
                </div>
            )
        }
}

export default App
