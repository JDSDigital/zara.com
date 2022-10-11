import { episodeListFixture } from 'fixtures/episodeList'
import { episodeMapper } from './episodeMapper'
import { episodeResponseFixture } from 'fixtures/episodeResponse'

describe('episodeMapper', () => {
  it('maps episode response correctly', () => {
    const episodes = episodeMapper(episodeResponseFixture)

    expect(episodes).toEqual(episodeListFixture)
  })
})
