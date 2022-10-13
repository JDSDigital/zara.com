import { render, screen } from 'tests/app-test-utils'

import { Episode } from './Episode'
import { PodcastRepository } from 'api/repositories/PodcastRepository'
import { episodeListFixture } from 'fixtures/episodeList'
import { podcastListFixture } from 'fixtures/podcastList'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    podcastId: '1001659715',
    episodeId: '1000582230224'
  })
}))

describe('Episode', () => {
  const podcastMock = jest.fn()
  const episodeMock = jest.fn()

  it('renders', async () => {
    jest.spyOn(PodcastRepository, 'getPodcasts').mockImplementation(podcastMock)
    jest.spyOn(PodcastRepository, 'getEpisodes').mockImplementation(episodeMock)

    render(<Episode />)

    expect(podcastMock).toHaveBeenCalled()
    expect(episodeMock).toHaveBeenCalled()
  })

  it('shows podcast details', async () => {
    const [podcast] = podcastListFixture
    const [episode] = episodeListFixture

    jest.spyOn(PodcastRepository, 'getPodcasts').mockResolvedValue([podcast])
    jest
      .spyOn(PodcastRepository, 'getEpisodes')
      .mockResolvedValue({ episodes: [episode], total: 1 })

    render(<Episode />)

    expect(await screen.findByText(podcast.name)).toBeInTheDocument()
    expect(await screen.findByText(podcast.artist)).toBeInTheDocument()
  })

  it('shows episode details', async () => {
    const [podcast] = podcastListFixture
    const [episode] = episodeListFixture

    jest.spyOn(PodcastRepository, 'getPodcasts').mockResolvedValue([podcast])
    jest
      .spyOn(PodcastRepository, 'getEpisodes')
      .mockResolvedValue({ episodes: [episode], total: 1 })

    render(<Episode />)

    expect(await screen.findByText(episode.name)).toBeInTheDocument()
  })

  it('shows audio player', async () => {
    const [podcast] = podcastListFixture
    const [episode] = episodeListFixture

    jest.spyOn(PodcastRepository, 'getPodcasts').mockResolvedValue([podcast])
    jest
      .spyOn(PodcastRepository, 'getEpisodes')
      .mockResolvedValue({ episodes: [episode], total: 1 })

    render(<Episode />)

    expect(await screen.findByText(episode.name)).toBeInTheDocument()

    expect(screen.getByLabelText('episode audio')).toHaveAttribute(
      'src',
      episode.url
    )
  })
})
