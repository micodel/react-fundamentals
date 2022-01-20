// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

// 🐨 add a submit event handler here (`handleSubmit`).
// 💰 Make sure to accept the `event` as an argument and call
// `event.preventDefault()` to prevent the default behavior of form submit
// events (which refreshes the page).
// 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
//
// 🐨 get the value from the username input (using whichever method
// you prefer from the options mentioned in the instructions)
// 💰 For example: event.target.elements[0].value
// 🐨 Call `onSubmitUsername` with the value of the input

// 🐨 add the onSubmit handler to the <form> below

// 🐨 make sure to associate the label to the input.
// to do so, set the value of 'htmlFor' prop of the label to the id of input

// // EXERCISE:
// function UsernameForm({onSubmitUsername}) {
//   function handleSubmit(event) {
//     event.preventDefault()
//     onSubmitUsername(event.target.elements.username.value)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input id="username" type="text" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// function App() {
//   const onSubmitUsername = (username) => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }

// export default App


// EXTRA CREDIT 1:
// function UsernameForm({onSubmitUsername}) {
//  const usernameRef = React.useRef()

// function handleSubmit(event) {
//   event.preventDefault()
//   onSubmitUsername(usernameRef.current.value)
// }

// return (
//   <form onSubmit={handleSubmit}>
//     <div>
//       <label htmlFor="username">Username:</label>
//       <input ref={usernameRef} id="username" type="text" />
//     </div>
//     <button type="submit">Submit</button>
//   </form>
// )
// }

// function App() {
//   const onSubmitUsername = (username) => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }

// export default App

// // EXTRA CREDIT 2:
// function UsernameForm({onSubmitUsername}) {
//   const [error, setError] = React.useState(null)

//   const usernameRef = React.useRef()

//   function handleSubmit(event) {
//     event.preventDefault()
//     onSubmitUsername(usernameRef.current.value)
//   }

//   function handleChange(event) {
//     const value = event.target.value
//     const isLowerCase = value === value.toLowerCase()
//     setError(isLowerCase ? null : "Username must be lower case")
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input ref={usernameRef} id="username" type="text" onChange={handleChange} />
//       </div>
//       <div style={{ color: "red" }}>{error}</div>
//       <button type="submit" disabled={Boolean(error)}>Submit</button>
//     </form>
//   )
// }

// function App() {
//   const onSubmitUsername = (username) => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }

// EXTRA CREDIT 3:
function UsernameForm({ onSubmitUsername }) {
  const [username, setUserName] = React.useState("")

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(username)
  }

  function handleChange(event) {
    const value = event.target.value
    setUserName(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = (username) => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
