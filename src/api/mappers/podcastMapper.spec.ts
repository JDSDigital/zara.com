import { podcastListFixture } from 'fixtures/podcastList'
import { podcastMapper } from './podcastMapper'
import { podcastResponseFixture } from 'fixtures/podcastResponse'

describe('podcastMapper', () => {
  it('maps podcast response correctly', () => {
    const podcasts = podcastMapper(podcastResponseFixture)

    expect(podcasts).toEqual(podcastListFixture)
  })
})
