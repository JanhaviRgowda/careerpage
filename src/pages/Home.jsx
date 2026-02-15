import { Link } from 'react-router-dom'
import styles from './Home.module.css'

export default function Home() {
  return (
    <section className={styles.landing}>
      <h1 className={styles.headline}>Stop Missing The Right Jobs.</h1>
      <p className={styles.subtext}>
        Precision-matched job discovery delivered daily at 9AM.
      </p>
      <Link to="/settings" className={styles.cta}>
        Start Tracking
      </Link>
    </section>
  )
}
