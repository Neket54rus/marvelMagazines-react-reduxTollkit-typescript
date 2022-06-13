import React from "react"

import styles from "./Header.module.scss"

export const Header: React.FunctionComponent = () => {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>
				<a href="/">
					<span>Marvel</span>
					information portal
				</a>
			</h1>
			<nav className={styles.menu}>
				<ul>
					<li>
						<a href="/">Characters</a>
					</li>
					/
					<li>
						<a href="/">Comics</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}
