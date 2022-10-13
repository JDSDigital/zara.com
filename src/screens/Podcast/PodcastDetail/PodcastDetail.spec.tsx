import { render, screen } from 'tests/app-test-utils'

import { PodcastDetail } from './PodcastDetail'
import { podcastListFixture } from 'fixtures/podcastList'

describe('PodcastDetail', () => {
  it('renders', async () => {
    const [podcast] = podcastListFixture
    render(<PodcastDetail podcast={podcast} />)

    expect(screen.getByText(podcast.name)).toBeInTheDocument()
    expect(screen.getByText(podcast.artist)).toBeInTheDocument()
    expect(screen.getByText(podcast.description)).toBeInTheDocument()
  })
})
