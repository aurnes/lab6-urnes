import React, {Component} from 'react';
import './App.css'
import {auth, googleProvider} from './base'

class SignIn extends Component {
    authenticateGoogle () {
        auth.signInWithRedirect(googleProvider)
    }
    render(){
        return(
            <div className="SignIn">
                <h1>Hashi Unlimited Puzzle</h1>
                <button className="SignIn"
                    onClick={this.authenticateGoogle}
                >
                <a><i className="fa fa-google" aria-hidden="true"></i>Sign In With Google</a>
                </button>
                <button onClick={this.props.byPass}>Continue without logging in</button>
            </div>
        )
    }
}

export default SignIn
