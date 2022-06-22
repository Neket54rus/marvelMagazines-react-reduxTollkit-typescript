import React from "react"
import { CharList, CharInfo, FindChar } from ".."

import styles from "./Chars.module.scss"

export const Chars: React.FunctionComponent = () => {
	return (
		<div className={styles.char__content}>
			<CharList />
			<div>
				<CharInfo />
				<FindChar />
			</div>
		</div>
	)
}
