import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Podcast } from 'models/Podcasts'
import styles from './PodcastCard.module.css'

type PodcastCardProps = {
  podcast: Podcast
}

export const PodcastCard: FC<PodcastCardProps> = ({ podcast }) => {
  return (
    <Link to={`/podcast/${podcast.id}`}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img
            alt={podcast.name}
            src={podcast.image.src}
            className={styles.image}
          />
        </div>
        <strong className={styles.name}>{podcast.name.toUpperCase()}</strong>
        <span className={styles.artist}>{podcast.artist}</span>
      </div>
    </Link>
  )
}
