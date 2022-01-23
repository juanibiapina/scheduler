import logo from './logo.svg';
import './App.css';
import React from 'react';

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

class UserData extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      user: {
        name: "",
        last_name: "",
        birthday: "",
        address: "",
        postal_code: "",
        city: "",
        phone_number: "",
        email: "",
        type: "Urban Sports Club",
        usc_number: ""
      }
    };
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState((state) => {
      let user = state.user;

      user[name] = value;

      return {
        user: user,
      };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.user);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={this.state.user.name}
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          Last Name:
          <input
            name="last_name"
            type="text"
            value={this.state.user.last_name}
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          Birthday:
          <input
            name="birthday"
            type="text"
            value={this.state.user.birthday}
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          Address:
          <input
            name="address"
            type="text"
            value={this.state.user.address}
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          Postal Code:
          <input
            name="postal_code"
            type="text"
            value={this.state.user.postal_code}
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          City:
          <input
            name="city"
            type="text"
            value={this.state.user.city}
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          Phone Number:
          <input
            name="phone_number"
            type="text"
            value={this.state.user.phone_number}
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          E-mail:
          <input
            name="email"
            type="text"
            value={this.state.user.email}
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          USC Number:
          <input
            name="usc_number"
            type="text"
            value={this.state.user.usc_number}
            onChange={this.handleInputChange} />
        </label>
        <br/>

        <input type="submit" value="Submit" />
      </form>
    )
  }
}

class ScheduleSession extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <div>
          {this.props.session.gym_name}
        </div>
        <div>
          {this.props.session.human_date}
        </div>
        <div>
          {this.props.session.time}
        </div>
        <button onClick={this.onSubmit}>
          Schedule
        </button>
      </div>
    );
  }

  onSubmit() {
    const url = "https://murmuring-caverns-56233.herokuapp.com/sessions";
    fetch(url, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: this.props.user,
        session: this.props.session
      })
    })
      .then(response => {
        if (response.ok) {
          alert("Scheduled. Check your email for confirmation.");
        } else {
          alert("error")
        }
      })
      .catch((error) => alert(error.message));
  }
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
            <ScheduleSession
              session={basement_session}
              user={this.state.user}
            />

            <ScheduleSession
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
            <UserData
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
