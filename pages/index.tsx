import styles from '@/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <code className={styles.code}>
        This is the home page, but you are being redirected to the product page automatically
      </code>
    </div>
  )
}
