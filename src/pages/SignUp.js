import React, {Component} from 'react';
import {gql} from 'apollo-boost';
import {graphql, Query, Mutation} from 'react-apollo';

const CREATE_USER = gql`
    mutation SignUp($firstName: String!,$lastName: String!,$email: String!) {
          CreateUser(firstName: $firstName, lastName: $lastName, email: $email), {
          _id,
          firstName,
          lastName,
          email
      }
    }
`;


class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    };

  }

  componentDidMount() {
    // console.log('Mounted');
  }

  handleForm = (e) => {
    e.preventDefault();

    // console.log(this.state);
  };

  handleChange = (event, state) => {
    const {value} = event.target;
    const stater = {
      [state]: event.target.value
    };

    this.setState(stater);
  };

  onDogSelected = (e) => {
    console.log(e);
  };

  render() {
    return (
      <div>
        <Mutation mutation={CREATE_USER}>
          {(CreateUser, {data}) => (
            <div>
              {data && data['CreateUser']
                ? console.log('data', data['CreateUser']['firstName'])
                : console.log('bb')
              }
              <form
                onSubmit={e => {
                  e.preventDefault();

                  CreateUser({
                    variables: {
                      firstName: 'From Client - Firstname',
                      lastName: "- Lastname",
                      email: "- email" + new Date().getTime()
                    }
                  }).then();
                }}
              >
                <input
                  ref={node => {
                  }}
                />
                <button type="submit">Add Todo</button>
              </form>
            </div>
          )}
        </Mutation>
      </div>
    );
  }
}

export default SignUp;
// export default graphql(userQuery)(SignUp);
