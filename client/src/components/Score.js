import React, { useContext } from 'react'
import styled from 'styled-components'
import {ScoreContext} from '../App'

const ScoreStyled = styled.div`
  background: white;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  width: 80px;
  small {
    color: #FF6200;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 1px;
  }
  p {
    color: black;
    font-size: 60px;
    margin: 0;
    font-weight: 700;
    position: relative;
  }
  @media screen and (min-width: 768px) {
    padding: 10px 20px;
    small {
      font-size: 16px;
    }
    p {
        color: black;
      font-size: 60px;
    }
  }
`

function Score() {
    const { score, setScore } = useContext(ScoreContext)
  console.log(score);
  return (
    <ScoreStyled>
            <small>Score</small>
            <p>{score}</p>
    </ScoreStyled>
  )
}

export default Score