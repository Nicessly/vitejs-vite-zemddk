import { useState } from 'react'
import Nav from './nav.jsx/nav'
import Share from './share/share'
import Post from './PostCard/Post'



function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
      <Nav/>
      <Share/>
      <Post/>
      </div>
  )
}

export default App
