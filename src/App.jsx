import { useState } from 'react'
import Nav from './nav.jsx/nav'
import Share from './share/share'
import Post from './PostCard/Post'
import SearchBox from './search/seach'



function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
      <Nav/>
      <Share/>
      <SearchBox sx={{ display: 'inlie-block', justifyContent: 'space-between' }}/>
      <Post/>
      </div>
  )
}

export default App
