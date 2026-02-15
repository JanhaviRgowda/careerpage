import styles from './Settings.module.css'

export default function Settings() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Settings</h1>
      <p className={styles.intro}>Configure your job preferences. Logic will be added in a later step.</p>

      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="role-keywords">Role keywords</label>
          <input
            id="role-keywords"
            type="text"
            className={styles.input}
            placeholder="e.g. Frontend, React, Product Manager"
            disabled
            aria-label="Role keywords"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="locations">Preferred locations</label>
          <input
            id="locations"
            type="text"
            className={styles.input}
            placeholder="e.g. New York, Berlin, Remote"
            disabled
            aria-label="Preferred locations"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="mode">Mode</label>
          <select id="mode" className={styles.select} disabled aria-label="Mode">
            <option value="">Remote / Hybrid / Onsite</option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
            <option value="onsite">Onsite</option>
          </select>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="experience">Experience level</label>
          <select id="experience" className={styles.select} disabled aria-label="Experience level">
            <option value="">Select level</option>
            <option value="intern">Intern</option>
            <option value="junior">Junior</option>
            <option value="mid">Mid</option>
            <option value="senior">Senior</option>
            <option value="lead">Lead</option>
          </select>
        </div>
      </form>
    </div>
  )
}
