import React from 'react'
import FormInput from './FormInput.component';
import "../Styles/signin.style.scss";
import CustomButton from './CustomButton.component';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  }

  handleChange = (event) => {
    //event.target is our input element itself
    const { value, name } = event.target;
    // console.log(event.target);
    this.setState({ [name]: value })


  }
  render() {
    return (
      <div className="signin-container">
        <h2>I already have an Account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput type="email"
            name="email"
            required
            // placeholder="Enter your email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
          />

          <FormInput type="password"
            name="password"
            required
            // placeholder="Enter your password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
          />

          <CustomButton type="submit">sign in</CustomButton>
        </form>
      </div>

    )
  }

}

export default SignIn;