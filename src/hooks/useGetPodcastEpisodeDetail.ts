import { AxiosError } from 'axios'
import { Podcast } from 'models/Podcasts'
import { useGetPodcastEpisodes } from './useGetPodcastEpisodes'

export namespace GetPodcastEpisodeDetail {
  export type Params = { podcastId?: string; episodeId?: string }
  export type Response = Podcast
  export type Error = AxiosError<string>
}

export const useGetPodcastEpisodeDetail = ({
  podcastId,
  episodeId
}: GetPodcastEpisodeDetail.Params) => {
  const { episodes } = useGetPodcastEpisodes({ id: podcastId })

  const episode = episodes?.find((episode) => episode.id === episodeId)

  return { episode }
}
