import { AxiosError } from 'axios'
import { Podcast } from 'models/Podcasts'
import { useGetPodcasts } from './useGetPodcasts'

export namespace GetPodcastDetail {
  export type Params = { id?: string }
  export type Response = Podcast
  export type Error = AxiosError<string>
}

export const useGetPodcastDetail = ({ id }: GetPodcastDetail.Params) => {
  const { podcasts } = useGetPodcasts()

  const podcast = podcasts?.find((podcast) => podcast.id === id)

  return { podcast }
}
