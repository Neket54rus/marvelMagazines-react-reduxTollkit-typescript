import React from "react"
import { useSelector } from "react-redux"

import { RootState } from "../../redux/"
import { FindCharType } from "../../redux/findChar/types"
import avengersLogoPng from "../../assets/img/Avengers_logo.png"
import avengersPng from "../../assets/img/Avengers.png"

import styles from "./Char.module.scss"

export const Char: React.FunctionComponent = () => {
	const { char, status } = useSelector((state: RootState) => state.findChar)

	const content = char.length > 0 && status === "Ok!!" ? <View char={char} /> : null

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
			{content}
		</>
	)
}

const View: React.FunctionComponent<{ char: FindCharType[] }> = ({ char }) => {
	return (
		<div className={styles.single_comic}>
			{char.map((item) => {
				return (
					<React.Fragment key={item.id}>
						<img
							src={item.thumbnail}
							alt={item.name}
							className={styles.single_comic__char_img}
						/>
						<div className={styles.single_comic__info}>
							<h2 className={styles.single_comic__name}>{item.name}</h2>
							<p className={styles.single_comic__descr}>{item.description}</p>
						</div>
					</React.Fragment>
				)
			})}
		</div>
	)
}
