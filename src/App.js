import React from 'react';

import './App.css';
import SubmitButton from './components/SubmitButton';

import UserDataForm from './UserDataForm';
import SessionScheduler from './SessionScheduler';

const basement_saturday = {
  "gym_name": "basement",
  "human_date": "this saturday",
  "time": "10:30 - 12:30"
}

const boulderklub_tuesday = {
  "gym_name": "boulderklub",
  "human_date": "this tuesday",
  "time": "18:30 - 20:30"
}

const basement_thursday = {
  "gym_name": "basement",
  "human_date": "this thursday",
  "time": "18:30 - 20:30"
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: JSON.parse(localStorage.getItem("user")),
    };
  }

  render() {
    if (this.state.user) {
      return (
        <div className="App">
          <div className="container">
            <div>
              <SubmitButton onClick={() => {
                this.setState({ user: null })
              }}>Modify your data</SubmitButton>
            </div>

            <SessionScheduler
              session={basement_saturday}
              user={this.state.user}
            />

            <SessionScheduler
              session={boulderklub_tuesday}
              user={this.state.user}
            />

            <SessionScheduler
              session={basement_thursday}
              user={this.state.user}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <div className="container">
            <UserDataForm
              onSubmit={(user) => this.onSubmitUserData(user)}
             />
          </div>
        </div>
      )
    }
  }

  onSubmitUserData(user) {
    localStorage.setItem("user", JSON.stringify(user));
    this.setState({
      user: user
    });
  }
}

export default App;
