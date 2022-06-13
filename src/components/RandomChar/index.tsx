import React from "react"

import thorIcon from "../../assets/img/thor.jpeg"
import mjolnirIcon from "../../assets/img/mjolnir.png"

import styles from "./RandomChar.module.scss"

export const RandomChar: React.FunctionComponent = () => {
	return (
		<div className={styles.randomchar}>
			<div className={styles.randomchar__block}>
				<img src={thorIcon} alt="Random character" className={styles.randomchar__img} />
				<div className={styles.randomchar__info}>
					<p className={styles.randomchar__name}>Thor</p>
					<p className={styles.randomchar__descr}>
						As the Norse God of thunder and lightning, Thor wields one of the greatest weapons
						ever made, the enchanted hammer Mjolnir. While others have described Thor as an
						over-muscled, oafish imbecile, he's quite smart and compassionate...
					</p>
					<div className={styles.randomchar__btns}>
						<a href="/" className="button button__main">
							<div className="inner">homepage</div>
						</a>
						<a href="/" className="button button__secondary">
							<div className="inner">Wiki</div>
						</a>
					</div>
				</div>
			</div>
			<div className={styles.randomchar__static}>
				<p className={styles.randomchar__title}>
					Random character for today!
					<br />
					Do you want to get to know him better?
				</p>
				<p className={styles.randomchar__title}>Or choose another one</p>
				<button className="button button__main">
					<div className="inner">try it</div>
				</button>
				<img src={mjolnirIcon} alt="mjolnir" className={styles.randomchar__decoration} />
			</div>
		</div>
	)
}
