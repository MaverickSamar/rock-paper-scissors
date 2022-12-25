import React, { useState } from "react";
import styled from "styled-components";
import { FormButton } from "./Button";
import Button from "./Button";

const FormStyled = styled.div`
  text-align: center;
  &::before {
    content: "";
    display: ${({ visible }) => (visible ? "block" : "none")};
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.6);
  }
  .close-button {
    margin-top: 2em;
    font-size: 14px;
    cursor: pointer;
    color: #000000;
  }
  .login {
    color: #000000;
    text-decoration: none;
    :hover {
      cursor: pointer;
      color: #ff6200;
    }
  }
  .rules-modal {
    background: white;
    padding: 4em 0;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    .avatar {
      vertical-align: middle;
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    h2 {
      color: #000000;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: -2px;
      margin-bottom: 1em;
    }
    span{
      color: #000000;
      font-weight: 200;
    }
    strong{
      color: #000000;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: -2px;
    }
    .form-button {
      position: fixed;
      right: 10px;
      bottom: 10px;
      font-size: 12px;
    }
  }
  @media screen and (min-width: 768px) {
    .button {
      position: fixed;
      right: 2em;
      bottom: 2em;
    }
    .rules-modal {
      width: 400px;
      margin: auto;
      border-radius: 10px;
      top: 0;
      bottom: initial;
      transform: translateY(50%);
      padding: 2em;
      box-sizing: border-box;
      h2 {
        font-size: 32px;
        align-self: flex-start;
        margin: 0 0 1.2em 0;
      }
    }
    .close-button {
      position: absolute;
      right: 2em;
      top: 0.8em;
    }
  }
`;

const Profile = ({username, isLoggedIn, visibleT}) => {

  const [visible, setVisible] = useState(visibleT);
  const u = username;
  function handleLogout(){
    console.log(username);
    console.log(u);
    console.log(isLoggedIn, "login");
    console.log(visible, "visible");
    setVisible(!visible);

  }

  function handleToggleClick(){
    setVisible(!visible);
  }

  return (
    <div>
      <FormStyled visible={visible}>
        {visible && (
          <div className="rules-modal">
            <img src="./images/avatar.png" alt="avatar" className="avatar" />
            <br/>
            <span>Hello, <strong>{username}</strong></span>
            <br/>
          <FormButton onClick={handleLogout} className="sign">
          LogOut
          </FormButton>
          </div>
        )}
        <Button onClick={handleToggleClick} className="button">
          Profile
        </Button>

      </FormStyled>
    </div>
  );
};

export default Profile;
