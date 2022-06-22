import React from "react"

import { ComicsList } from "../components"

import avengersPng from "../assets/img/Avengers.png"
import avengersLogoPng from "../assets/img/Avengers_logo.png"

export const Comics: React.FunctionComponent = () => {
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

			<ComicsList />
		</>
	)
}
