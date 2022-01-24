import React from 'react';

import './App.css';

import UserDataForm from './UserDataForm';
import SessionScheduler from './SessionScheduler';

const basement_session = {
  "gym_name": "basement",
  "human_date": "this saturday",
  "time": "10:30 - 12:30"
}

const boulderklub_session = {
  "gym_name": "boulderklub",
  "human_date": "this tuesday",
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
            <SessionScheduler
              session={basement_session}
              user={this.state.user}
            />

            <SessionScheduler
              session={boulderklub_session}
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
