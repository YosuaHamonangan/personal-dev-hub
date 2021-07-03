import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../../styles/Game.module.css'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Game() {
  const router = useRouter()
  const { id } = router.query

  const { data, error } = useSWR(
    id ? `/api/game-info?id=${id}` : null,
    id ? fetcher : null
  )
  if (error) var content = <div>Failed to load</div>
  else if (!data) var content = <div>Loading...</div>
  else
    var content = (
      <iframe className={styles.main} src={data.url} frameBorder={0} />
    )

  return (
    <div className={styles.container}>
      <Head>
        <title>Development Hub</title>
        <meta name="description" content="Development Hub" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>{content}</main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
