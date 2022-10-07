import { UseQueryOptions, useQuery } from '@tanstack/react-query'

import { AxiosError } from 'axios'
import { PodcastList } from 'models/Podcasts'
import { PodcastRepository } from 'api/repositories/PodcastRepository'

export namespace GetPodcasts {
  export type Response = PodcastList
  export type Error = AxiosError<string>
  export type Options = UseQueryOptions<GetPodcasts.Response, GetPodcasts.Error>
}

export const useGetPodcasts = (options?: GetPodcasts.Options) => {
  const { data, ...rest } = useQuery<GetPodcasts.Response, GetPodcasts.Error>(
    ['podcasts'],
    async () => await PodcastRepository.getPodcasts(),
    options
  )

  return { podcasts: data, ...rest }
}
