import { Card } from 'components/Card'
import { Layout } from 'components/Layout'
import { PodcastDetail } from './PodcastDetail'
import styles from './Podcast.module.css'
import { useGetPodcastDetail } from 'hooks/useGetPodcastDetail'
import { useGetPodcastEpisodes } from 'hooks/useGetPodcastEpisodes'
import { useParams } from 'react-router-dom'

export const Podcast = () => {
  const { id } = useParams()
  const { podcast } = useGetPodcastDetail({ id })
  const { episodes, total } = useGetPodcastEpisodes({ id })

  if (!podcast || !episodes) return <></>

  return (
    <Layout>
      <div className={styles.container}>
        <PodcastDetail podcast={podcast} />

        <div className={styles.episodes}>
          <Card>
            <strong>Episodes: {total} </strong>
          </Card>

          <Card>
            <table className={styles.table}>
              <tr>
                <td>
                  <strong>Title</strong>
                </td>
                <td>
                  <strong>Date</strong>
                </td>
                <td>
                  <strong>Duration</strong>
                </td>
              </tr>
              {episodes.map((episode) => (
                <tr key={episode.id}>
                  <td>
                    <span>{episode.name}</span>
                  </td>
                  <td>
                    <span>{episode.date}</span>
                  </td>
                  <td>
                    <span>{episode.duration}</span>
                  </td>
                </tr>
              ))}
            </table>
          </Card>
        </div>
      </div>
    </Layout>
  )
}