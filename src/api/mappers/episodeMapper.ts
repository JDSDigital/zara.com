import { EpisodeList } from 'models/Podcasts'

export const episodeMapper = (episodes: any): EpisodeList => {
  return episodes.map((episode: any) => ({
    id: episode.trackId.toString(),
    name: episode.trackName,
    date: new Date(episode.releaseDate).toLocaleDateString(),
    duration: episode.trackTimeMillis?.toString()
  }))
}
