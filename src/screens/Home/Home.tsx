import { Layout } from 'components/Layout'
import { PodcastCard } from './PodcastCard'
import styles from './Home.module.css'
import { useGetPodcasts } from 'hooks/useGetPodcasts'

export const Home = () => {
  const { podcasts } = useGetPodcasts()

  return (
    <Layout>
      <div className={styles.list}>
        {podcasts?.map((podcast) => (
          <PodcastCard key={podcast.id} podcast={podcast} />
        ))}
      </div>
    </Layout>
  )
}
