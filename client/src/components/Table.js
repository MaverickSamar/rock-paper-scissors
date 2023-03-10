import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import Token from './Token'
import WhiteButton from './Button'
import {ScoreContext} from '../App'

const TableStyled = styled.div`
  display: grid;
  grid-template-columns: 130px 130px;
  justify-content: center;
  justify-items: center;
  grid-gap: 30px 50px;
  margin: 2em 0;
  position: relative;
  & div:nth-of-type(3) {
    grid-column: span 2;
  }
  .in-game {
    text-align: center;
    text-transform: uppercase;
    font-size: .8em;
    font-weight: 700;
    letter-spacing: 1px;
  }
  .results {
    text-align: center;
    h2 {
      text-transform: uppercase;
      font-size: 56px;
      margin: 10px;
    }
  }
  .line {
    display: ${({ playing }) => !playing ? 'block' : 'none'};
    height: 14px;
    background: rgba(0,0,0,.2);
    position: absolute;
    width: 200px;
    top: 58px;
    &:before {
      content: '';
      height: 14px;
      background: rgba(0,0,0,.2);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      transform: rotate(60deg);
      transform-origin: left top;
    }
    &:after {
      content: '';
      height: 14px;
      background: rgba(0,0,0,.2);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      transform: rotate(-60deg);
      transform-origin: right top;
    }
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: 300px 300px;
    ${({ playing, results }) => (playing && results) && 'grid-template-columns: 300px 110px 110px 300px;'}
    & div:nth-of-type(3) {
      ${({ playing, results }) => (playing && results) && 'grid-column: 2 / 4; grid-row: 1;'}
    }
    .line {
      width: 300px;
    }
    .results {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    .in-game {
      font-size: 1.2em;
      display: flex;
      flex-direction: column;
      > div {
        order: 2;
      }
      > p {
        order: 1;
        margin-bottom: 2em;
      }
    }
  }
`
const elements = [
  'paper',
  'scissors',
  'rock',
]
function Table() {
  // const [score, setScore] = useState(0)
  const { score, setScore } = useContext(ScoreContext)
  const [results, setResults] = useState('')
  const [computerPick, setComputerPick] = useState('default')
  const [playing, setPlaying] = useState(false)
  const [pick, setPick] = useState('')

  const [message, setMessage] = useState('');


  const [index, setIndex] = useState(0);

  async function getIndex()
  {
    await fetch("http://localhost:8002/play").then((res) => res.json()).then((data) => {
        // console.log(body);
        // console.log(body.ind);
        console.log(data);
        // console.log(data.ind);
        // setIndex(data);
    });
  }
  
  function launchComputerPick() {
    return new Promise((resolve, reject) => {
      let pick;
      setIndex(getIndex());
      console.log(index, "Index");
      const interval = setInterval(() => {
        pick = elements[index]
        console.log(pick, "  pick")
        setComputerPick(pick)
      }, 75)
      setTimeout(() => {
        clearInterval(interval)
        resolve(pick)
      }, 1000)
    })
  }

  async function onClick(name) 
  {
    setPlaying(true)
    setPick(name)
    const computer = await launchComputerPick(name)

    const results = playResults(name, computer)
    setResults(results)
    if (results === 'win') 
    {
      setScore(score + 1)
      const m = "Hurray! Try Again";
      setMessage(m)
    }
    else
    {
        const m = "Oops! Try Again"
        setMessage(m);
    }
    console.log(message);
    console.log(score);
  }

  function playResults(pick, computerPick) {
    if (computerPick === pick) {
      return 'draw'
    }
    if (pick === 'paper') {
      if (computerPick === 'scissors') {
        return 'lose'
      }
      if (computerPick === 'rock') {
        return 'win'
      }
    }
    if (pick === 'scissors') {
      if (computerPick === 'paper') {
        return 'win'
      }
      if (computerPick === 'rock') {
        return 'lose'
      }
    }
    if (pick === 'rock') {
      if (computerPick === 'paper') {
        return 'lose'
      }
      if (computerPick === 'scissors') {
        return 'win'
      }
    }
  }

  function handleTryAgainClick() {
    setPlaying(false)
    setResults('')
  }
  return (
    <TableStyled playing={playing} results={(results !== '')}>
      <span className="line"></span>
      {
        !playing ? (
          <>
            <Token name="paper" onClick={onClick} />
            <Token name="scissors" onClick={onClick} />
            <Token name="rock" onClick={onClick} />
          </>
        ) : (
            <>
              <div className="in-game">
                <Token playing={playing} name={pick} isShadowAnimated={(results === 'win')} />
                <p>You Picked</p>
              </div>
              <div className="in-game">
                <Token playing={playing} name={computerPick} isShadowAnimated={(results === 'lose')} />
                <p>Computer Picked</p>
              </div>
              <div className="results">
                {
                  results && (
                    <>
                      <h2>YOU {results}</h2>
                      <WhiteButton onClick={handleTryAgainClick}>
                        {message}
                      </WhiteButton>
                    </>
                  )
                }
              </div>
            </>
          )
      }
    </TableStyled>
  )
}

export default Table