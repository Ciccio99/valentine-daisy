import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Heart from '../assets/heart.svg';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>I love you!</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Happy Valentines Day</h1>
        <div className={styles.heartContainer}>
          <Heart className={styles.grow} fill="#a2194f" width={150} height={150} />
        </div>
        <div>
          <h1 className={styles.title}>I love you, Daisy!</h1>
          <p className={styles.quote}>"Fuck the system telling us when to love each other, I just happen to love you every fucking day" <br/> - Big Money Gurl 💰💵💎</p>
        </div>
      </main>

      <footer className={styles.footer}>
      <div>
        <p>
          <a
            href="https://twitter.com/albertoscicali"
            target="_blank"
            rel="noopener noreferrer"
          >
            Slapped together by @albertoscicali
          </a>
        </p>
        </div>
        <p>Powered by ❤️</p>
      </footer>
    </div>
  )
}
