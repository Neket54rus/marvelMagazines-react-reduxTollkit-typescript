import React from "react"
import { Routes, Route } from "react-router-dom"

import { Home } from "../../pages/Home"
import { Comics } from "../../pages/Comics"
import { SingleComicsPage } from "../../pages/SingleComicsPage"
import { Header, Char, Error404 } from "../../components"

import styles from "./App.module.scss"

export const App: React.FunctionComponent = () => {
	return (
		<div className={styles.app}>
			<Header />
			<div className={styles.main}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:id" element={<Char />} />
					<Route path="/comics" element={<Comics />} />
					<Route path="/comics/:id" element={<SingleComicsPage />} />
					<Route path="*" element={<Error404 />} />
				</Routes>
			</div>
		</div>
	)
}
