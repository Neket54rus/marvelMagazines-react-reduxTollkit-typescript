import React from "react"
import { useSelector } from "react-redux"

import { RootState } from "../../redux/"
import { CharInfoType } from "../../redux/charInfo/types"
import { Spinner, Error404 } from "../"
import styles from "./CharInfo.module.scss"

export const CharInfo: React.FunctionComponent = () => {
	const { char, status } = useSelector((state: RootState) => state.charInfo)

	const skeleton =
		char.length < 1 && status !== "loading..." && status !== "fail(" ? <Skeleton /> : null
	const spinner = status === "loading..." ? <Spinner /> : null
	const content = char.length > 0 && status === "Ok!!" ? <View char={char} /> : null
	const error = status === "fail(" ? <Error404 /> : null

	return (
		<div className={styles.char__info}>
			{skeleton}
			{spinner}
			{content}
			{error}
		</div>
	)
}

const Skeleton: React.FunctionComponent = () => {
	return (
		<>
			<p className={styles.char__select}>Please select a character to see information</p>
			<div className="skeleton">
				<div className="pulse skeleton__header">
					<div className="pulse skeleton__circle"></div>
					<div className="pulse skeleton__mini"></div>
				</div>
				<div className="pulse skeleton__block"></div>
				<div className="pulse skeleton__block"></div>
				<div className="pulse skeleton__block"></div>
			</div>
		</>
	)
}

const View: React.FunctionComponent<{ char: CharInfoType[] }> = ({ char }) => {
	return (
		<>
			{char.map((item) => {
				return (
					<React.Fragment key={item.id}>
						<div className={styles.char__basics}>
							<img
								src={item.thumbnail}
								alt="abyss"
								style={{
									objectFit:
										item.thumbnail.indexOf("image_not_available") !== -1
											? "contain"
											: "cover",
								}}
							/>
							<div>
								<div className={styles.char__info_name}>{item.name}</div>
								<div className={styles.char__btns}>
									<a href={item.homePage} className="button button__main">
										<div className="inner">homepage</div>
									</a>
									<a href={item.wiki} className="button button__secondary">
										<div className="inner">Wiki</div>
									</a>
								</div>
							</div>
						</div>
						<div className={styles.char__descr}>
							{item.description.length === 0 ? "No description" : item.description}
						</div>
						<div className={styles.char__comics}>Comics:</div>
						<ul className={styles.char__comics_list}>
							{item.comics.length < 1
								? "No comics"
								: item.comics.map((item, index) => {
										return (
											<li key={index} className={styles.char__comics_item}>
												{index + 1}. {item.name}
											</li>
										)
								  })}
						</ul>
					</React.Fragment>
				)
			})}
		</>
	)
}
