import { Route, Routes } from 'react-router-dom'

import { Home } from './screens/Home'
import { Podcast } from 'screens/Podcast'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/podcast/:id" element={<Podcast />} />
    </Routes>
  )
}

export default App
