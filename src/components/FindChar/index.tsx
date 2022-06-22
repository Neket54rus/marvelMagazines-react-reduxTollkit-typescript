import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import { RootState } from "../../redux/"
import { useAppDispatch } from "../../redux"
import { fatchFindChar } from "../../redux/findChar/asyncActions"
import { Spinner } from "../"

import styles from "./FindChar.module.scss"

export const FindChar: React.FunctionComponent = () => {
	const [string, setString] = React.useState<string>("")
	const [criticalError, setCriticalError] = React.useState<boolean>(false)

	const dispatch = useAppDispatch()
	const { char, status } = useSelector((state: RootState) => state.findChar)

	const onSearchChar = (e: any) => {
		e.preventDefault()
		if (!string.length) {
			setCriticalError(true)
			return
		}

		setCriticalError(false)
		dispatch(fatchFindChar({ string }))
	}

	return (
		<div className={styles.char__search_form}>
			<form onSubmit={onSearchChar}>
				<label className={styles.char__search_label} htmlFor="charName">
					Or find a character by name:
					<div className={styles.char__search_wrapper}>
						<input
							onChange={(e) => setString(e.target.value)}
							id="charName"
							name="charName"
							type="text"
							placeholder="Enter name"
							value={string}
						/>
						<button
							type="submit"
							className="button button__main"
							disabled={status === "loading..."}
						>
							<div className="inner">find</div>
						</button>
					</div>
				</label>
			</form>

			{status === "loading..." ? <Spinner /> : null}

			{status === "Ok!!" && !criticalError ? (
				<div className={styles.char__search_wrapper}>
					<div className={styles.char__search_success}>
						There is! Visit {char[0].name} page?
					</div>
					<Link to={`/${char[0].id}`} className="button button__secondary">
						<div className="inner">To page</div>
					</Link>
				</div>
			) : null}

			{criticalError ? (
				<div className={styles.char__search_critical_error}>This field is required</div>
			) : null}
			{status === "fail(" && !criticalError ? (
				<div className={styles.char__search_error}>
					The character was not found. Check the name and try again
				</div>
			) : null}
		</div>
	)
}
