import { EpisodeList, PodcastList } from 'models/Podcasts'

import { ApiClient } from 'api/ApiClient'
import { AxiosResponse } from 'axios'
import { episodeMapper } from 'api/mappers/episodeMapper'
import { podcastMapper } from 'api/mappers/podcastMapper'

interface PodcastRepositoryType {
  getPodcasts: () => Promise<PodcastList>
  getEpisodes: ({
    podcastId
  }: {
    podcastId: string
  }) => Promise<{ episodes: EpisodeList; total: number }>
}

type GetPodcastEndpointResponse = { feed: { entry: PodcastList } }
type GetEpisodesEndpointResponse = { results: any; resultCount: number }

export const PodcastRepository: PodcastRepositoryType = {
  getPodcasts: async () => {
    const { data }: AxiosResponse = await ApiClient.get(
      '/us/rss/toppodcasts/limit=100/genre=1310/json',
      {
        transformResponse: (data) => {
          const response: GetPodcastEndpointResponse = JSON.parse(data)

          return podcastMapper(response.feed.entry)
        }
      }
    )

    return data
  },

  getEpisodes: async ({ podcastId }) => {
    const { data }: AxiosResponse = await ApiClient.get(
      `/lookup?id=${podcastId}&entity=podcastEpisode`,
      {
        transformResponse: (data) => {
          const response: GetEpisodesEndpointResponse = JSON.parse(data)

          return {
            episodes: episodeMapper(response.results),
            total: response.resultCount
          }
        }
      }
    )

    return data
  }
}
