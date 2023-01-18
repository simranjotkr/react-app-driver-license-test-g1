import React from 'react'
import './StartingPage.css'

const StartingPage = () => {
  let username;
  function displayUserName() {
    console.log(username);
  }
  return (
    <div className='starting--page--container'>
      <h1 className='starting--page--heading--one'>Welcome to <br /><span>G1 Practice Test</span></h1>
      <h2 className='starting--page--heading--two'>Enter your name to begin.</h2>
      <input type='text'
        className='starting--page--input'
        placeholder='Username'
        value={username}
      />
      <button className="starting--page--startbutton" onClick={displayUserName} >Start</button>
    </div>
  )
}

export default StartingPage