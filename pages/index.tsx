import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Development Hub</title>
				<meta name="description" content="Development Hub" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to my Dev Hub
				</h1>

				<p className={styles.description}>
					These are the collection of things I developed
				</p>

				<div className={styles.grid}>
					<a href="/game/dino" className={styles.card}>
						<h2>Dino Game &rarr;</h2>
						<p>Chrome Dino like game</p>
					</a>

					<a href="/" className={styles.card}>
						<h2>Coming soon &rarr;</h2>
						<p>Later</p>
					</a>

					<a href="/" className={styles.card}>
						<h2>Coming soon &rarr;</h2>
						<p>Later</p>
					</a>

					<a href="/" className={styles.card}>
						<h2>Coming soon &rarr;</h2>
						<p>Later</p>
					</a>
				</div>
			</main>

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
