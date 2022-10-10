import { render, screen } from 'tests/app-test-utils'

import { PodcastCard } from './PodcastCard'
import { podcastListFixture } from 'fixtures/podcastList'

const [podcast] = podcastListFixture

describe('PodcastCard', () => {
  it('renders', () => {
    render(<PodcastCard podcast={podcast} />)

    expect(screen.getByText(podcast.name)).toBeInTheDocument()
    expect(screen.getByText(podcast.artist)).toBeInTheDocument()
  })
})
