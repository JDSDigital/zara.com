import { Card } from 'components/Card'
import { Divider } from 'components/Divider'
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

  return (
    <Layout>
      {podcast && (
        <div className={styles.container}>
          <PodcastDetail podcast={podcast} />

          <div className={styles.episode}>
            {episode && (
              <Card>
                <strong className={styles.name}>{episode.name}</strong>

                <p
                  className={styles.description}
                  dangerouslySetInnerHTML={{
                    __html: episode.description ?? ''
                  }}
                />

                <Divider />

                <audio
                  controls
                  aria-label="episode audio"
                  src={episode.url}
                  className={styles.audio}
                />
              </Card>
            )}
          </div>
        </div>
      )}
    </Layout>
  )
}
