export type Podcast = {
  id: string
  name: string
  artist: string
  description: string

  image: {
    size: string
    src: string
  }
}

export type PodcastList = Podcast[]

export type Episode = {
  id: string
  name: string
  date: string
  duration?: string
}
export type EpisodeList = Episode[]
