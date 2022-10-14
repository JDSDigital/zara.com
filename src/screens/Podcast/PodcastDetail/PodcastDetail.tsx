import { Card } from 'components/Card'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Podcast } from 'models/Podcasts'
import styles from './PodcastDetail.module.css'

type PodcastDetailProps = {
  podcast: Podcast
}

export const PodcastDetail: FC<PodcastDetailProps> = ({ podcast }) => {
  return (
    <div className={styles.container}>
      <Card>
        <Link className={styles.imageLink} to={`/podcast/${podcast.id}`}>
          <img
            alt={podcast.name}
            src={podcast.image.src}
            className={styles.image}
          />
        </Link>

        <div className={styles.divider} />

        <Link to={`/podcast/${podcast.id}`}>
          <strong className={styles.title}>{podcast.name}</strong>
        </Link>
        <Link to={`/podcast/${podcast.id}`}>
          <span className={styles.italic}>by {podcast.artist}</span>
        </Link>

        <div className={styles.divider} />

        <strong className={styles.title}>Description:</strong>
        <span className={styles.italic}>{podcast.description}</span>
      </Card>
    </div>
  )
}
