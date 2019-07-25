import React, {Component} from 'react';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    console.log('Mounted');
  }

  handleForm = (e) => {
    e.preventDefault();

    console.log('sign in');
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleForm}>
          <label>
            <input type="text" name={'email'}/>
          </label>
          <label>
            <input type="password" name={'password'}/>
          </label>
          <button type={'submit'}>sign in</button>
        </form>
      </div>
    );
  }

}
