import { Card } from 'components/Card'
import { Layout } from 'components/Layout'
import { PodcastDetail } from 'screens/Podcast/PodcastDetail'
import styles from './Episode.module.css'
import { useGetPodcastDetail } from 'hooks/useGetPodcastDetail'
import { useGetPodcastEpisodeDetail } from 'hooks/useGetPodcastEpisodeDetail'
import { useParams } from 'react-router-dom'

export const Episode = () => {
  const { podcastId, episodeId } = useParams()
  const { podcast } = useGetPodcastDetail({ id: podcastId })
  const { episode } = useGetPodcastEpisodeDetail({ podcastId, episodeId })

  if (!podcast || !episode) return <></>

  return (
    <Layout>
      <div className={styles.container}>
        <PodcastDetail podcast={podcast} />

        <div className={styles.episode}>
          <Card>
            <strong className={styles.name}>{episode.name}</strong>

            <p
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: episode.description ?? '' }}
            />

            <div className={styles.divider} />

            <audio controls src={episode.url} className={styles.audio} />
          </Card>
        </div>
      </div>
    </Layout>
  )
}
