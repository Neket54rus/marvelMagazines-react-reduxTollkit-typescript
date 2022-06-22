import React from "react"
import { useSelector } from "react-redux"

import { RootState } from "../../redux/"
import { fetchRandomChar } from "../../redux/randomChar/asyncActions"
import { useAppDispatch } from "../../redux"
import { RandomCharType } from "../../redux/randomChar/types"
import { Spinner, Error404 } from "../"

import mjolnirIcon from "../../assets/img/mjolnir.png"
import styles from "./RandomChar.module.scss"

export const RandomChar: React.FunctionComponent = () => {
	const dispatch = useAppDispatch()
	const char = useSelector((state: RootState) => state.randomChar.char)
	const status = useSelector((state: RootState) => state.randomChar.status)

	React.useEffect(() => {
		dispatch(fetchRandomChar())
		// eslint-disable-next-line
	}, [])

	const loading = status === "loading..." ? <Spinner /> : null
	const content = status === "Ok!!" ? <View char={char} /> : null
	const error = status === "fail(" ? <Error404 /> : null

	return (
		<div className={styles.randomchar}>
			{loading}
			{content}
			{error}
			<div className={styles.randomchar__static}>
				<p className={styles.randomchar__title}>
					Random character for today!
					<br />
					Do you want to get to know him better?
				</p>
				<p className={styles.randomchar__title}>Or choose another one</p>
				<button
					onClick={() => dispatch(fetchRandomChar())}
					disabled={status === "loading..."}
					className="button button__main"
				>
					<div className="inner">try it</div>
				</button>
				<img src={mjolnirIcon} alt="mjolnir" className={styles.randomchar__decoration} />
			</div>
		</div>
	)
}

const View: React.FunctionComponent<{ char: RandomCharType[] }> = ({ char }) => {
	return (
		<div className={styles.randomchar__block}>
			{char.map((item) => {
				return (
					<React.Fragment key={item.id}>
						<img
							src={item.thumbnail}
							style={{
								objectFit:
									item.thumbnail.indexOf("image_not_available") !== -1
										? "contain"
										: "cover",
							}}
							alt="Random character"
							className={styles.randomchar__img}
						/>
						<div className={styles.randomchar__info}>
							<p className={styles.randomchar__name}>{item.name}</p>
							<p className={styles.randomchar__descr}>{item.description}</p>
							<div className={styles.randomchar__btns}>
								<a href={item.homePage} className="button button__main">
									<div className="inner">homepage</div>
								</a>
								<a href={item.wiki} className="button button__secondary">
									<div className="inner">Wiki</div>
								</a>
							</div>
						</div>
					</React.Fragment>
				)
			})}
		</div>
	)
}
