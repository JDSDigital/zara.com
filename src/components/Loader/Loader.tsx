import styles from './Loader.module.css'
import { useIsFetching } from '@tanstack/react-query'

export const Loader = () => {
  const isFetching = useIsFetching()

  return isFetching ? <div className={styles.loader} /> : null
}
