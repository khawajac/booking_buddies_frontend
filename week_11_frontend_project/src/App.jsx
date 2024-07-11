import { useState } from 'react'
import './App.css'
import BookingBuddiesContainer from './containers/BookingBuddiesContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BookingBuddiesContainer/>
    </>
  )


}

export default App
