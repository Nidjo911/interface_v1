import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started with testing!&nbsp;
          <code className={styles.code}>this is the way</code>
        </p>
      </div>

      <div>
        <Link href="/"><strong>':'</strong>START TODAY</Link>
      </div>


    </main>
  )
}
