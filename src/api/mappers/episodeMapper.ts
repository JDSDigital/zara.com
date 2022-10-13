import { EpisodeList } from 'models/Podcasts'

const parseMilliseconds = (miliseconds: number) => {
  if (!miliseconds) return '--:--:--'

  const date = new Date(miliseconds)

  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')

  return `${hours}:${minutes}:${seconds}`
}

export const episodeMapper = (episodes: any): EpisodeList => {
  return episodes
    .filter((episode: any) => Boolean(episode.episodeUrl))
    .map((episode: any) => ({
      id: episode.trackId.toString(),
      name: episode.trackName,
      description: episode.description,
      url: episode.episodeUrl,
      date: new Date(episode.releaseDate).toLocaleDateString(),
      duration: parseMilliseconds(episode.trackTimeMillis)
    }))
}
