import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { RootState } from "../../redux/"
import { useAppDispatch } from "../../redux"
import { fetchComicsList } from "../../redux/comicsList/asyncActions"
import { Spinner, Error404 } from "../"
import { ComicsListType } from "../../redux/comicsList/types"

import styles from "./ComicsList.module.scss"

export const ComicsList: React.FunctionComponent = () => {
	const dispatch = useAppDispatch()
	const { comicsList, status, firstRender, offset } = useSelector(
		(state: RootState) => state.comicsList
	)

	React.useEffect(() => {
		if (firstRender) {
			dispatch(fetchComicsList({ offset }))
		}
		// eslint-disable-next-line
	}, [])

	const loadNewComics = () => {
		dispatch(fetchComicsList({ offset }))
	}

	const spinner = firstRender && status !== "fail(" ? <Spinner /> : null
	const content = !firstRender ? <View comicsList={comicsList} /> : null
	const error = status === "fail(" ? <Error404 /> : null
	const btn =
		status === "loading..." && firstRender ? null : status === "loading..." && !firstRender ? (
			<div style={{ marginTop: 30 }}>
				<Spinner />
			</div>
		) : (
			<button
				onClick={loadNewComics}
				disabled={status === "loading..."}
				className="button button__main button__long"
			>
				<div className="inner">load more</div>
			</button>
		)

	return (
		<div className={styles.comics__list}>
			{spinner}
			{content}
			{error}
			{btn}
		</div>
	)
}

const View: React.FunctionComponent<{ comicsList: ComicsListType[] }> = ({ comicsList }) => {
	return (
		<ul className={styles.comics__grid}>
			{comicsList.map((item, index) => {
				if (item.thumbnail.indexOf("image_not_available") !== -1) {
				}

				return (
					<li key={index} className={styles.comics__item}>
						<Link to={`./${item.id}`}>
							<img
								src={item.thumbnail}
								alt="ultimate war"
								className={styles.comics__item_img}
								style={{
									objectFit:
										item.thumbnail.indexOf("image_not_available") !== -1
											? "contain"
											: "cover",
								}}
							/>
							<div className={styles.comics__item_name}>{item.title}</div>
							<div className={styles.comics__item_price}>{item.price}$</div>
						</Link>
					</li>
				)
			})}
		</ul>
	)
}
