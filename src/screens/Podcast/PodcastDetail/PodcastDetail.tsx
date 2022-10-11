import { Card } from 'components/Card'
import { FC } from 'react'
import { Podcast } from 'models/Podcasts'
import styles from './PodcastDetail.module.css'

type PodcastDetailProps = {
  podcast: Podcast
}

export const PodcastDetail: FC<PodcastDetailProps> = ({ podcast }) => {
  return (
    <div className={styles.container}>
      <Card>
        <img
          alt={podcast.name}
          src={podcast.image.src}
          className={styles.image}
        />

        <div className={styles.divider} />

        <strong className={styles.title}>{podcast.name}</strong>
        <i>by {podcast.artist}</i>

        <div className={styles.divider} />

        <strong className={styles.title}>Description:</strong>
        <i>{podcast.description}</i>
      </Card>
    </div>
  )
}
