import React from "react"
import { NavLink, Link } from "react-router-dom"

import styles from "./Header.module.scss"

export const Header: React.FunctionComponent = () => {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>
				<Link to="/">
					<span>Marvel</span>
					information portal
				</Link>
			</h1>
			<nav className={styles.menu}>
				<ul>
					<li>
						<NavLink
							style={({ isActive }) => ({ color: isActive ? "#9f0013" : "inherit" })}
							to="/"
						>
							Characters
						</NavLink>
					</li>
					/
					<li>
						<NavLink
							style={({ isActive }) => ({ color: isActive ? "#9f0013" : "inherit" })}
							to="/comics"
						>
							Comics
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}
