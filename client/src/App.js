import React, { useState, createContext } from 'react';
import Header from './components/Header';
import styled from 'styled-components';
import Wrapper from './components/Wrapper'
import Table from './components/Table';
import Rules from './components/Rules';
import Form from './components/Form';

export const ScoreContext = createContext();

const AppStyled = styled.main`
  background-image: radial-gradient(circle at top, #FF6200 20%, #FD7F2C 100%);
  color: white;
  font-family: 'Barlow Semi Condensed', sans-serif;
  .app-content {
    padding: 2em;
    min-height: 100vh;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
  }`

const App = () => {
  const [score, setScore] = useState(0);
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <ScoreContext.Provider value={{
      score,
      setScore,
    }}>
      <div>
        <AppStyled>
        <Wrapper>
            <div className="app-content">
              <Header />
              <Table />
              <Rules />
            </div>
            <div>
              <Form/>
            </div>
          </Wrapper>
      </AppStyled>
      </div>
      </ScoreContext.Provider>
  </div>
  )
}

export default App