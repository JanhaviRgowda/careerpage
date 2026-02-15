import styles from './EmptyState.module.css'

export default function EmptyState({ title, message }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.message}>{message}</p>
    </div>
  )
}
