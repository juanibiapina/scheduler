import React from "react";
import styled from "styled-components";

import Input from "./components/Input";
import SideBySide from "./components/SideBySide";
import SubmitButton from "./components/SubmitButton";

const StyledForm = styled.form`
  @media (min-width: 960px) {
    width: 500px
  }

  width: 90%;
`;

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
        usc_number: "",
      },
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
      <StyledForm onSubmit={this.handleSubmit}>
        <h4>Bouldering Booking form</h4>
        <SideBySide>
          <Input
            description="Name"
            placeholder="eg. John"
            name="name"
            autoComplete="given-name"
            type="text"
            value={this.state.user.name}
            onChange={this.handleInputChange}
          />
          <Input
            description="Last Name"
            placeholder="eg. Doe"
            name="last_name"
            autoComplete="family-name"
            type="text"
            value={this.state.user.last_name}
            onChange={this.handleInputChange}
          />
        </SideBySide>
        <Input
          description="Birthday"
          placeholder="2001-12-30.(yyyy-mm-dd)"
          name="birthday"
          autoComplete="bday"
          type="date"
          value={this.state.user.birthday}
          onChange={this.handleInputChange}
        />
        <Input
          description="Address"
          placeholder="eg. Some str. 33B"
          name="address"
          type="text"
          value={this.state.user.address}
          onChange={this.handleInputChange}
        />
        <SideBySide>
          <Input
            description="Postal Code"
            placeholder="12333"
            mask="99999"
            name="postal_code"
            type="text"
            value={this.state.user.postal_code}
            onChange={this.handleInputChange}
          />
          <Input
            description="City"
            placeholder="eg. Berlin"
            name="city"
            type="text"
            value={this.state.user.city}
            onChange={this.handleInputChange}
          />
        </SideBySide>
        <Input
          description="Phone Number"
          placeholder="012224053535"
          name="phone_number"
          type="tel"
          value={this.state.user.phone_number}
          onChange={this.handleInputChange}
        />
        <Input
          description="Email"
          placeholder="foo@email.com"
          name="email"
          type="email"
          value={this.state.user.email}
          onChange={this.handleInputChange} />
        <Input
          description="USC Membership No"
          placeholder="111111111"
          mask="999999999"
          name="usc_number"
          type="text"
          value={this.state.user.usc_number}
          onChange={this.handleInputChange}
        />
        <SubmitButton type="submit" value="Submit" />
        <div>
          <span>At the next step you will select the slots</span>
        </div>
      </StyledForm>
    );
  }
}

export default UserDataForm;
