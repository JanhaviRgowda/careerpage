import styles from './PlaceholderPage.module.css'

export default function PlaceholderPage({ title }) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>{title}</h1>
      <p className={styles.subtext}>This section will be built in the next step.</p>
    </div>
  )
}
