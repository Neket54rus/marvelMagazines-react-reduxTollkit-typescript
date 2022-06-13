import React from "react"

import { Home } from "../../pages/Home"
import { Header } from "../../components"

import styles from "./App.module.scss"

export const App: React.FunctionComponent = () => {
	return (
		<div className={styles.app}>
			<Header />
			<div className={styles.main}>
				<Home />
			</div>
		</div>
	)
}
