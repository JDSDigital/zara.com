import { UseQueryOptions, useQuery } from '@tanstack/react-query'

import { AxiosError } from 'axios'
import { EpisodeList } from 'models/Podcasts'
import { PodcastRepository } from 'api/repositories/PodcastRepository'

export namespace GetPodcastEpisodes {
  export type Params = { id?: string }
  export type Response = { episodes: EpisodeList; total: number }
  export type Error = AxiosError<string>
  export type Options = UseQueryOptions<
    GetPodcastEpisodes.Response,
    GetPodcastEpisodes.Error
  >
}

export const useGetPodcastEpisodes = (
  { id }: GetPodcastEpisodes.Params,
  options?: GetPodcastEpisodes.Options
) => {
  const { data, ...rest } = useQuery<
    GetPodcastEpisodes.Response,
    GetPodcastEpisodes.Error
  >(
    ['podcast-episodes', id],
    async () => await PodcastRepository.getEpisodes({ podcastId: id ?? '' }),
    options
  )

  return { episodes: data?.episodes, total: data?.total, ...rest }
}
