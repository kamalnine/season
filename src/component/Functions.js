import React from 'react'

function Functions(props) {
  return (
    <div class="container">
        <div className="container" style={{color : props.mode === 'dark'?'purple':'black'}}>
      <h1>Functions used in the TextUtils are</h1>
      <p>1. toUpperCase():- This function is to convert the upper case string</p>
      <p>2. toLowerCase() :- This function is to convert the lowercase string to</p>
      <p>3. clear :- This function is to clear the string</p>
      <p>4. reverse :- this function is to reverse the string</p>
      <p>5. copy :- This function is to copy the string</p>
      </div>
      <br/>
      <div className="container" style={{color : props.mode === 'dark'?'purple':'black'}}>
          <h2>The various modes we used in our website</h2>
          <p>Dark mode :- This simply changes the background color in the dark theme</p>
          <p>Red mode :- This simply changes the background color in the red theme</p>
          <p>Blue mode :- This simply changes the background color in the blue theme</p>
          
          </div>
      </div>

     
      
  )
}

export default Functions
