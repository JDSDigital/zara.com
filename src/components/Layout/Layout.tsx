import { FC, ReactNode } from 'react'

import { Link } from 'react-router-dom'
import { Loader } from 'components/Loader'
import styles from './Layout.module.css'

export type LayoutProps = {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header className={styles.header}>
        <Link className={styles.title} to={'/'}>
          <span className={styles.title}>Podcaster</span>
        </Link>

        <Loader />
      </header>

      <main className={styles.main}>{children}</main>
    </div>
  )
}
