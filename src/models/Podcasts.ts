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

export type Episode = any
export type EpisodeList = Episode[]
