import { EpisodeList } from 'models/Podcasts'

const parseMilliseconds = (miliseconds: number) => {
  if (!miliseconds) return '--:--'

  const date = new Date(miliseconds)

  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')

  return `${minutes}:${seconds}`
}

export const episodeMapper = (episodes: any): EpisodeList => {
  return episodes.map((episode: any) => ({
    id: episode.trackId.toString(),
    name: episode.trackName,
    date: new Date(episode.releaseDate).toLocaleDateString(),
    duration: parseMilliseconds(episode.trackTimeMillis)
  }))
}
