import React from 'react';
import { Fetch } from 'react-request';

class SessionScheduler extends React.Component {
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
        <Fetch
          lazy
          url="https://murmuring-caverns-56233.herokuapp.com/sessions"
          method="POST"
          headers={{ 'Content-Type': 'application/json' }}
          body={JSON.stringify({
            user: this.props.user,
            session: this.props.session
          })}
        >
          {({ fetching, error, failed, data, doFetch }) => {
            if (fetching) {
              return <div>Scheduling...</div>;
            }

            if (error) {
              return (
                <div>
                  <div>Network error.</div>

                  <button onClick={() => doFetch()}>
                    Retry
                  </button>
                </div>
              );
            }

            if (failed) {
              return (
                <div>
                  <div>Error.</div>

                  <button onClick={() => doFetch()}>
                    Retry
                  </button>
                </div>
              );
            }

            if (data) {
              return (
                <div>
                  <div>Success. Check your e-mail for confirmation.</div>
                </div>
              );
            }

            return (
              <button onClick={() => doFetch()}>
                Schedule
              </button>
            );
          }}
        </Fetch>

      </div>
    );
  }
}

export default SessionScheduler;
