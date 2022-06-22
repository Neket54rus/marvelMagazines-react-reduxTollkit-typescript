import React from "react"

import styles from "./Error404.module.scss"

export const Error404: React.FunctionComponent = () => {
	return (
		<div className={styles.error}>
			<div className={styles.text}>Error( Please try again!</div>
		</div>
	)
}
