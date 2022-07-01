import type { NextPage } from 'next'
import styles from '../../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <a href="/dashboard" className={styles.card}>
            <h2>Dashboard &rarr;</h2>
            <p>대쉬보드볼까요</p>
          </a>
          <a href="/wave" className={styles.card}>
            <h2>WaveSurfer &rarr;</h2>
            <p>Learn about WaveSurfer!</p>
          </a>
          <a href="/signin" className={styles.card}>
            <h2>Sign In &rarr;</h2>
            <p>로그인하러가볼까요</p>
          </a>
          <a href="/signup" className={styles.card}>
            <h2>Sign Up &rarr;</h2>
            <p>회원가입하러가볼까요</p>
          </a>
        </div>
      </main>
    </div>
  )
}

export default Home
