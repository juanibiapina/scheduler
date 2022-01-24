import React from 'react';

class SessionScheduler extends React.Component {
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

export default SessionScheduler;
