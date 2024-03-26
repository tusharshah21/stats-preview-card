import { useState } from 'react'
import './App.css'
import Stats from "./components/Stats"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* hi */}
        <Stats />
      </div>
    </>
  )
}

export default App
