import { Route, Routes } from 'react-router-dom'

import { Episode } from 'screens/Episode'
import { Home } from './screens/Home'
import { Podcast } from 'screens/Podcast'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/podcast/:id" element={<Podcast />} />
      <Route
        path="/podcast/:podcastId/episode/:episodeId"
        element={<Episode />}
      />
    </Routes>
  )
}

export default App
