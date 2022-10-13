import { Layout } from 'components/Layout'
import { PodcastCard } from './PodcastCard'
import styles from './Home.module.css'
import { useGetPodcasts } from 'hooks/useGetPodcasts'
import { useState } from 'react'

export const Home = () => {
  const [search, setSearch] = useState('')
  const { podcasts } = useGetPodcasts()

  const filteredPodcasts = podcasts?.filter(
    (podcast) =>
      podcast.name.toLowerCase().includes(search) ||
      podcast.artist.toLowerCase().includes(search)
  )

  return (
    <Layout>
      {filteredPodcasts && (
        <>
          <div className={styles.searchContainer}>
            <div className={styles.searchCounter}>
              <strong>{filteredPodcasts?.length}</strong>
            </div>

            <input
              type="search"
              placeholder="Filter podcasts..."
              onChange={({ target }) => setSearch(target.value.toLowerCase())}
            />
          </div>

          <div className={styles.list}>
            {filteredPodcasts?.map((podcast) => (
              <PodcastCard key={podcast.id} podcast={podcast} />
            ))}
          </div>
        </>
      )}
    </Layout>
  )
}
