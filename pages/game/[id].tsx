import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../../styles/Game.module.css';

export default function Home() {
	const router = useRouter()
	const { id } = router.query
	console.log(id)

	return (
		<div className={styles.container}>
			<Head>
				<title>Development Hub</title>
				<meta name="description" content="Development Hub" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<iframe className={styles.main} src="https://yovic-dino-game.netlify.app" frameBorder={0} />
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
