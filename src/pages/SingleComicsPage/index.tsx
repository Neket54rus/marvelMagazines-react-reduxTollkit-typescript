import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import { RootState } from "../../redux/"
import { useAppDispatch } from "../../redux"
import { fetchSingleComicsPage } from "../../redux/singleComicsPage/asyncActions"
import { reloadItem } from "../../redux/singleComicsPage/slice"
import { Spinner, Error404 } from "../../components"
import { SingleComicsPageType } from "../../redux/singleComicsPage/types"
import avengersLogoPng from "../../assets/img/Avengers_logo.png"
import avengersPng from "../../assets/img/Avengers.png"

import styles from "./SingleComisPage.module.scss"

export const SingleComicsPage: React.FunctionComponent = () => {
	const dispatch = useAppDispatch()
	const { singleComicsPage, status } = useSelector((state: RootState) => state.singleComicsPage)
	const { id } = useParams()
	const navigate = useNavigate()

	React.useEffect(() => {
		if (id) {
			dispatch(fetchSingleComicsPage({ id }))
		}
		// eslint-disable-next-line
	}, [])

	const onGoBack = () => {
		navigate(-1)
		dispatch(reloadItem())
	}

	const spinner =
		status === "loading..." ? (
			<div style={{ marginTop: "50px" }}>
				<Spinner />
			</div>
		) : null
	const content =
		status === "Ok!!" ? <View singleComicsPage={singleComicsPage} onGoBack={onGoBack} /> : null
	const error =
		status === "fail(" ? (
			<div style={{ marginTop: "50px" }}>
				<Error404 />
			</div>
		) : null

	return (
		<>
			<div className="app__banner">
				<img src={avengersPng} alt="Avengers" />
				<div className="app__banner-text">
					New comics every week!
					<br />
					Stay tuned!
				</div>
				<img src={avengersLogoPng} alt="Avengers logo" />
			</div>

			{spinner}
			{content}
			{error}
		</>
	)
}

const View: React.FunctionComponent<{
	singleComicsPage: SingleComicsPageType[]
	onGoBack: () => void
}> = ({ singleComicsPage, onGoBack }) => {
	return (
		<div className={styles.single_comic}>
			{singleComicsPage.map((item) => {
				return (
					<React.Fragment key={item.id}>
						<img src={item.thumbnail} alt="x-men" className={styles.single_comic__img} />
						<div className={styles.single_comic__info}>
							<h2 className={styles.single_comic__name}>{item.title}</h2>
							<p className={styles.single_comic__descr}>{item.description}</p>
							<p className={styles.single_comic__descr}>{item.pageCount} pages</p>
							<div className={styles.single_comic__price}>{item.price}$</div>
						</div>
						<button onClick={onGoBack} className={styles.single_comic__back}>
							Back to all
						</button>
					</React.Fragment>
				)
			})}
		</div>
	)
}
