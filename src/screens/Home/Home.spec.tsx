import { render, screen, waitFor } from 'tests/app-test-utils'

import { Home } from './Home'
import { PodcastRepository } from 'api/repositories/PodcastRepository'
import { podcastListFixture } from 'fixtures/podcastList'
import userEvent from '@testing-library/user-event'

describe('Home', () => {
  const podcastMock = jest.fn()

  it('renders', async () => {
    jest.spyOn(PodcastRepository, 'getPodcasts').mockImplementation(podcastMock)

    render(<Home />)

    await waitFor(() => {
      expect(podcastMock).toHaveBeenCalled()
    })
  })

  it('can search by name', async () => {
    jest
      .spyOn(PodcastRepository, 'getPodcasts')
      .mockResolvedValue(podcastListFixture)

    render(<Home />)

    const [podcastFound, podcastNotFound] = podcastListFixture

    const input = await screen.findByPlaceholderText('Filter podcasts...')

    userEvent.type(input, 'no jumper')

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText(podcastFound.name)).toBeInTheDocument()
    expect(screen.queryByText(podcastNotFound.name)).not.toBeInTheDocument()
  })

  it('can search by artist', async () => {
    jest
      .spyOn(PodcastRepository, 'getPodcasts')
      .mockResolvedValue(podcastListFixture)

    render(<Home />)

    const [podcastNotFound, podcastFound] = podcastListFixture

    const input = await screen.findByPlaceholderText('Filter podcasts...')

    userEvent.type(input, 'mailchimp')

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText(podcastFound.artist)).toBeInTheDocument()
    expect(screen.queryByText(podcastNotFound.artist)).not.toBeInTheDocument()
  })
})
