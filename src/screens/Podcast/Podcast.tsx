import { Link, useParams } from 'react-router-dom'

import { Card } from 'components/Card'
import { Layout } from 'components/Layout'
import { PodcastDetail } from './PodcastDetail'
import styles from './Podcast.module.css'
import { useGetPodcastDetail } from 'hooks/useGetPodcastDetail'
import { useGetPodcastEpisodes } from 'hooks/useGetPodcastEpisodes'

export const Podcast = () => {
  const { id } = useParams()
  const { podcast } = useGetPodcastDetail({ id })
  const { episodes, total } = useGetPodcastEpisodes({ id })

  return (
    <Layout>
      <div className={styles.container}>
        {podcast && episodes && (
          <>
            <PodcastDetail podcast={podcast} />

            <div className={styles.episodes}>
              <Card>
                <strong className={styles.count}>Episodes: {total} </strong>
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
                        <Link
                          to={`/podcast/${podcast.id}/episode/${episode.id}`}
                        >
                          <span>{episode.name}</span>
                        </Link>
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
          </>
        )}
      </div>
    </Layout>
  )
}
