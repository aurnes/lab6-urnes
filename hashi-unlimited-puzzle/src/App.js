import React, { Component } from 'react';
import SignIn from './SignIn'
import Main from './Main'
import base, {auth} from './base';

class App extends Component {
    constructor(){
        super()
        this.state = {
            uid: null,
            bypass: false
        }
    }
    componentWillMount(){
        require('create-react-class');
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
    byPass(){
        this.setState({bypass: true})
    }
    signedIn = () => {
            if(this.state.bypass){
                return true
            }
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
                : <SignIn byPass={this.byPass.bind(this)} />
                }
                </div>
            )
        }
}

export default App
