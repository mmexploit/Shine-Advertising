import React, { Component } from 'react'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.css'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'


export class SignIn extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         email: "",
         password: "",
      }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: "", password: ""});
        }  catch(error) {
            console.log(error)
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value})
    }
 

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" type="email" label="Email" handleChange={this.handleChange} value={this.state.email} required />
          <FormInput name="password" type="password" label="Password" handleChange={this.handleChange} value={this.state.password} />

          {/* <input type="submit" value="submit form" /> */}
          <div className='sign-in-buttons'>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton id="sign-in-google" onClick={signInWithGoogle} isGoogleSignIn>{''}Sign In with google{''}</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn