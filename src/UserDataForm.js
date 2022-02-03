import React from 'react';

class UserDataForm extends React.Component {
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
            type="date"
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

export default UserDataForm;
