import React from "react"

import abyssIcon from "../../assets/img/abyss.jpg"

import styles from "./CharList.module.scss"

export const CharList: React.FunctionComponent = () => {
	return (
		<div className={styles.char__list}>
			<ul className={styles.char__grid}>
				<li className={styles.char__item}>
					<img src={abyssIcon} alt="abyss" />
					<div className={styles.char__name}>Abyss</div>
				</li>
				<li className={`${styles.char__item} ${styles.char__item_selected}`}>
					<img src={abyssIcon} alt="abyss" />
					<div className={styles.char__name}>Abyss</div>
				</li>
				<li className={styles.char__item}>
					<img src={abyssIcon} alt="abyss" />
					<div className={styles.char__name}>Abyss</div>
				</li>
				<li className={styles.char__item}>
					<img src={abyssIcon} alt="abyss" />
					<div className={styles.char__name}>Abyss</div>
				</li>
				<li className={styles.char__item}>
					<img src={abyssIcon} alt="abyss" />
					<div className={styles.char__name}>Abyss</div>
				</li>
				<li className={styles.char__item}>
					<img src={abyssIcon} alt="abyss" />
					<div className={styles.char__name}>Abyss</div>
				</li>
				<li className={styles.char__item}>
					<img src={abyssIcon} alt="abyss" />
					<div className={styles.char__name}>Abyss</div>
				</li>
				<li className={styles.char__item}>
					<img src={abyssIcon} alt="abyss" />
					<div className={styles.char__name}>Abyss</div>
				</li>
				<li className={styles.char__item}>
					<img src={abyssIcon} alt="abyss" />
					<div className={styles.char__name}>Abyss</div>
				</li>
			</ul>
			<button className="button button__main button__long">
				<div className="inner">load more</div>
			</button>
		</div>
	)
}
