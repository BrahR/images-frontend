import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Tricked images on vercel</title>
				<meta name="description" content="very cool" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href="https://discord.gg/KkMKCchJb8">Tricked images!</a>
				</h1>

				<p className={styles.description}>
					Get started by joining{' '}
					<a href="https://discord.gg/mY8zTARu4g">the discord</a> and pinging
					tricked to get access
				</p>

				{/* <div className={styles.grid}>
					<a href="/docs" className={styles.card}>
						<h2>Documentation &rarr;</h2>
						<p>How to use this yourself to upload your own images</p>
					</a>

					<a href="https://nextjs.org/learn" className={styles.card}>
						<h2>Learn &rarr;</h2>
						<p>Learn about Next.js in an interactive course with quizzes!</p>
					</a>

					<a
						href="https://github.com/vercel/next.js/tree/master/examples"
						className={styles.card}
					>
						<h2>Examples &rarr;</h2>
						<p>Discover and deploy boilerplate example Next.js projects.</p>
					</a>

					<a
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						className={styles.card}
					>
						<h2>Deploy &rarr;</h2>
						<p>
							Instantly deploy your Next.js site to a public URL with Vercel.
						</p>
					</a>
				</div> */}
			</main>

			<footer className={styles.footer}>
				<a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
					Powered by{' '}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	);
}
