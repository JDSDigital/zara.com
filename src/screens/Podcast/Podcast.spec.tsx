import { render, waitFor } from 'tests/app-test-utils'

import { Podcast } from './Podcast'
import { PodcastRepository } from 'api/repositories/PodcastRepository'

describe('Podcast', () => {
  const podcastMock = jest.fn()

  beforeEach(() => {
    jest.spyOn(PodcastRepository, 'getEpisodes').mockImplementation(podcastMock)
  })

  it('renders', async () => {
    render(<Podcast />)

    await waitFor(() => {
      expect(podcastMock).toHaveBeenCalled()
    })
  })
})
