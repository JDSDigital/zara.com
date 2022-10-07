import { PodcastList } from 'models/Podcasts'

export const podcastMapper = (podcasts: any): PodcastList => {
  return podcasts.map((podcast: any) => ({
    id: podcast.id.attributes['im:id'],
    name: podcast['im:name'].label,
    artist: podcast['im:artist'].label,
    description: podcast.summary.label,

    image: {
      src: podcast['im:image'][2].label,
      size: podcast['im:image'][2].attributes.height
    }
  }))
}
