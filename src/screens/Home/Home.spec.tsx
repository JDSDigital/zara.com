import { render, waitFor } from 'tests/app-test-utils'

import { Home } from './Home'
import { PodcastRepository } from 'api/repositories/PodcastRepository'

describe('Home', () => {
  const podcastMock = jest.fn()

  beforeEach(() => {
    jest.spyOn(PodcastRepository, 'getPodcasts').mockImplementation(podcastMock)
  })

  it('renders', async () => {
    render(<Home />)

    await waitFor(() => {
      expect(podcastMock).toHaveBeenCalled()
    })
  })
})
