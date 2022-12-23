import React, { useState } from 'react'
import styled from 'styled-components';
import { FormButton } from './Button';
import Button from './Button';

const FormStyled = styled.div`
  text-align: center;
  &::before {
    content: '';
    display: ${({ visible }) => visible ? 'block' : 'none'};
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0,0,0,.6);
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
    input{
      height:30px;
      font-size:14pt;
    }
    h2 {
      color: #3B4262;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: -2px;
      margin-bottom: 1em;
    }
    .form-button{
      position: fixed;
      right: 10px; 
      bottom: 10px;
      font-size: 12px
      
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
      top: .8em;
    }
  }
`

const Form = () => {

  const [visible, setVisible] = useState(true)

  const [user, setUser] = useState("Guest");
  const [uvisible, setUvisible] = useState(false);

  function handleToggleClick() {
    setVisible(!visible)
  }

  function handleGuestClick(){
    setUvisible(!uvisible); 
    setVisible(!visible);     
  }


  function handleSignUp(){

  }

  function handleSwitch() {

  }

  function handleLogIn(){

  }

  return (
    <div>
      <FormStyled visible={visible}>
      {
        (visible) && (
          <div className="rules-modal">
            <h2>SignUp</h2>
              <form>
                <input type="text" title="username" placeholder="Username" size={25}/>
                <br/>
                <br/>
                <input type="password" title="username" placeholder="Password" size={25}/>
                <br/>
                <br/>
                <FormButton onClick={handleSignUp} className="sign">
                  SignUp
                </FormButton>
                <br/>
                <br/>
                <a class="login" href="#" onClick={handleSwitch}>Already a player? Login</a>
              </form>
              <br/>
              <br/>


              <FormButton onClick={handleGuestClick} className="form-button">
                  Continue as Guest
                </FormButton>
          </div>
        )
      }
      <Button onClick={handleToggleClick} className="button">
        SignUp
      </Button>
      </FormStyled>
    </div>
  )
}

export default Form