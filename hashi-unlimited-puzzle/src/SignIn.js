import React from 'react';
import {auth, googleProvider} from './base'

const SignIn = () => {
    const authenticateGoogle = () => {
        auth.signInWithPopup(googleProvider)
    }
    return(
        <div className="SignIn">
            <h1>Hashi Unlimited Puzzle</h1>
            <button className="SignIn"
                onClick={authenticateGoogle}
            >
            <a><i className="fa fa-google" aria-hidden="true"></i>Sign In With Google</a>
            </button>
        </div>
    )
}

export default SignIn
