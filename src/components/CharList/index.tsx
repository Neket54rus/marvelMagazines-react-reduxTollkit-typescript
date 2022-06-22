import React from "react"
import { useSelector } from "react-redux"

import { RootState } from "../../redux/"
import { fetchCharList } from "../../redux/charList/asyncActions"
import { fetchInfoList } from "../../redux/charInfo/asyncActions"
import { useAppDispatch } from "../../redux"
import { Spinner, Error404 } from "../"
import { CharListType } from "../../redux/charList/types"

import styles from "./CharList.module.scss"

export const CharList: React.FunctionComponent = () => {
	const dispatch = useAppDispatch()
	const { charList, status, firstRender, offset } = useSelector(
		(state: RootState) => state.charList
	)

	React.useEffect(() => {
		if (firstRender) {
			dispatch(fetchCharList({ offset }))
		}
		// eslint-disable-next-line
	}, [])

	const onNewCharsList = () => {
		dispatch(fetchCharList({ offset }))
	}

	const onCharInfo = (id: number) => {
		dispatch(fetchInfoList({ id }))
	}

	const spinner = firstRender && status !== "fail(" ? <Spinner /> : null
	const content = !firstRender ? (
		<ul className={styles.char__grid}>
			<View charList={charList} onCharInfo={onCharInfo} />
		</ul>
	) : null
	const error = status === "fail(" ? <Error404 /> : null
	const btn =
		status === "loading..." && firstRender ? null : status === "loading..." && !firstRender ? (
			<div style={{ marginTop: 30 }}>
				<Spinner />
			</div>
		) : (
			<button
				onClick={onNewCharsList}
				className="button button__main button__long"
				disabled={status === "loading..."}
			>
				<div className="inner">load more</div>
			</button>
		)

	return (
		<div className={styles.char__list}>
			{spinner}
			{content}
			{error}
			{btn}
		</div>
	)
}

const View: React.FunctionComponent<{
	charList: CharListType[]
	onCharInfo: (id: number) => void
}> = ({ charList, onCharInfo }) => {
	return (
		<>
			{charList.map((char, index) => {
				return (
					<li key={index} onClick={() => onCharInfo(char.id)} className={styles.char__item}>
						<img
							src={char.thumbnail}
							style={{
								objectFit:
									char.thumbnail.indexOf("image_not_available") !== -1 ? "fill" : "cover",
							}}
							alt="abyss"
						/>
						<div className={styles.char__name}>{char.name}</div>
					</li>
				)
			})}
		</>
	)
}
